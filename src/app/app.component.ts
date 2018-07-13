import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

export interface dadosProdutos {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  qtde: number;
}

const PRODUCT_DATA: dadosProdutos[] = [
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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
// export class AppComponent {
//   title = 'Loja Virtual';
//   displayedColumns: string[] = ['id', 'nome', 'descricao', 'preco', 'qtde'];
//   dataSource = PRODUCT_DATA;
// }
export class AppComponent implements OnInit {
  title = 'Loja Virtual';
  displayedColumns: string[] = ['id', 'nome', 'descricao', 'preco', 'qtde'];
  dataSource = new MatTableDataSource<dadosProdutos>(PRODUCT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}

