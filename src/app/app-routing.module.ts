import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DanSchneiderComponent } from './DanSchneider/danSchneider.component';
import { AlexaComponent } from './alexa/alexa.component';
import { TraduccionComponent } from './traduccion/traduccion.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'danSchneider', component: DanSchneiderComponent },
  { path: 'alexa', component: AlexaComponent },
  { path: 'traduccion', component: TraduccionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }