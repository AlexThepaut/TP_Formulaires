import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PATH_USER } from '../app.routes.constantes';
import { User } from '../models/user.model';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

import { isFirstCharUppercaseValidator } from "../validators/name-validator";
import { isTelValidValidator } from '../validators/tel-validator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nomCtrl: FormControl;
  prenomCtrl: FormControl;
  telCtrl: FormControl;
  emailCtrl: FormControl;
  connaissanceCtrl: FormControl;
  userForm: FormGroup;

  constructor(fb: FormBuilder) {
    // Création des contrôles
    this.nomCtrl = fb.control('', [Validators.required, isFirstCharUppercaseValidator]);
    this.prenomCtrl = fb.control('', [Validators.required]);
    this.telCtrl = fb.control('', [isTelValidValidator]); 
    this.emailCtrl = fb.control('', [Validators.email, Validators.required]);
    this.connaissanceCtrl = fb.control('', [Validators.required]);
    // Création du groupe (aka le formulaire)
    this.userForm = fb.group({
      nom: this.nomCtrl,
      prenom: this.prenomCtrl,
      tel: this.telCtrl,
      email: this.emailCtrl,
      connaissance: this.connaissanceCtrl
    });
  }
  handleClear() {
    this.nomCtrl.setValue('');
    this.prenomCtrl.setValue('');
    this.telCtrl.setValue('');
    this.emailCtrl.setValue('');
    this.connaissanceCtrl.setValue('');
  }
  handleSubmit() {
    console.log(this.userForm.value);
  }
  ngOnInit() {
  }
}
