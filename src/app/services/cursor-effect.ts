import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursorEffect {
  private cursor!: HTMLElement;

  init() {
    this.cursor = document.createElement('div');
    this.cursor.className = 'cursor-glowing-dot';
    document.body.appendChild(this.cursor);

    document.addEventListener('mousemove', this.trackCursor.bind(this));
    document.addEventListener('mouseenter', () => this.cursor.style.opacity = '1');
    document.addEventListener('mouseleave', () => this.cursor.style.opacity = '0');
  }

  private trackCursor(e: MouseEvent) {
    this.cursor.style.left = `${e.clientX}px`;
    this.cursor.style.top = `${e.clientY}px`;
  }
}
