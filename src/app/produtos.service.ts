import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Produto } from './produtos/produto';
import { Observable } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  produtosUrl = 'http://localhost:9000/produtos';

  // const httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type':  'application/json',
  //     'Access-Control-Allow-Origin': '*'
  //   })
  // };

  constructor(private http: HttpClient) { }

  // GET
  listar(){
    return this.http.get<any[]>(`${this.produtosUrl}`)
  }

  // POST
  criar(produto: Produto){
   // console.log(produto);
    
    return this.http.post(this.produtosUrl+'/create',produto).subscribe(
      (data:any) => {
        console.log(data);
      });
    
    // return this.http.post<Produto>(this.produtosUrl+'/create', produto, {headers: new HttpHeaders({
    //   'Content-Type':  'application/json',
    //   'Access-Control-Allow-Origin': '*'
    // })});

    
  }
}
