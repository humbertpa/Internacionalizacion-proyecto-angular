import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AlexaComponent } from './alexa/alexa.component';
import { TraduccionComponent } from './traduccion/traduccion.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'alexa', component: AlexaComponent },
  { path: 'traduccion', component: TraduccionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }