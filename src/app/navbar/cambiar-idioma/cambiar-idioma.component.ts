import { Component } from '@angular/core';
import { LenguajeService } from '../../services/lenguaje/lenguaje.service';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-cambiar-idioma',
  templateUrl: './cambiar-idioma.component.html',
  styleUrls: ['./cambiar-idioma.component.css']
})
export class CambiarIdiomaComponent {


  constructor(private lenguajeService: LenguajeService, private transloco: TranslocoService) { }

  isOpen: boolean = false;
  lenguaje: string = 'es';
  url = "https://cdn-icons-png.flaticon.com/128/10602/10602501.png"



  changeLanguage(lang: string) {
    this.lenguaje = lang;
    this.url = (lang == "es") ? "https://cdn-icons-png.flaticon.com/128/10602/10602501.png" : "https://cdn-icons-png.flaticon.com/128/197/197484.png";
    this.transloco.setActiveLang(lang)
    console.log(this.lenguaje)
    this.lenguajeService.setLanguage(lang);
    this.isOpen = false;
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
}
