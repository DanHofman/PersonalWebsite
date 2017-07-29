import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LandingComponent } from './main/landing/landing.component';
import { ContactComponent } from './main/contact/contact.component';
import { AboutComponent } from './main/about/about.component';
import { PortfolioComponent } from './main/portfolio/portfolio.component';
import { WritingComponent } from './main/writing/writing.component';

const appRoutes: Routes = [
  { path: 'portfolio', component: PortfolioComponent },
  { path: '', component: LandingComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LandingComponent,
    ContactComponent,
    AboutComponent,
    PortfolioComponent,
    WritingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
