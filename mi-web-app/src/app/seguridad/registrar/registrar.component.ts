import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css'],
})
export class RegistrarComponent implements OnInit {
  constructor() {}

  email: string = '';
  pass: string = '';
  ngOnInit(): void {}

  registrarUsuario(form: NgForm) {

    
    console.log(form);
    this.email = form.value.email;
    this.pass = form.value.password;
    form.resetForm()
    console.log('Email: ',this.email);
    console.log('Password: ',this.pass);
    
  }
}
