import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})

export class ListadoComponent {

  heroes: string[] = ['Iron man', 'Thor', 'Hulk', 'Spiderman'];
  heroeBorrando: string = '';

  borrarHeroe(){
    this.heroeBorrando = this.heroes.shift() || '';
  }

}
