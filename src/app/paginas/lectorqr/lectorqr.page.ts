import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { asistI } from 'models/models';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { InteractionService } from 'src/app/services/interaction.service';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';





@Component({
  selector: 'app-lectorqr',
  templateUrl: './lectorqr.page.html',
  styleUrls: ['./lectorqr.page.scss'],
})
export class LectorqrPage implements OnInit, OnDestroy, AfterViewInit {
  result = null;
  scanActive = false;

  constructor(
    public alertController: AlertController,
    private database: FirestoreService,
    private AuthService: AuthService,
    private interaction: InteractionService) { }

    ngAfterViewInit() {
      BarcodeScanner.prepare();
    }

  ngOnDestroy() {
    BarcodeScanner.stopScan();

  }
  
  async startScanner(){
    const allowed = await this.checkPermission();
    if(allowed) {
    this.scanActive = true;
    const result = await BarcodeScanner.startScan();
    console.log(" file: lectorqr.page.ts line 41 lectorqr startScanner result", result)
    if(result.hasContent){
      this.result = result.content;
      this.scanActive = false;
  
    }
  }
}

  async checkPermission () {
    return new Promise (async (resolve, reject) => {
    const status = await BarcodeScanner.checkPermission({force: true});
    if(status.granted) {
      resolve(true);
    }else if (status.denied){
      const alert = await this.alertController.create({
        header: 'Sin permisos',
        message: 'favor de activar el acceso a la camara',
        buttons: [{
        text: 'No',
        role: 'Cancelar'
        },
        {
          text: 'Abrir Configuraciones',
          handler: () => {
            resolve(false);
            BarcodeScanner.openAppSettings();
          }
        }]
      });
          


await alert.present();
    }else {
      resolve(false);
  }
});
}

stopScanner(){
  BarcodeScanner.stopScan();
  this.scanActive = false;

}
  







  ngOnInit() {
  }

  async asis(){
    await this.interaction.presentLoading('ingresando..')
    const uid = await this.AuthService.getUid();
    console.log(uid);
    const path = uid
    const data: asistI ={
      uid,
      user: null,
      fecha: new Date(),
      asistencia:true,

    }
    this.interaction.closeLoadings();
    this.interaction.presentToast('Asistencia reg');
    this.database.createDoc(data, path, uid)
  }

  
   
}

