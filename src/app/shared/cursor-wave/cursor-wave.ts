import { Component, HostListener } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-cursor-wave',
  standalone: true,
  imports: [NgStyle],
  template: '<div class="cursor-wave" [ngStyle]="waveStyle"></div>',
  styles: [`
    .cursor-wave {
      position: fixed;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(139,69,19,0.3) 0%, transparent 70%);
      transform: translate(-50%, -50%) scale(0);
      pointer-events: none;
      z-index: 9999;
      mix-blend-mode: multiply;
      transition: transform 0.4s ease-out, opacity 0.4s ease-out;
    }
  `]
})
export class CursorWaveComponent {
  waveStyle: { left: string; top: string; transform: string; background?: string } = {
    left: '0px',
    top: '0px',
    transform: 'translate(-50%, -50%) scale(0)'
  };

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.waveStyle = {
      left: `${e.clientX}px`,
      top: `${e.clientY}px`,
      transform: 'translate(-50%, -50%) scale(1)'
    };
    
    // Reset animation
    setTimeout(() => {
      this.waveStyle = {
        ...this.waveStyle,
        transform: 'translate(-50%, -50%) scale(0)'
      };
    }, 400);
  }

  @HostListener('document:click', ['$event'])
  onClick(e: MouseEvent) {
    // Efecto especial al hacer click
    this.waveStyle = {
      left: `${e.clientX}px`,
      top: `${e.clientY}px`,
      transform: 'translate(-50%, -50%) scale(3)',
      background: 'radial-gradient(circle, rgba(255,215,0,0.4) 0%, transparent 70%)'
    };
  }
}