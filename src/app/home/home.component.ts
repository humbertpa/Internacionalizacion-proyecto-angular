import { Component, Input } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private translocoService: TranslocoService) { }

  periodo: string = ''
  imageUrl: string = 'https://raw.githubusercontent.com/jsverse/transloco/e327f3b6bacdb31ea318c94429458efc1a250854/logo.svg'
  titulo: string =''
  descripcion: string = ''
}




