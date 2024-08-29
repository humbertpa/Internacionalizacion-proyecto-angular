import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-alexa',
  templateUrl: './alexa.component.html',
  styleUrls: ['./alexa.component.css']
})
export class AlexaComponent implements OnInit {

  public periodo: string = '';
  public imageUrl: string = 'https://media.croma.com/image/upload/v1677049300/Croma%20Assets/Small%20Appliances/Smart%20Home%20Devices/Images/269862_oze1s7.png?tr=w-640';
  public titulo: string = '';
  public descripcion: string = '';


  constructor(private transloco: TranslocoService) { }

  ngOnInit() {

    this.transloco.selectTranslateObject('alexa').subscribe((alexa: any) => {
      this.transloco.translate

      this.titulo = alexa.titulo
      this.periodo = alexa.periodo
      this.descripcion = alexa.descripcion

    });
  }

}
