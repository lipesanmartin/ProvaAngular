import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { Cat } from 'src/models/Cat';


@Injectable({
  providedIn: 'root'
})
export class CatService {

  baseUrl = "https://freetestapi.com/api/v1/cats";
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getCats(): Observable<Cat[]> {
    return this.http.get<Cat[]>(this.baseUrl, this.httpOptions).pipe(retry(1), catchError(this.errorHandler));
  }

  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => errorMessage);
  }
}
