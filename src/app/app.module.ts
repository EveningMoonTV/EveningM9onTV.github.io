import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PrestationsComponent } from './Pages/prestations/prestations.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { WelcomeComponent } from './Pages/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PrestationsComponent,
    FooterComponent,
    ContactComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: WelcomeComponent},
      {path: 'prestations', component: PrestationsComponent},
      {path: 'contact', component: ContactComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
