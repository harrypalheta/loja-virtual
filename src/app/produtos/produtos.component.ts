import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator,
  MatTableDataSource, 
  MatDialog} from '@angular/material';

import {ProdutosAddDialogComponent} from  '../produtos-add-dialog/produtos-add-dialog.component';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {
  title = 'Produtos';

  constructor(public dialog:MatDialog) { }
  // Colunas Visíveis da tabela de produtos
  displayedColumns: string[] = ['id', 'nome', 'descricao', 'preco', 'qtde', 'acoes'];
  dataSource = new MatTableDataSource<Produto>(PRODUCT_DATA);
  
  produtos = [
    {id: 1,    nome: 'Hydrogen',  descricao: "É um produto que existe na natureza", preco: 11.99, qtde: 2},
    {id: 2,    nome: 'Helium',    descricao: "É um produto que existe na natureza", preco: 11.99, qtde: 2},
    {id: 3,    nome: 'Lithium',   descricao: "É um produto que existe na natureza", preco: 11.99, qtde: 2},
    {id: 4,    nome: 'Beryllium', descricao: "É um produto que existe na natureza", preco: 11.99, qtde: 2},
    {id: 5,    nome: 'Boron',     descricao: "É um produto que existe na natureza", preco: 11.99, qtde: 2},
    {id: 6,    nome: 'Carbon',    descricao: "É um produto que existe na natureza", preco: 11.99, qtde: 2},
    {id: 7,    nome: 'Nitrogen',  descricao: "É um produto que existe na natureza", preco: 11.99, qtde: 2},
    {id: 8,    nome: 'Oxygen',    descricao: "É um produto que existe na natureza", preco: 11.99, qtde: 2},
    {id: 9,    nome: 'Fluorine',  descricao: "É um produto que existe na natureza", preco: 11.99, qtde: 2},
    {id: 10,   nome:  'Neon',     descricao: "É um produto que existe na natureza", preco: 11.99, qtde: 2}
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  openDialog(params){

    if (!params) params = {};
    
    let dialogRef = this.dialog.open(ProdutosAddDialogComponent,{
      width: '400px',
      data: params
    });

    dialogRef.afterClosed().subscribe(result => {
     // console.log(result);
      // this.dataSource = result;
    })
  }

  confirmDelete(produto: Produto){
    if(confirm("Vocé deseja deletar o item "+produto.nome+"?")) {
      console.log(produto);
    }
  }
}

export interface Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  qtde: number;
}

export const PRODUCT_DATA: Produto[] = [
  {id: 1,    nome: 'Hydrogen',  descricao: "É um produto que existe na natureza", preco: 11.99, qtde: 2},
  {id: 2,    nome: 'Helium',    descricao: "É um produto que existe na natureza", preco: 11.99, qtde: 2},
  {id: 3,    nome: 'Lithium',   descricao: "É um produto que existe na natureza", preco: 11.99, qtde: 2},
  {id: 4,    nome: 'Beryllium', descricao: "É um produto que existe na natureza", preco: 11.99, qtde: 2},
  {id: 5,    nome: 'Boron',     descricao: "É um produto que existe na natureza", preco: 11.99, qtde: 2},
  {id: 6,    nome: 'Carbon',    descricao: "É um produto que existe na natureza", preco: 11.99, qtde: 2},
  {id: 7,    nome: 'Nitrogen',  descricao: "É um produto que existe na natureza", preco: 11.99, qtde: 2},
  {id: 8,    nome: 'Oxygen',    descricao: "É um produto que existe na natureza", preco: 11.99, qtde: 2},
  {id: 9,    nome: 'Fluorine',  descricao: "É um produto que existe na natureza", preco: 11.99, qtde: 2},
  {id: 10,   nome:  'Neon',     descricao: "É um produto que existe na natureza", preco: 11.99, qtde: 2},
];