import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'star-hack-game';

  name: string;
  disabled = true;

  isInputEmpty() {
    console.log(this.name?.length !== 0)
    console.log(this.name && this.name?.length !== 0)
    return this.name && this.name?.length !== 0;

  }
}
