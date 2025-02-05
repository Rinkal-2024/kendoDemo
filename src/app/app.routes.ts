import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
  // { path: '**', redirectTo: '/login' },
  {path :'register' ,component : RegisterComponent},
  {path :'login' , component : LoginComponent},
  {path :'dashboard' , component :DashboardComponent}
];
