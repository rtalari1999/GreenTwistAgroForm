import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StylesComponent } from './styles/styles.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DashboardComponent, StylesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'GreenTwist';
  userName: string = '';
  isUserName: boolean = true;
  isSearch: boolean = false;
  
// ngif example
user(){
  if(this.userName != ''){
    this.isSearch = true;
  }
  else{
    this.isSearch = false;
  }
}
//object
courses = [
  { id: 1, name: "Angular For Beginners" },
  { id: 2, name: "Angular Core Deep Dive" },
  { id: 3, name: "Angular Forms In Depth" },
];
// for loop track
trackCourse(index: number, course: any) {
  return course.id;
}
}
