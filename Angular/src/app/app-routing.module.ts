import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {UserComponent} from './user/user.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {
    path: 'index', component: HomeComponent,
  },
  {
    path: 'user', component: UserComponent,
  },
  {
    path: '**', component: HomeComponent,
  },
  { path: '',   redirectTo: '/index', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
