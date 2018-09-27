import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http: Http) {}

  getProducts(){
    return this.http.get('assets/data/products.json')
      .map((response:Response)=>response.json());
  }

  getIPs(){
    return this.http.get('assets/data/ips.json')
      .map((response:Response)=>response.json());
  }

  getFbJson(){
    return this.http.get('assets/data/fb.json')
      .map((response:Response)=>response.json());
  }

}
