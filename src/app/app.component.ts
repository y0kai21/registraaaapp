import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserI } from 'models/models';
import { AuthService } from './services/auth.service';
import { FirestoreService } from './services/firestore.service';
import { InteractionService } from './services/interaction.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  login: boolean = false;
  rol: 'alumno' | 'alumno' = null;
  
  constructor(private auth: AuthService,
    private interaction: InteractionService,
    private router: Router,
    private firestore: FirestoreService) {
      this.auth.stateUser().subscribe( res => {
        if(res) {
          console.log('esta logeado');
          this.login = true;
          this.getDatosUser(res.uid)

          
        } else {
          console.log('no esta logeado');
          this.login = false;
        }

      })
    }

  ngOnInit(){}

  loginApp(){
    this.login = true;
  }

  logout(){
    this.auth.logut();
    this.interaction.presentToast('Sesion cerrada con exito.');
    this.router.navigate(['/home'])
  }

  getDatosUser(uid: string){
    const path = 'Usuarios';
    const id = uid;
    this.firestore.getDoc<UserI>(path, id).subscribe( res => {
      console.log('datos -> ', res);
      if(res){
        res.perfil
      }
    })
  }

}
