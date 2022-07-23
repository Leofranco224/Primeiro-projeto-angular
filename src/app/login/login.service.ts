import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly API = 'http://localhost:3000/Contas'

  constructor(private http: HttpClient) { }

  public create(conta: any) {
    return this.http.post(this.API, conta).pipe(take(1));
  }

  
}
