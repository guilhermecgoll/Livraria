import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Livro } from './Livro';


@Injectable()
export class LivroService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  carregarLivros() {
    return this.http.get<Livro[]>(this.baseUrl + 'api/Livros/ListarTodos');
  }

  carregarLivro(id: number | string) {
    return this.http.get<Livro>(this.baseUrl + 'Livro/' + id);
  }

  novoLivro(model: Livro) {
    return this.http.post<Livro>(this.baseUrl + 'Livro', model);
  }

  alterarLivro(model: Livro) {
    return this.http.put<Livro>(this.baseUrl + 'Livro', model);
  }
}
