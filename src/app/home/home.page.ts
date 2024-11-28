import { Component, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput, IonButton, IonCard, IonThumbnail, IonGrid, IonRow, IonCol,
  IonCardContent, IonSearchbar, IonModal, IonButtons, IonChip, IonRange, IonList, IonSelect, IonSelectOption, IonInputPasswordToggle, IonAvatar, 
  IonLabel} from '@ionic/angular/standalone';
import { ToastController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import * as productos from './productos.json'; 

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, CommonModule, IonItem, IonInput, IonButton, IonCard, IonThumbnail, IonGrid, IonRow, IonCol,
    IonCardContent, IonSearchbar, IonModal, IonButtons, IonChip, IonRange, IonList, IonSelect, IonSelectOption, IonInputPasswordToggle, IonAvatar, IonLabel],
})
export class HomePage {
  misProductos: any;
  mostrarProductos: any;
  resultados: any[] = [];
  verProducto: boolean = false;
  registro: boolean = false;
  usuarioregistrado : boolean = false;

  //Datos del Usuario
  usuario: any;
  contrasena:any;
  nombreUsuario: any;
  usuarioActivo: boolean = false;

  //Informacion del Producto
  descripcionProducto: any = [{
    id:'',
    imagen:'',
    categoria:'',
    nombre:'',
    precio:'',
    descripcion:'',
    cantidad:''
  }]

  Rangodeprecios: any;
  carritoDeCompras: any = [];
  productosEnCarrito: boolean = true;
  totalcarrito: any = 0;

  constructor(private toastController: ToastController, private route: Router) {
    this.cargarProductos();
    //console.log(this.mostrarProductos);
  }

  ComprarProducto(nombre: any, descripcion: any, precio: any, imagen:any, cantidad:any){
    //this.cerrarModal();
    this.route.navigate(['/comprar', nombre, descripcion, precio, imagen, cantidad]);
    
  }

