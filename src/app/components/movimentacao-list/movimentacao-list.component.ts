import { Component, OnInit } from '@angular/core';
import { MovimentacaoService } from 'src/app/services/movimentacao.service';
import { CorrentistaService } from 'src/app/services/correntista.service';

@Component({
  selector: 'app-movimentacao-list',
  templateUrl: './movimentacao-list.component.html',
  styleUrls: ['./movimentacao-list.component.css']
})
export class MovimentacaoListComponent implements OnInit {
  movimentacoes: any;
  correntistas: any;
  correntistaSelected:any;

  constructor(
    private movimentacaoService: MovimentacaoService,
    private correntistaService: CorrentistaService,) { }

  ngOnInit(): void {
    this.exibirCorrentistas()
  };

  listMovimentacoes(): void {
    this.movimentacaoService.findByIdConta(this.correntistaSelected.id).subscribe(
      data => {
        this.movimentacoes = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    )
  };

  exibirCorrentistas(): void {
    this.correntistaService.list()
      .subscribe(
        data => {
          this.correntistas = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}