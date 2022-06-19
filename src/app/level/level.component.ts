import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.css']
})
export class LevelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name: string;
  disabled = true;
  success = false;
  level: number = 1;
  taskTitle: string = 'Hi, ich bin Captain Star Hack, wie heißt du?';
  taskDescription: string = 'Bitte weise der Variablen deinen Namen zu';

  checkInput() {
    if( this.name && this.name?.length !== 0) {
      this.disabled = false;
      this.success = true;
      return
    }
    this.disabled = true;
    this.success = false;
  }
}
