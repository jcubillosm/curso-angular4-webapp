import { Component} from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: '../views/home.component.html'
})
export class HomeComponent {
  public titulo: string;

  constructor(){
    this.titulo =  'Página del home';
  }
  ngOnInit(){
    console.log('Se ha cargado el componente home ->');
  }
}