import { Http, Headers, RequestOptions } from '@angular/http';  
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx'; 
 
@Injectable()
export class jdaService {
    constructor(private http: Http) {
    }

    getLoginStatuss(username: string, password: string):Observable<any[]>{
      let url = 'http://' + '104.211.241.163:8080' + '/pricing/getLoginStatus/';
      var headers = new Headers();
      headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/json');
      let options = new RequestOptions({ headers: headers});
      var json: any = {userName:username,userPassword:password};
      return this.http.post(url, json, options).map(response => response.json());
    }

    getProductDetails(fbJson: any, email: string, barcode: string, locName: string):Observable<any[]>{
      let url = 'http://' + '104.211.241.163:8080' + '/pricing/getProductDetails/';
      var headers = new Headers();
      headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/json');
      let options = new RequestOptions({ headers: headers});
      var json: any = {fbJson:JSON.stringify(fbJson),email:email,barcode:barcode,locName:locName};
      return this.http.post(url, json, options).map(response => response.json());
    }

    getHomePageDetails(fbJson: any, email: string):Observable<any[]>{
        let url = 'http://' + '104.211.241.163:8080' + '/pricing/getHomePageDetails/';
        var headers = new Headers();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers});
        var json: any = {fbJson:JSON.stringify(fbJson),email:email};
        return this.http.post(url, json, options).map(response => response.json());
      }
}