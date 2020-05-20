import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormComponent} from './form/form.component';
import {AdminComponent} from './admin/admin.component';


const routes: Routes = [
  {
    path: 'form',
    component: FormComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: '**',
    redirectTo: '/form',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
