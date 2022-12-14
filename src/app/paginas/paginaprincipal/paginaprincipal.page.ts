import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-paginaprincipal',
  templateUrl: './paginaprincipal.page.html',
  styleUrls: ['./paginaprincipal.page.scss'],
})
export class PaginaprincipalPage implements OnInit {
  subjects;
  cajas:any = [
    {
      "cajas_id": "1",
      "image": "codigoqr (1).jpg",
      "title": "Lector QR",
      "url": "/lectorqr"
      
    },
    {
      "cajas_id": "2",
      "image": "asis2.png",
      "title": "Mi asistencia",
      "url": "/miasistencia"
    },
    {
      "cajas_id": "3",
      "image": "mensaje (2).png",
      "title": "Avisos de profesores",
      "url": "/avisos"
    },
    {
      "cajas_id": "4",
      "image": "estr.png",
      "title": "Mis datos",
      "url": "/horario"
      
    },
    {
      "cajas_id": "5",
      "image": "enlace1.png",
      "title": "Enlaces externos",
      "url": "/ramos"
      
    },
    {
      "cajas_id": "6",
      "image": "ayu3.png",
      "title": "¿Necesitas Ayuda?",
      "url": "/ayuda"
      
    }
  ]

  username:string='';

  constructor(
    private router:Router,
    private activatedRouter:ActivatedRoute,
    private menu:MenuController
  ) {

    this.activatedRouter.queryParams.subscribe(params=>{
      if(this.router.getCurrentNavigation().extras.state){

        let usuario=this.router.getCurrentNavigation().extras.state.miusuario;
        console.log("Llego el state: " + usuario.username);
        this.username=usuario.username;
      }
      
    })


  }
ngOnInit() {
  this.subjects = [
 
    {
      img: 'assets/Commons_QR_code (1).png',
      name: 'Escanear QR'
     
    },
    {
      img: 'assets/ASISTENCIA_TOMAR (2).png',
      name: 'Mi asistencia'
    },
    {
      img: 'assets/mensaje (1).png',
      name: 'Mensajes de profesores'
    },
    {
      img: 'assets/horarioalumnos.png',
      name: 'Tus horarios de clases'
    },
    {
      img: 'assets/alumno (2).png',
      name: 'Datos de alumno'
    },
    {
      img: 'assets/ayuda (1).png',
      name: '¿Necesitas ayuda?'
    }
  ]

}

goToSubject(){

}

  verMenu(){
    this.menu.open('first');
  }



}
