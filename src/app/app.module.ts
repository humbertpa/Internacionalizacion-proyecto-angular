import { isDevMode, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AlexaComponent } from './alexa/alexa.component';
import { TraduccionComponent } from './traduccion/traduccion.component';
import { ProjectTemplateComponent } from './project-template/project-template.component';

import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { CambiarIdiomaComponent } from './navbar/cambiar-idioma/cambiar-idioma.component';

import { provideTransloco, TranslocoDirective, TranslocoModule } from '@ngneat/transloco';
import { TranslocoHttpLoader } from 'src/transloco-loader';
import { TranslocoRootModule } from 'src/transloco-root.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AlexaComponent,
    TraduccionComponent,
    ProjectTemplateComponent,
    CambiarIdiomaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslocoModule,
    TranslocoRootModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
