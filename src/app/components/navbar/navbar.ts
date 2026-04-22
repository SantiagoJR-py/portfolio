import { Component, OnInit, signal, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
})
export class NavbarComponent implements OnInit {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  readonly theme = signal<'light' | 'night'>('night');
  readonly menuOpen = signal(false);

  readonly links = [
    { href: '#about', label: 'Sobre mí' },
    { href: '#stack', label: 'Stack' },
    { href: '#experience', label: 'Experiencia' },
    { href: '#projects', label: 'Proyectos' },
    { href: '#education', label: 'Educación' },
    { href: '#contact', label: 'Contacto' },
  ];

  ngOnInit(): void {
    if (!this.isBrowser) return;
    const saved = (localStorage.getItem('theme') as 'light' | 'night' | null) ?? 'night';
    this.applyTheme(saved);
  }

  toggleTheme(): void {
    const next = this.theme() === 'night' ? 'light' : 'night';
    this.applyTheme(next);
  }

  private applyTheme(t: 'light' | 'night'): void {
    this.theme.set(t);
    if (this.isBrowser) {
      document.documentElement.setAttribute('data-theme', t);
      localStorage.setItem('theme', t);
    }
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
