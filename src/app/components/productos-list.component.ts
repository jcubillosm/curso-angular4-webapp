import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto';

@Component({
  selector: 'productos-list',
  templateUrl: '../views/productos-list.component.html',
  providers: [ProductoService]
})
export class ProductListComponent{
  public titulo: string;
  public productos: Producto[];

  constructor(
      private _route: ActivatedRoute,
      private _router: Router,
      private _productoService: ProductoService
    ){
    this.titulo = 'Listado de productos';
  }
  ngOnInit(){
    console.log('productos-lis.component.ts cargado');

    this._productoService.getProductos().subscribe(
      result =>{
        
        if(result.code != 200){
          console.log(result);
        }else{
          this.productos = result.data;
        }
        console.log('Result => ',result)
      },
      error =>{
        console.log('Se ha producido un error en la petición ',<any>error);
      });
  }
}