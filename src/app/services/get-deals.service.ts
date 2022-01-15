import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Deal } from '../deal';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { withCache } from '@ngneat/cashew';
import { ErrorHandlerService } from './error-handler.service';

const Headers = new HttpHeaders({ 'Content-Type': 'application/json' });

@Injectable({
  providedIn: 'root'
})
export class GetDealsService {

  constructor(private http: HttpClient,
              private errHndl: ErrorHandlerService) {};

  getDeals(): Observable<Deal[]> {
    return this.http.get<Deal[]>("/api/deals", { headers: Headers, context: withCache() }).pipe(
      catchError(this.errHndl.handleError<Deal[]>(`getDeals`, []))
    );
  };

}
