import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry } from 'rxjs';
import { ErrorHandlerService } from 'src/app/services/error-handler.service';

const Headers = new HttpHeaders({ 'Content-Type': 'application/json' });

@Injectable({
  providedIn: 'root'
})
export class BuilderService {

  constructor(private http: HttpClient,
              private errHndl: ErrorHandlerService) {};

  getUniques(parseIn: any[], parseProperty: string): string[] {
    let uniques: string[] = [];
    for (let i =0; i < parseIn.length; i++) {
      uniques.includes(parseIn[i][parseProperty]) ? null : uniques.push(parseIn[i][parseProperty]);
    }
    return uniques.sort();
  }

  getObjects(name: string) {
    return this.http.get('/api/' + name, { headers: Headers }).pipe(
      retry(2),
      catchError(this.errHndl.handleError<any>('get ' + name))
    );
  };

}
