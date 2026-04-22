import { Component } from '@angular/core';

interface Tech {
  name: string;
  icon: string;
  iconDark?: string;
}

interface TechGroup {
  title: string;
  tag: string;
  items: Tech[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.html',
})
export class SkillsComponent {
  readonly groups: TechGroup[] = [
    {
      title: 'Frontend',
      tag: 'UI/UX · Reactividad',
      items: [
        { name: 'Angular', icon: 'svg/angular.svg' },
        { name: 'TypeScript', icon: 'svg/typescript.svg' },
        { name: 'Tailwind CSS', icon: 'svg/tailwindcss.svg' },
        { name: 'JavaScript', icon: 'svg/javascript.svg' },
        { name: 'HTML5', icon: 'svg/html5.svg' },
        { name: 'CSS3', icon: 'svg/css_old.svg' },
      ],
    },
    {
      title: 'Backend',
      tag: 'APIs · Servicios',
      items: [
        { name: 'Node.js', icon: 'svg/nodejs.svg' },
        { name: 'TypeScript', icon: 'svg/typescript.svg' },
        { name: 'Spring Boot', icon: 'svg/spring.svg' },
        { name: 'Java', icon: 'svg/java.svg' },
        { name: 'Python', icon: 'svg/python.svg' },
      ],
    },
    {
      title: 'Datos & DevOps',
      tag: 'Persistencia · Infra',
      items: [
        { name: 'MySQL', icon: 'svg/mysql-icon-light.svg', iconDark: 'svg/mysql-icon-dark.svg' },
        { name: 'MariaDB', icon: 'svg/mariadb.svg' },
        { name: 'Git', icon: 'svg/git.svg' },
        { name: 'GitHub', icon: 'svg/GitHub_light.svg', iconDark: 'svg/GitHub_dark.svg' },
        { name: 'Linux', icon: 'svg/linux.svg' },
        { name: 'AWS', icon: 'svg/aws_light.svg', iconDark: 'svg/aws_dark.svg' },
      ],
    },
  ];

  readonly marquee: Tech[];

  constructor() {
    const all = this.groups.flatMap((g) => g.items);
    this.marquee = [...all, ...all];
  }
}
