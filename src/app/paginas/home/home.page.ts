import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { InteractionService } from 'src/app/services/interaction.service';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  credenciales = {
   correo: null,
   password: null

  }

constructor(private auth: AuthService,
  private router: Router,
  private interaction: InteractionService){ }

ngOnInit() { }

async login(){
  await this.interaction.presentLoading('ingresando..')
  console.log('credenciales -> ',this.credenciales);
  const res = await this.auth.login(this.credenciales.correo, this.credenciales.password).catch( error =>{})
  console.log('error');
  this.interaction.closeLoadings();
  this.interaction.presentToast('Datos invalidos')
  if (res) {
    console.log('res -> ', res);
    this.interaction.closeLoadings();
    this.interaction.presentToast('ingresado con exito');
    this.router.navigate(['/paginaprincipal'])
  }
}


}