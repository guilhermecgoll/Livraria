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

  //ngOnInit() {
  //this.teste$ = this.route.paramMap.pipe(
  //  switchMap(
  //    (params: ParamMap) =>
  //      this.service.carregarLivro(params.get('id'))));
  //this.teste$.subscribe(result => {
  //  this.model = result;
  //}, error => console.error(error));
  ////this.model.Id = +this.idEdt;
  ////console.log('o id recebido é ' + this.idEdt);

  //if (this.model.Id > 0) {
  //  this.textSaveBtn = "Salvar alterações";
  //} else {
  //  this.textSaveBtn = "Salvar";
  //}
  //}

}
