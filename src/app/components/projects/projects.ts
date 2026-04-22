import { Component } from '@angular/core';

interface Project {
  title: string;
  client: string;
  summary: string;
  highlight?: string;
  tech: string[];
  link?: string;
  featured?: boolean;
  accent: 'primary' | 'secondary' | 'accent';
}

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.html',
})
export class ProjectsComponent {
  readonly projects: Project[] = [
    {
      title: 'Sisojopaz — Jóvenes en Paz',
      client: 'Ministerio de Igualdad · Colombia',
      summary:
        'Plataforma estratégica para automatizar y gestionar programas sociales dirigidos a jóvenes en todo el país. Fui parte del equipo fundador bajo metodología Scrum con sprints acelerados, reemplazando una herramienta obsoleta que ponía en riesgo la atención de miles de jóvenes.',
      highlight: 'Equipo fundador · Escala nacional',
      tech: ['Angular', 'Node.js', 'TypeScript', 'MySQL', 'Scrum'],
      featured: true,
      accent: 'primary',
    },
    {
      title: 'Plataforma de Vinculaciones Digitales',
      client: 'Fincomercio · Cooperativa de Ahorro',
      summary:
        'Responsable de la optimización, modernización y evolución continua de la plataforma de recolección de datos y gestión de ayudas financieras. Mejoré la experiencia de usuario e implementé seguridad en frontend y backend.',
      highlight: 'Seguridad web · Integraciones',
      tech: ['Angular', 'Node.js', 'TypeScript', 'MySQL'],
      accent: 'secondary',
    },
    {
      title: 'Zona Administrativa — Vinculaciones',
      client: 'Fincomercio',
      summary:
        'Panel administrativo para gestión integral de usuarios: antecedentes, seguimiento en tiempo real, roles, generación de PDF/Excel y dashboards estadísticos.',
      highlight: 'Migración Angular 16 → 19 · 450 MB → 300 MB',
      tech: ['Angular 19', 'Tailwind 4', 'DaisyUI', 'Node.js', 'TypeScript'],
      featured: true,
      accent: 'accent',
    },
    {
      title: 'Sistema de Reservas de Canchas',
      client: 'Proyecto Colaborativo',
      summary:
        'Plataforma colaborativa para la reserva de canchas sintéticas. Participé en frontend y backend, gestionando disponibilidad, horarios y confirmación de reservas.',
      tech: ['Angular', 'Node.js', 'TypeScript', 'MySQL'],
      accent: 'primary',
    },
    {
      title: 'API Central Hospitalaria',
      client: 'Freelance · Sector Salud',
      summary:
        'API central para gestión hospitalaria: centralizó pacientes, historias clínicas y procesos administrativos de una institución de salud privada.',
      tech: ['Node.js', 'TypeScript', 'REST', 'MySQL'],
      accent: 'secondary',
    },
  ];
}
