import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { UserI } from 'models/models';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  datos: UserI = { 
    nombre: null,
    rut: null,
    correo: null,
    uid: null,
    password: null,
    perfil: 'Alumno'
  }

 constructor(private auth: AuthService,
  private firestore: FirestoreService,
  private interaction: InteractionService,
  private router: Router){ }

 ngOnInit() {}

 async registrar() {
  this.interaction.presentLoading('registrando...')
  console.log('datos ->', this.datos);
  const res= await this.auth.registrarUser(this.datos).catch( error => {
    this.interaction.closeLoadings();
    this.interaction.presentToast('error')
    console.log('error');
  })
  if (res) { 
    console.log('Cuenta creada correctamente');
    const path = 'Usuarios';
    const id = res.user.uid;
    this.datos.uid = id;
    this.datos.password = null
    await this.firestore.createDoc(this.datos, path, id); 
    this.interaction.closeLoadings();
    this.interaction.presentToast('Alumno registrado con exito');
    this.router.navigate(['/home'])

  }

}
   
}