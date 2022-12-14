import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-restablecer',
  templateUrl: './pagina-restablecer.page.html',
  styleUrls: ['./pagina-restablecer.page.scss'],
  providers: [AuthService],
})
export class PaginaRestablecerPage implements OnInit {
  userEmail = new FormControl('');

  constructor(private authSvc: AuthService, private router:Router) { }

  ngOnInit(): void {

  }

  async onReset(){
    try{
      const email = this.userEmail.value;
      await this.authSvc.resetPassword(email);
      window.alert('Correo enviado, favor de revisar su correo')
      this.router.navigate(['/home']);
    }
    catch(error){
      console.log(error)}
}
}
