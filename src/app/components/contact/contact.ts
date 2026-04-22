import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.html',
})
export class ContactComponent {
  readonly currentYear = new Date().getFullYear();

  readonly channels = [
    {
      label: 'Email',
      value: 'santiago.jr.dev@gmail.com',
      href: 'mailto:santiago.jr.dev@gmail.com',
      copy: 'santiago.jr.dev@gmail.com',
    },
    {
      label: 'WhatsApp',
      value: '+57 311 868 2172',
      href: 'https://wa.me/573118682172',
      copy: '+573118682172',
    },
    {
      label: 'Ubicación',
      value: 'Colombia · Remoto',
      href: null,
    },
  ];
}
