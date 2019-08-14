import { Component } from '@angular/core';
import { Livro } from '../Livro';
import { LivroService } from '../LivroService';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html'
})
export class ListBooksComponent {
  public livros: Livro[];

  constructor(private service: LivroService) {
    this.service.carregarLivros().subscribe(result => {
      this.livros = result;
    }, error => console.error(error));
  }
}
