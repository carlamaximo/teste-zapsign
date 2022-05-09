import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewCompanyComponent } from './testezapsign/newcompany/newcompany.component';
import { NewDocComponent } from './testezapsign/newdoc/newdoc.component';
import { NewUserComponent } from './testezapsign/newuser/newuser.component';

const routes: Routes = [
  { path: 'criar-novo-usuario', component: NewUserComponent },
  { path: 'criar-novo-documento', component: NewDocComponent },
  { path: 'criar-nova-empresa', component: NewCompanyComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [ NewCompanyComponent, NewDocComponent, NewUserComponent ]