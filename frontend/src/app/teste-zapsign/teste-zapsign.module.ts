import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { DocComponent } from './doc/doc.component';
import { CompanyComponent } from './company/company.component';
import { HeaderComponent } from './header/header.component';
import { NewUserComponent } from './new-user/new-user.component';
import { NewDocComponent } from './new-doc/new-doc.component';
import { NewCompanyComponent } from './new-company/new-company.component';


@NgModule({
  declarations: [
    // UserComponent,
    DocComponent,
    CompanyComponent,
    HeaderComponent,
    // NewUserComponent,
    // NewDocComponent,
    // NewCompanyComponent,
  ],
  exports: [
    CompanyComponent,
    // UserComponent,
    DocComponent, 
    HeaderComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class TesteZapsignModule { }
