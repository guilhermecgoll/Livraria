import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl } from '@angular/forms';
import { Livro } from '../Livro';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { LivroService } from '../LivroService';

@Component({
  selector: 'app-novo',
  templateUrl: './novo.component.html'
})

export class NovoComponent implements OnInit {

  model: Livro = new Livro();
  idEdt: number | string;
  textSaveBtn: string;

  teste$: Observable<Livro>;

  constructor(private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private route: ActivatedRoute,
    private service: LivroService) {
  }

  novoLivro() {
    this.model.Id = 0;
    this.http.post<Livro>(this.baseUrl + 'Livro', this.model, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
      .subscribe(result => {

      }, error => console.error(error));
  }

  ngOnInit() {
    this.teste$ = this.route.paramMap.pipe(
      switchMap(
        (params: ParamMap) =>
          this.service.carregarLivro(params.get('id'))));
    this.teste$.subscribe(result => {
      this.model = result;
    }, error => console.error(error));
    //this.model.Id = +this.idEdt;
    //console.log('o id recebido é ' + this.idEdt);

    if (this.model.Id > 0) {
      this.textSaveBtn = "Salvar alterações";
    } else {
      this.textSaveBtn = "Salvar";
    }
  }

}
