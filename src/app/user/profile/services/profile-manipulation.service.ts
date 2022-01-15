import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { toASCII } from 'punycode';



// const headers: HttpHeaders = new HttpHeaders({
//   'Content-Type': 'application/json',
// });

@Injectable({
  providedIn: 'root'
})
export class ProfileManipulationService {

  constructor(private http: HttpClient) {};

  // updateAccount(updateWith: string, userId: string | undefined) {
  //   this.http.patch("https://sqdboards.eu.auth0.com/api/v2/users/" + ( userId?.split('|').join("%7C") ), JSON.parse(updateWith), { headers: headers }).subscribe(
  //     (res) => {
  //       console.log('updated!');
  //       window.location.reload();
  //     }, err => {
  //       console.error(err);
  //     }
  //   );
  // }

}
