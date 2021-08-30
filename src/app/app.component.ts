import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clickevent';
  clickeventone=0;
  clickeventtwo=0;
 cd(){
    this.clickeventone+=1;
  }
  getclickeventtwo(){
    this.clickeventtwo+=1;
  }
}
