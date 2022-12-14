import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-miasistencia',
  templateUrl: './miasistencia.page.html',
  styleUrls: ['./miasistencia.page.scss'],
})
export class MiasistenciaPage implements OnInit {

  constructor(private firestore: FirestoreService) { }

  ngOnInit() {
  }
}
