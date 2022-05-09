import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { TesteZapsignModule } from './teste-zapsign';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserComponent } from './teste-zapsign/user/user.component';
import { NewUserComponent } from './teste-zapsign/new-user/new-user.component';
import { NewCompanyComponent } from './teste-zapsign/new-company/new-company.component';
import { NewDocComponent } from './teste-zapsign/new-doc/new-doc.component';

@NgModule({
  declarations: [
    AppComponent,
    // TesteZapsignModule,
    UserComponent,
    NewUserComponent,
    NewCompanyComponent,
    NewDocComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    TesteZapsignModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
