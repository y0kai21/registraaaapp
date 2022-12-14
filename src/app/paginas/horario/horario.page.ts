import { Component, OnInit } from '@angular/core';
import { UserI } from 'models/models';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.page.html',
  styleUrls: ['./horario.page.scss'],
})
export class HorarioPage implements OnInit {

  uid: string = null;
  info: UserI = null;

  constructor(private authService: AuthService,
    private firestoreService: FirestoreService) { }

  async ngOnInit() {
    console.log('estoy en mi perfil');
    this.getUid();
    this.authService.stateUser().subscribe( res => {
      console.log('en perfil - estado de autenticacion ->', res);
    })


  }
  async getUid(){
    const uid = await this.authService.getUid();
    if(uid){
      this.uid = uid;
    console.log('uid -> ', this.uid);
    this.getInfoUser();
    }else{
      console.log('no existe uid');
    }
  }
  getInfoUser(){
    const path = 'Usuarios';
    const id = this.uid;
    this.firestoreService.getDoc<UserI>(path, id).subscribe( res => {
      if(res) {
        this.info = res;
      }
    console.log('datos son ->', res);

    })
  }
}
