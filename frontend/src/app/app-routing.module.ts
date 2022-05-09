import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewCompanyComponent } from './teste-zapsign/new-company/new-company.component';
import { NewDocComponent } from './teste-zapsign/new-doc/new-doc.component';
import { NewUserComponent } from './teste-zapsign/new-user/new-user.component';

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