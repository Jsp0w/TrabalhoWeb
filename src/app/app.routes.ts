import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
    {path:"", component:HomeComponent},
    {path:"aboutme",component:AboutmeComponent},
    {path:"projects",component:ProjectsComponent},
    {path:"**", component:PageNotFoundComponent}
];
