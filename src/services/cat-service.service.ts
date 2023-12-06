import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cat } from 'src/models/cat';

@Injectable({
  providedIn: 'root'
})
export class CatServiceService {

  baseUrl = "https://freetestapi.com/api/v1/cats"
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getCats(): Observable<Cat[]> {
    return this.http.get<Cat[]>(this.baseUrl, this.httpOptions)
  }
}
