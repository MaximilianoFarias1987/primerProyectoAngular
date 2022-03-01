import { Component } from '@angular/core';

@Component({
  selector: 'app-Usuario',
  templateUrl: './usuario.component.html',
})
export class UsuarioComponent {
  usuarios = ['Luis', 'Fernando', 'Maria'];

  usuarioNombre = '';

  visible = false;
  contador = 0;

  constructor() {
    setTimeout(() => {
      this.visible = true
    }, 3000);
  }

  onAgregarUsuario() {
    this.usuarios.push(this.usuarioNombre);
    this.usuarioNombre = '';
  }
}
