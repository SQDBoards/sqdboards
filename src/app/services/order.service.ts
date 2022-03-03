import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { Order } from '../user/orders/order';

const Headers = new HttpHeaders({ 'Content-Type': 'application/json' });

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) {};

  getOrdersByUid(uid: string): Observable<Order[]> {
    return this.http.get<Order[]>('/api/ordersByUid/' + uid, { headers: Headers }).pipe(
      retry(5)
    );
  };

}
