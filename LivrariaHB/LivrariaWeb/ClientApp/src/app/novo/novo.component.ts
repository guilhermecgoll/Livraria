import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Livro } from '../Livro';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-novo',
  templateUrl: './novo.component.html'
})

export class NovoComponent {

  model: Livro = new Livro();

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {}

  novoLivro() {
    this.http.post(this.baseUrl + 'api/Livros/Criar', { Titulo: this.model.Titulo })
      .subscribe(result => {

      }, error => console.error(error));
    console.log(this.model);
  }

}
