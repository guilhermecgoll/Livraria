import { Component, Inject } from '@angular/core';
import { Livro } from '../Livro';
import { LivroService } from '../LivroService';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html'
})

export class EditarComponent {

  model: Livro = new Livro();

  constructor(private service: LivroService,
    private route: ActivatedRoute) {
    let id = this.route.snapshot.paramMap.get('id');
    this.service.carregarLivro(id).subscribe(result => {
      this.model = result;
    }, error => { console.log(error) });
  }

  alterarLivro() {
    this.service.alterarLivro(this.model).subscribe(result => {
      this.model = result;
    }, error => {
      console.log('erro ao alterar: ' + error);
    });
  }
}