  cargarProductos(){
    this.misProductos = [
      {
        "id": 1,
        "imagen": "../../assets/headphone.jpg",
        "categoria": "Electrodomésticos",
        "nombre": "Auriculares Bluetooth",
        "precio": 25.99,
        "descripcion": "Auriculares inalámbricos con cancelación de ruido y micrófono.",
        "cantidad": 10
      },
      {
          "id": 2,
          "imagen": "../../assets/tv.jpg",
          "categoria": "Electrodomésticos",
          "nombre": "Televisor LED 50",
          "precio": 399.99,
          "descripcion": "Televisor Full HD con soporte para aplicaciones de streaming.",
          "cantidad": 5
      },
      {
          "id": 3,
          "imagen": "../../assets/fridge.jpg",
          "categoria": "Electrodomésticos",
          "nombre": "Refrigerador Doble Puerta",
          "precio": 549.99,
          "descripcion": "Refrigerador de gran capacidad con función de enfriado rápido.",
          "cantidad": 3
      },
      {
          "id": 4,
          "imagen": "../../assets/iphone.jpg",
          "categoria": "Electrónica",
          "nombre": "Smartphone 5G",
          "precio": 799.99,
          "descripcion": "Teléfono móvil con pantalla AMOLED de 6.7\" y cámara triple.",
          "cantidad": 15
      },
      {
          "id": 5,
          "imagen": "../../assets/barra.png",
          "categoria": "Electrónica",
          "nombre": "Barra de Sonido",
          "precio": 120.00,
          "descripcion": "Barra de sonido con subwoofer inalámbrico.",
          "cantidad": 7
      },
      {
          "id": 6,
          "imagen": "../../assets/licuadora.png",
          "categoria": "Electrodomésticos",
          "nombre": "Licuadora de Alta Velocidad", 
          "precio": 45.99,
          "descripcion": "Licuadora con motor de 1200W y múltiples funciones.",
          "cantidad": 20
      },
      {
          "id": 7,
          "imagen": "../../assets/microondas.jpg",
          "categoria": "Electrodomésticos",
          "nombre": "Microondas Digital",
          "precio": 89.99,
          "descripcion": "Horno microondas con pantalla digital y funciones predefinidas.",
          "cantidad": 12
      },
      {
          "id": 8,
          "imagen": "../../assets/plancha.jpg",
          "categoria": "Electrodomésticos",
          "nombre": "Plancha a Vapor",
          "precio": 29.99,
          "descripcion": "Plancha con sistema antiadherente y función de apagado automático.",
          "cantidad": 25
      },
      {
          "id": 9,
          "imagen": "../../assets/consola.jpg",
          "categoria": "Electrónica",
          "nombre": "Consola de Videojuegos",
          "precio": 499.99,
          "descripcion": "Consola de última generación con 1TB de almacenamiento.",
          "cantidad": 8
      },
      {
          "id": 10,
          "imagen": "../../assets/aspiradora.jpg",
          "categoria": "Electrodomésticos",
          "nombre": "Aspiradora Inteligente",
          "precio": 219.99,
          "descripcion": "Aspiradora robot con navegación inteligente y control por app.",
          "cantidad": 4
      },
      {
          "id": 11,
          "imagen": "../../assets/cafetera.jpg",
          "categoria": "Electrodomésticos",
          "nombre": "Cafetera Automática",
          "precio": 59.99,
          "descripcion": "Cafetera programable con función de autolimpieza.",
          "cantidad": 18
      },
      {
          "id": 12,
          "imagen": "../../assets/tablet.webp",
          "categoria": "Electrónica",
          "nombre": "Tablet 10",
          "precio": 299.99,
          "descripcion": "Tablet con pantalla táctil Full HD y 128GB de almacenamiento.",
          "cantidad": 10
      },
      {
          "id": 13,
          "imagen": "../../assets/ventilador.jpg",  
          "categoria": "Electrodomésticos",
          "nombre": "Ventilador de Torre",
          "precio": 45.99,
          "descripcion": "Ventilador con control remoto y temporizador programable.",
          "cantidad": 22
      },
      {
          "id": 14,
          "imagen": "../../assets/mac.jpg",
          "categoria": "Electrónica",
          "nombre": "Laptop Gamer",
          "precio": 1299.99,
          "descripcion": "Laptop de alto rendimiento con tarjeta gráfica dedicada.",
          "cantidad": 6
      },
      {
          "id": 15,
          "imagen": "../../assets/reloj.png", 
          "categoria": "Electrónica",
          "nombre": "Reloj Inteligente",
          "precio": 199.99,
          "descripcion": "Reloj con monitoreo de salud y notificaciones inteligentes.",
          "cantidad": 25
      },
      {
          "id": 16,
          "imagen": "../../assets/freidora.png",
          "categoria": "Electrodomésticos",
          "nombre": "Freidora de Aire",
          "precio": 99.99,
          "descripcion": "Freidora sin aceite con capacidad para 5 litros.",
          "cantidad": 14
      },
      {
          "id": 17,
          "imagen": "../../assets/horno.jpg",
          "categoria": "Electrodomésticos",
          "nombre": "Horno Eléctrico",
          "precio": 75.99,
          "descripcion": "Horno compacto con funciones de cocción múltiples.",
          "cantidad": 9
      },
      {
          "id": 18,
          "imagen": "../../assets/lavadora.jpg",
          "categoria": "Electrodomésticos",
          "nombre": "Lavadora Automática",
          "precio": 599.99,
          "descripcion": "Lavadora de carga frontal con capacidad de 12 kg.",
          "cantidad": 2
      },
      {
          "id": 19,
          "imagen": "../../assets/seguridad.jpg",
          "categoria": "Electrónica",
          "nombre": "Cámara de Seguridad",
          "precio": 59.99,
          "descripcion": "Cámara con visión nocturna y acceso remoto.",
          "cantidad": 30
      },
      {
          "id": 20,
          "imagen": "../../assets/tostadora.webp",
          "categoria": "Electrodomésticos",
          "nombre": "Tostadora de Pan",
          "precio": 25.99,
          "descripcion": "Tostadora con múltiples niveles de tostado.",
          "cantidad": 17
      },
      {
          "id": 21,
          "imagen": "../../assets/proyector.png",
          "categoria": "Electrónica",
          "nombre": "Proyector Portátil",
          "precio": 249.99,
          "descripcion": "Proyector con resolución Full HD y conectividad inalámbrica.",
          "cantidad": 7
      },
      {
          "id": 22,
          "imagen": "../../assets/exprimidor.png",
          "categoria": "Electrodomésticos",
          "nombre": "Exprimidor Eléctrico",
          "precio": 19.99,
          "descripcion": "Exprimidor automático de cítricos con fácil limpieza.",
          "cantidad": 20
      },
      {
          "id": 23,
          "imagen": "../../assets/altavoz.jpg",
          "categoria": "Electrónica",
          "nombre": "Altavoz Bluetooth",
          "precio": 39.99,
          "descripcion": "Altavoz portátil con sonido estéreo y resistencia al agua.",
          "cantidad": 15
      },
      {
          "id": 24,
          "imagen": "../../assets/humificador.jpg",
          "categoria": "Electrodomésticos",
          "nombre": "Humidificador",
          "precio": 35.99,
          "descripcion": "Humidificador ultrasónico con luz LED.",
          "cantidad": 12
      },
      {
          "id": 25,
          "imagen": "../../assets/monitor.jpg",
          "categoria": "Electrónica",
          "nombre": "Monitor 24",
          "precio": 179.99,
          "descripcion": "Monitor con pantalla IPS Full HD y puerto HDMI.",
          "cantidad": 10
      }
    ]
    console.log("Mis productos son:", this.misProductos);
    this.mostrarProductos = this.misProductos;
  }

