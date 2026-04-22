import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.html',
})
export class ExperienceComponent {
  readonly jobs = [
    {
      role: 'Full-Stack Developer',
      company: 'BSC Colombia SAS',
      period: '2023 – Presente',
      duration: '3+ años',
      current: true,
      description:
        'Desarrollo y mantenimiento de plataformas web para programas sociales del Ministerio de Igualdad de Colombia. Trabajo en equipos Scrum con sprints acelerados, modernizando sistemas legacy y construyendo soluciones escalables.',
      tags: ['Angular 19', 'Node.js', 'TypeScript', 'MySQL', 'Scrum'],
    },
    {
      role: 'Desarrollador Backend',
      company: 'Freelance — Sector Salud',
      period: '2022 – 2023',
      duration: '1 año 3 meses',
      current: false,
      description:
        'API central para un sistema hospitalario privado que centralizó la gestión de pacientes, historias clínicas y procesos administrativos. Diseñé los contratos REST y la capa de persistencia.',
      tags: ['Node.js', 'TypeScript', 'REST', 'MySQL'],
    },
  ];
}
