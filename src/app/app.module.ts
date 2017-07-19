import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './Components/app.component';
import { HeroesComponent } from './Components/heroes.component';
import { DashboardComponent } from './Components/dashboard.component';
import { HeroDetailComponent } from './Components/hero-detail.component';
import { HeroService } from './Services/hero.service';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
    declarations: [
        AppComponent,
        HeroesComponent,
        DashboardComponent,
        HeroDetailComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    providers: [
        HeroService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