  buscarProducto(nombreproducto: any) {
    const criterioLowerCase = nombreproducto.target.value.toLowerCase();
    this.resultados = this.misProductos.filter((producto:any) =>
      producto.nombre.toLowerCase().includes(criterioLowerCase) 
    );
    //console.log(this.resultados);
    this.mostrarProductos = this.resultados;
  }

  FiltrarPorCategoria(categoria:any){
    const criterioLowerCase = categoria.target.value.toLowerCase();
    this.resultados = this.misProductos.filter((producto:any) =>
      producto.categoria.toLowerCase().includes(criterioLowerCase) 
    );
    //console.log(this.resultados);
    this.mostrarProductos = this.resultados;
  }

  // Función para actualizar el rango cuando el usuario lo ajusta
  onRangeChange(event: any) {
    this.Rangodeprecios = event.detail.value;
  }

  ProductosFiltrados(event: any) {
    this.mostrarProductos = [];
    this.Rangodeprecios = event.detail.value;
    this.resultados = this.misProductos.filter((productos:any) =>
      productos.precio <= this.Rangodeprecios
    );
    
    this.mostrarProductos = this.resultados;
    console.log("Productos Filtrados: ",this.misProductos);
  }

  VerCaracteristicasDelProducto(abrir: boolean, id: any, nombre: any, imagen: any, precio: any, descripcion: any, cantidad: any){
    this.verProducto = abrir;
    this.descripcionProducto.id = id;
    this.descripcionProducto.nombre = nombre;
    this.descripcionProducto.imagen = imagen;
    this.descripcionProducto.precio = precio;
    this.descripcionProducto.descripcion = descripcion;
    this.descripcionProducto.cantidad = cantidad;
    console.log("El producto seleccioando es: ",this.descripcionProducto);
  }

  AgregarProducto(nombre: any, imagen: any, precio: any, descripcion: any){
    if(this.usuarioActivo == true){
      this.carritoDeCompras.push({nombre,imagen,precio,descripcion});
      this.totalcarrito = parseFloat((this.totalcarrito + precio).toFixed(2));
      console.log("Carrito: ",this.carritoDeCompras);
    }else{
      this.mensajeDeAdvertencia("El usuario debe de estar Registrado");
    }
    
  }

  iniciarRegistro(abrir: boolean){
    this.registro = abrir;
  }

  cerrarModal(){
    this.verProducto = false;
  }

  cerrarModalRegistro(){
    this.registro = false;
  }

  pinFormatter(value: number) {
    return `${value}`;
  }

  registrarUsuario(){
    if(this.usuario == '' && this.contrasena == ''){
      console.log("Campos de registro vacios");
      this.mensajeDeAdvertencia("Los campos no deben de estar vacios");
    }else{
      localStorage.setItem('usuario', this.usuario);
      localStorage.setItem('contrasena', this.contrasena);
      this.mensajeDeAdvertencia("Usuario Registrado correctamente");
    }
  }

  iniciarSesion(){
    let miusuario = localStorage.getItem('usuario');
    let micontrasena = localStorage.getItem('contrasena');

    if(this.usuario == miusuario && this.contrasena == micontrasena){
      this.usuarioregistrado = true;
      this.nombreUsuario = miusuario;
      this.usuarioActivo = true;
      this.mensajeDeAdvertencia("Inicio sesion correctamente");
    }else{
      this.usuarioregistrado = false;
      this.mensajeDeAdvertencia("Error; Verifique el usuario o la Contraseña");
    }

  }

  ComprarEnCarrito(){
    if(this.usuarioregistrado == true){

    }
  }

  async mensajeDeAdvertencia(mensaje:any){
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 1500,
      position: 'bottom',
    });

    await toast.present();
  }

}

/*
  Módulo de registro: para que un cliente pueda realizar un pedido debe estar registrado, y ##############
  así el sistema debe permitir el inicio de sesión.                                         ##############

  • Módulo de búsqueda básica: el sistema debe contar con un módulo de búsqueda básica  ##############
  que le permite al cliente encontrar los ítems por nombre.                             ##############

  • Módulo de búsqueda avanzada: el sistema debe contar con un módulo que permite la    ##############
  búsqueda con características de interés particular.

  • Módulo de artículos y características: el sistema debe contar con un módulo que muestre      ##############
  los artículos con sus características, la cantidad en stock, la imagen, entre otros. Cuando el ##############
  usuario da click en la imagen se debe ampliar la descripción del producto.                     ##############

  • Módulo de compra por artículo: el sistema debe proporcionar la opción de compra por
  artículo, en el cual se especifica el artículo y la cantidad.

  • Módulo carro de compras: el sistema debe proporcionar un carrito de compras con la ##############
  cantidad de artículos y el precio total a pagar por los artículos.                   ##############
  
  • El catalogo debe mostrar por lo menos 20 artículos dentro del catálogo virtual. Los artículos  ##############
  pueden ser de cualquier índole como zapatos, ropa, artículos electrónicos, libros, etc.           ##############
*/
