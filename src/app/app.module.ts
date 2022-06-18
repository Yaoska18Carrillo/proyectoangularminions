import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//routes
import { AppRoutingModule } from './app.routes';
// services 
import { MinionsService } from './services/minions.service'; 

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MinionsComponent } from './minions/minions.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { MinionComponent } from './minion/minion.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MinionsComponent,
    AboutComponent,
    HomeComponent,
    MinionComponent
  ],
  imports: [
    BrowserModule,NgbModule, AppRoutingModule
  ],
  providers: [MinionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
