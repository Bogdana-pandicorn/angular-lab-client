import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  public myApi = 'https://angular-heroku-silip-b.herokuapp.com//api/user/';
  constructor(private http: HttpClient) { }

  public checkForm(form: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(this.myApi + "check-form", form)
  }
  public addUser(user: UserModel): Observable<any> {
    return this.http.post<UserModel>(this.myApi + 'register', user)
  }
  public autoLogin(): Observable<any> {
    return this.http.get<any>(this.myApi + 'auto-login', { headers: { "Authorization": "Bearer " + localStorage.getItem('token') } })
  }
  public login(details:object): Observable<any>{
    return this.http.post<any>(this.myApi + 'login' , details)
  }
}
