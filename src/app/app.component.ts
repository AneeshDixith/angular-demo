import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-demo';
  constructor(){
    setTimeout(() => {
      this.title = "-This a angular demo"
    }, 2000)
  }
}
