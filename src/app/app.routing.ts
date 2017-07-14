import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import {HomeComponent } from './components/home.component';
import {ErrorComponent } from './components/error.component';
import { ProductListComponent } from './components/productos-list.component';
import { ProductoAddComponent } from './components/producto-add.component';


const appRoutes: Routes =[
  {path:'', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'productos', component: ProductListComponent},
  {path: 'crear-producto', component: ProductoAddComponent},
  {path:'**', component: ErrorComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);