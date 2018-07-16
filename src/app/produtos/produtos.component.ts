import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator,
  MatTableDataSource, 
  MatDialog} from '@angular/material';

import {ProdutosAddDialogComponent} from  '../produtos-add-dialog/produtos-add-dialog.component';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {
  title = 'Produtos';

  constructor(public dialog:MatDialog, private produtosService: ProdutosService) { }
  // Colunas Visíveis da tabela de produtos
  displayedColumns: string[] = ['id', 'nome', 'descricao', 'preco', 'qtde', 'acoes'];
  
  // Dados para a tabela
  produtosTable = new MatTableDataSource<any>([this.listar()]);
  
  produtos : Array<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    // Esse trecho chama o metodo listar() e página os dados na tabela
    this.produtosTable.paginator = this.paginator;
  }

  listar(){
    this.produtosService.listar().subscribe(dados => this.produtos = dados)
  }

  openDialog(params){

    if (!params) params = {};
    
    let dialogRef = this.dialog.open(ProdutosAddDialogComponent,{
      width: '400px',
      data: params
    });

    dialogRef.afterClosed().subscribe(produto => {
      this.produtosTable.data = [this.listar()];
    })
  }

  confirmDelete(produto: any){
    if(confirm("Vocé deseja deletar o item "+produto.nome+"?")) {
      console.log(produto);
    }
  }
}