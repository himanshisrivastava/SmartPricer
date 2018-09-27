import { Http } from '@angular/http';  
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';  
import 'rxjs/add/operator/map';

@Injectable()
export class FacebookService {
  private graphUrl = 'https://graph.facebook.com/v2.12/me?';
  
  constructor(private http: Http) { }

  getUserData(accessToken: string):Observable<any[]> {
    let graphQuery = `fields=id,name,email,gender,birthday,events&access_token=${accessToken}`;
    let url = this.graphUrl  + graphQuery;
    return this.http.get(url).map(response => response.json());
   }
}