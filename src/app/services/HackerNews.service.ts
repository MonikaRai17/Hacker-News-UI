import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, retry, retryWhen, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HackerNewsService {
  url:any = "http://localhost:61028/api";

  constructor(private httpClient: HttpClient) { }

  getStories(searchItem: string) : Observable<any>
  {
    return this.httpClient.get<any>(this.url + "/HackerNews?searchItem="+ searchItem)
    .pipe(catchError(this.errorHandler));  // catch error
  }

  // Handle API errors
  errorHandler(error: HttpErrorResponse) {
    console.log(error.message);
    alert(error.message)
    // return an observable with a user-facing error message
    return throwError(
      error.message);
  };

}
