import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CourseComponent } from "./course/course.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'course',
    component: CourseComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const Routing = [MainComponent, CourseComponent, LoginComponent]
