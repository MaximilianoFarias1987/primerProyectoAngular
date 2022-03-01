import { Subject } from "rxjs";




export class LibrosService {

    librosSubject = new Subject();

  private libros = ['Libro de Maxi', 'Libro de Matematica', 'Libro de Ciencia'];

  obtenerLibros() {
    return [...this.libros];
  }

  agregarLibro(libroNombre: string) {
    this.libros.push(libroNombre);
    this.librosSubject.next(this.libros);
  }

  eliminarLibro(libroNombre: string){
    this.libros = this.libros.filter(x => x !== libroNombre);
    this.librosSubject.next(this.libros);
  }

  
}
