import { Component, Inject } from '@angular/core';
import { Livro } from '../Livro';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LivroService } from '../LivroService';

@Component({
  selector: 'app-novo',
  templateUrl: './novo.component.html'
})

export class NovoComponent {

  model: Livro = new Livro();

  constructor(private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private service: LivroService) {
  }

  novoLivro() {
    this.model.id = 0;
    this.service.novoLivro(this.model).subscribe(result => {
    }, error => console.error(error));
  }
}
