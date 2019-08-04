import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoogleServiceService {

  constructor(private http: HttpClient) { }

  // call google form api

googleForm(value1:any):Observable<{}>{
  return this.http.post('/forms/d/e/1FAIpQLScVqiHvX1Q18tfbSVy2xbm4PQVwK3WuU4aVsbDNZaOt-YL9Lg/formResponse',value1);
}
}
