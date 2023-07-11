import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularLesson4';

  constructor(public router:Router) {}
  
  menuLink(link: string){
    this.router.navigate([link]);
  }
}
