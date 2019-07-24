import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AutentifikacijaService } from './autentifikacija.service';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyCGhXSQwGqYaQb2fuicX3VhSAUpAdE6RU4",
    authDomain: "tefal-shop.firebaseapp.com",
    });

  }

  title = 'TefalShop';
  constructor(private autentifikacijaService:AutentifikacijaService,
    private router:Router,
   ){}

   odjaviSe(){
    this.autentifikacijaService.odjaviSe();
    this.router.navigate(['/signin']);
  }

}
