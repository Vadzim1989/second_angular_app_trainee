import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WifiInfoService {

  constructor(
    private http: HttpClient,
  ) { };

  getData(string: string) {
    return this.http.get(`http://10.245.3.132:99/api/titulinfo/${string}`)
  }
}
