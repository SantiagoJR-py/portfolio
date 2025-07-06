// main-content.component.ts
import { Component, Input } from '@angular/core';
import { ShapeGeneratorComponent } from '../../shared/shape-generator/shape-generator';

@Component({
  selector: 'app-main-content',
  standalone: true,
  templateUrl: './main-content.html',
  styleUrls: ['./main-content.css'],
  imports: [ShapeGeneratorComponent]
})
export class MainContentComponent {
  @Input() isDarkTheme = false;
}