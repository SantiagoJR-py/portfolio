import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Shape {
  id: number;
  sides: number;
  width: number;
  height: number;
  x: number;
  y: number;
  color: string;
  dx: number;
  dy: number;
  rotation: number;
}

@Component({
  selector: 'app-shape-generator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shape-generator.html',
  styleUrl: './shape-generator.css'
})
export class ShapeGeneratorComponent implements OnInit, OnDestroy {
  shapes: Shape[] = [];
  private animationFrameId: number | null = null;
  private maxShapes = 15;
  private screenWidth = window.innerWidth;
  private screenHeight = window.innerHeight;

  // Paleta de colores personalizada
  private colorPalette = [
    '#ffe74c', // Amarillo
    '#ff5964', // Rojo
    '#457b9d', // Azul
    '#240046', // Morado oscuro
    '#a53860'  // Rosa oscuro
  ];

  // Configuración de tamaños
  private minSize = 140;
  private maxSize = 330;

  ngOnInit(): void {
    this.generateShapes();
    this.animate();
  }

  ngOnDestroy(): void {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  @HostListener('window:resize')
  onResize(): void {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }

  generateShapes(): void {
    const numShapes = Math.floor(Math.random() * 5) + 3;
    
    for (let i = 0; i < numShapes && this.shapes.length < this.maxShapes; i++) {
      const sides = Math.floor(Math.random() * 6) + 3; // 3-8 lados
      const size = Math.floor(Math.random() * (this.maxSize - this.minSize)) + this.minSize;
      
      this.shapes.push({
        id: Date.now() + i,
        sides,
        width: sides === 4 ? size * (Math.random() * 0.5 + 0.8) : size,
        height: size,
        x: Math.random() * (this.screenWidth - size * 2) + size,
        y: Math.random() * (this.screenHeight - size * 2) + size,
        color: this.getRandomColorFromPalette(),
        dx: (Math.random() - 1) * 1,
        dy: (Math.random() - 1) * 1,
        rotation: Math.random() * 360
      });
    }
  }

  removeShape(id: number): void {
    this.shapes = this.shapes.filter(shape => shape.id !== id);
  }

  private getRandomColorFromPalette(): string {
    return this.colorPalette[Math.floor(Math.random() * this.colorPalette.length)];
  }

  animate(): void {
    this.shapes.forEach(shape => {
      shape.x += shape.dx;
      shape.y += shape.dy;
      shape.rotation += 0.1;

      if (shape.x <= 0 || shape.x + shape.width >= this.screenWidth) {
        shape.dx = -shape.dx;
      }

      if (shape.y <= 0 || shape.y + shape.height >= this.screenHeight) {
        shape.dy = -shape.dy;
      }
    });

    this.animationFrameId = requestAnimationFrame(() => this.animate());
  }

  getShapePath(shape: Shape): string {
    const centerX = shape.width / 2;
    const centerY = shape.height / 2;
    const radius = Math.min(shape.width, shape.height) / 2;
    const cornerRadius = Math.min(shape.width, shape.height) / 5;

    return shape.sides === 4 
      ? this.getRoundedRectanglePath(shape.width, shape.height, cornerRadius)
      : this.getPolygonPath(shape.sides, radius, centerX, centerY);
  }

  private getRoundedRectanglePath(width: number, height: number, radius: number): string {
    return `
      M${radius},0
      L${width - radius},0
      Q${width},0 ${width},${radius}
      L${width},${height - radius}
      Q${width},${height} ${width - radius},${height}
      L${radius},${height}
      Q0,${height} 0,${height - radius}
      L0,${radius}
      Q0,0 ${radius},0
      Z
    `;
  }

  private getPolygonPath(sides: number, radius: number, centerX: number, centerY: number): string {
    return Array.from({ length: sides }, (_, i) => {
      const angle = (i * 2 * Math.PI / sides) - Math.PI / 2;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      return `${i === 0 ? 'M' : 'L'}${x},${y}`;
    }).join('') + 'Z';
  }
}