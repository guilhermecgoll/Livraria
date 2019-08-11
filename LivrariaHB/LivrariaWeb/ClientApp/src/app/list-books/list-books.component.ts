import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
})
export class ListBooksComponent {
  public livros: Livro[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Livro[]>(baseUrl + 'api/Livros/ListarTodos').subscribe(result => {
      this.livros = result;
      console.log(result);
    }, error => console.error(error));
  }
}

interface Livro {
  titulo: string;
}
