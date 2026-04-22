import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  standalone: true,
  templateUrl: './education.html',
})
export class EducationComponent {
  readonly education = [
    {
      title: 'Ingeniería de Software',
      org: 'Universidad',
      year: 'En curso',
      icon: '🎓',
      ongoing: true,
    },
    {
      title: 'Programación de Software',
      org: 'SENA',
      year: '2020 – 2022',
      icon: '💻',
    },
    {
      title: 'Back-End Developer with Spring Boot',
      org: 'Oracle Next Education',
      year: '2022 – 2023',
      icon: '☕',
    },
    {
      title: 'Programming Essentials in Python',
      org: 'Cisco Networking Academy',
      year: '2022',
      icon: '🐍',
    },
    {
      title: 'Fundamentos en Redes',
      org: 'Cisco Networking Academy',
      year: '2024',
      icon: '🌐',
    },
  ];

  readonly softSkills = [
    'Trabajo en equipo multidisciplinario',
    'Resolución de problemas bajo presión',
    'Adaptabilidad a requerimientos cambiantes',
    'Gestión ágil con Scrum',
    'Orientación a resultados e impacto social',
    'Aprendizaje continuo y autónomo',
  ];
}
