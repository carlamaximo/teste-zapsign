import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserComponent } from './testezapsign/user/user.component';
import { NewUserComponent } from './testezapsign/newuser/newuser.component';
import { NewCompanyComponent } from './testezapsign/newcompany/newcompany.component';
import { NewDocComponent } from './testezapsign/newdoc/newdoc.component';
import { CompanyComponent } from './testezapsign/company/company.component';
import { DocComponent } from './testezapsign/doc/doc.component';
import { HeaderComponent } from './testezapsign/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    CompanyComponent,
    DocComponent,
    NewUserComponent,
    NewCompanyComponent,
    NewDocComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
