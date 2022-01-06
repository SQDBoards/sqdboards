import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Deal } from '../deal';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

const Headers = {
  headers: new HttpHeaders({'Content-Type': 'application/json',
                            'Access-Control-Allow-Origin': 'https://sqdboards-api.herokuapp.com'
  })
}

@Injectable({
  providedIn: 'root'
})
export class GetDealsService {

  constructor(private http: HttpClient) {};

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  };

  getDeals(): Observable<Deal[]> {
    return this.http.get<Deal[]>("https://sqdboards-api.herokuapp.com/getDeals", Headers).pipe(
      catchError(this.handleError<Deal[]>(`getDeals`, []))
    );
  };

}
