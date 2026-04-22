import { Component, computed } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.html',
})
export class AboutComponent {
  private readonly birthDate = new Date(2006, 3, 30);

  readonly age = computed(() => {
    const now = new Date();
    let age = now.getFullYear() - this.birthDate.getFullYear();
    const m = now.getMonth() - this.birthDate.getMonth();
    if (m < 0 || (m === 0 && now.getDate() < this.birthDate.getDate())) age--;
    return age;
  });

  readonly highlights = [
    {
      icon: '🏛️',
      title: 'Impacto nacional',
      text: 'Contribuyo a plataformas del Ministerio de Igualdad que atienden a miles de jóvenes colombianos.',
    },
    {
      icon: '⚡',
      title: 'Sprints acelerados',
      text: 'Experiencia real en equipos Scrum que entregan valor bajo presión y con requerimientos cambiantes.',
    },
    {
      icon: '🧩',
      title: 'End-to-end',
      text: 'Frontend reactivo, APIs RESTful, bases de datos relacionales y buenas prácticas de seguridad web.',
    },
    {
      icon: '🚀',
      title: 'Modernización',
      text: 'Migro y optimizo sistemas legacy: Angular 16 → 19, Tailwind 3 → 4, reducción de 450 MB a 300 MB.',
    },
  ];
}
