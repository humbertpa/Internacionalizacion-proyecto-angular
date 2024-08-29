import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-traduccion',
  templateUrl: './traduccion.component.html',
  styleUrls: ['./traduccion.component.css']
})
export class TraduccionComponent implements OnInit, OnDestroy {

  public periodo: string = '';
  public imageUrl: string = 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Language_icon.png?20201112103601';
  public titulo: string = '';
  public descripcion: string = '';

  private subscription: Subscription = new Subscription();

  constructor(private transloco: TranslocoService) { }

  ngOnInit(): void {
    


    // Cargar traducciones iniciales
    this.loadTranslations();
    
    // Suscribirse a los cambios de idioma
    this.subscription.add(
      this.transloco.langChanges$.subscribe(() => {
        this.loadTranslations();
      })
    );
  }

  ngOnDestroy(): void {
    // Desuscribirse de todos los suscriptores al destruir el componente
    this.subscription.unsubscribe();
  }

  private loadTranslations(): void {

    

    this.subscription.add(
      this.transloco.selectTranslate('periodo').subscribe(value => {
        this.periodo = value;
      })
    );
    this.subscription.add(
      this.transloco.selectTranslate('titulo').subscribe(value => {
        this.titulo = value;
      })
    );
    this.subscription.add(
      this.transloco.selectTranslate('descripcion').subscribe(value => {
        this.descripcion = value;
      })
    );
  }
}
