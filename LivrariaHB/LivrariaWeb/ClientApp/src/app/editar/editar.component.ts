import { Component, Inject } from '@angular/core';
import { Livro } from '../Livro';
import { LivroService } from '../LivroService';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html'
})

export class EditarComponent{

  titulo: string;

  constructor(private service: LivroService) {
    let model: Livro;
    this.service.carregarLivro(1004).subscribe(result => {
      model = result;
      this.titulo = result.titulo;
    }, error => { console.log(error) });
  }
}
