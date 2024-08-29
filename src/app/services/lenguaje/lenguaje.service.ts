import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { LOCALE_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LenguajeService {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  setLanguage(lang: string) {
    localStorage.setItem('locale', lang);
 //   window.location.reload(); 
  }
}