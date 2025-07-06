// navbar.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class NavbarComponent {
  @Input() isDarkTheme = false;
  @Output() themeToggled = new EventEmitter<void>();

  toggleTheme() {
    this.themeToggled.emit();
  }
}