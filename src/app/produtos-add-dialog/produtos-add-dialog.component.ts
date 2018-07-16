import { Component, OnInit, Inject } from '@angular/core';
import { Produto } from '../produtos/produto';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {ProdutosService} from '../produtos.service';


@Component({
  selector: 'app-produtos-add-dialog',
  templateUrl: './produtos-add-dialog.component.html',
  styleUrls: ['./produtos-add-dialog.component.scss']
})

export class ProdutosAddDialogComponent implements OnInit {
  // private items = PRODUCT_DATA;
  constructor(
    public dialogRef: MatDialogRef<ProdutosAddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Produto,
    private produtosService: ProdutosService
  ) {}

  ngOnInit() {
  }

  saveProduto(produto: Produto){
    this.produtosService.criar(produto);
  }


}
