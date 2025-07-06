import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CursorWaveComponent } from "./shared/cursor-wave/cursor-wave";
import { CursorEffect } from './services/cursor-effect';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CursorWaveComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected title = 'portfolio';

  constructor(private cursorEffect: CursorEffect) {}

  ngOnInit() {
    this.cursorEffect.init();
  }
}
