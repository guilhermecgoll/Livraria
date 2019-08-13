import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Livro } from './Livro';


@Injectable()
export class LivroService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  carregarLivro(id: number | string) {
    return this.http.get<Livro>(this.baseUrl + 'Livro/' + id);
  }
}
