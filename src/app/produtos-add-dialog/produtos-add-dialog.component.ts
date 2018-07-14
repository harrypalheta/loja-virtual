import { Component, OnInit, Inject } from '@angular/core';
import { Produto } from '../produtos/produto';
// import { PRODUCT_DATA } from '../produtos/produtos.component';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-produtos-add-dialog',
  templateUrl: './produtos-add-dialog.component.html',
  styleUrls: ['./produtos-add-dialog.component.scss']
})

export class ProdutosAddDialogComponent implements OnInit {
  // private items = PRODUCT_DATA;
  constructor(
    public dialogRef: MatDialogRef<ProdutosAddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Produto) {}

  ngOnInit() {
  }

  saveProduto(produto: Produto){
    console.log(produto);
    // this.items.push(produto)
  }


}
