import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url:any = "http://localhost:61028/api";

  constructor(private httpClient: HttpClient) { }

  getStories(searchItem: string) : Observable<any>
  {
    return this.httpClient.get<any>(this.url + "/HackerNews?searchItem="+ searchItem)
    .pipe(catchError(this.errorHandler));  // catch error
  }

  // Handle API errors
  errorHandler(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

}
