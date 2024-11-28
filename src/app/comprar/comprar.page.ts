import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonItem, IonInput, IonButton } from '@ionic/angular/standalone';
import { ActivatedRoute, Params } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.page.html',
  styleUrls: ['./comprar.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonGrid, IonRow, IonCol, IonItem, IonInput, IonButton]
})
export class ComprarPage implements OnInit {

  _nombre: any;
  _descripcion: any;
  _precio: any;
  _imagen: any;
  _cantidad: any;

  _cantidadAcomprar: any;
  preciototal: any;

  constructor(private rutaActiva: ActivatedRoute, private toastController: ToastController) { }

  ngOnInit() {
    this._nombre = this.rutaActiva.snapshot.params['nombre'];
    this._descripcion = this.rutaActiva.snapshot.params['descripcion'];
    this._precio = this.rutaActiva.snapshot.params['precio'];
    this._imagen = this.rutaActiva.snapshot.params['imagen'];
    this._cantidad = this.rutaActiva.snapshot.params['cantidad'];
    console.log(this._nombre);
    console.log(this._descripcion);
    console.log(this._precio);
    console.log(this._imagen);
    console.log(this._cantidad);

    this._cantidadAcomprar = 1;
    
  }

  agregarMas(){
    this._cantidadAcomprar += 1;
    if(this._cantidadAcomprar >= this._cantidad){
      this._cantidadAcomprar = this._cantidad;
      
    }
    this.preciototal = this._cantidadAcomprar * this._precio;
  }

  reducir(){
    this._cantidadAcomprar -= 1;
    if(this._cantidadAcomprar <= 0){
      this._cantidadAcomprar = 0;
      
    }
    this.preciototal = this._cantidadAcomprar * this._precio;
  }

  comprar(_nombre:any, _precio:any){
    
    this.mensajeDeAdvertencia("Gracias por su Compra: Has comprado ,"+_nombre+" por un valor de: $"+_precio);
  }

  async mensajeDeAdvertencia(mensaje:any){
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 10000,
      position: 'bottom',
    });

    await toast.present();
  }

}
