import { Component, OnInit, OnDestroy } from '@angular/core';
import { LibrosService } from '../services/libros.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
})
export class LibrosComponent implements OnInit, OnDestroy {
  libros: string[] = [];

  constructor(private librosService: LibrosService) {}

    private libroSubscription: Subscription = new Subscription;

  // libros = ['Matematica', 'Lengua', 'Algebra'];
  txtLibro = '';
  // eliminarLibro(libro: string){
  //     this.libros = this.libros.filter(p => p !== libro);
  // }

  guardarLibro(f) {
    // console.log('objeto fromulario ', f);
    // if (f.valid) {
    //     this.libros.push(f.value.nombreLibro);
    //     this.txtLibro = '';
    // }else{
    //     console.log('El campo nombre esta vacio');
    // }

    if (f.valid) {
      this.librosService.agregarLibro(f.value.nombreLibro);
    }
  }

  ngOnInit() {
    this.libros = this.librosService.obtenerLibros();
    this.libroSubscription = this.librosService.librosSubject.subscribe(() => {
      this.libros = this.librosService.obtenerLibros();
    });
  }

  ngOnDestroy(): void {
      this.libroSubscription.unsubscribe()
  }
}
