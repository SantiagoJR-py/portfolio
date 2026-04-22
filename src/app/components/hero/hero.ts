import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
})
export class HeroComponent {
  readonly orbitIcons = [
    { src: 'svg/angular.svg', alt: 'Angular' },
    { src: 'svg/typescript.svg', alt: 'TypeScript' },
    { src: 'svg/nodejs.svg', alt: 'Node.js' },
    { src: 'svg/tailwindcss.svg', alt: 'Tailwind' },
    { src: 'svg/spring.svg', alt: 'Spring' },
    { src: 'svg/mysql-icon-dark.svg', alt: 'MySQL' },
  ];
}
