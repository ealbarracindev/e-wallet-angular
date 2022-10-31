import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUrl = `${environment.apiBase}/auth/login`;
  private authMe = `${environment.apiBase}/auth/me`;

  constructor(
    private http: HttpClient
  ) { }

  loginJWT(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.authUrl, { username, password })
      .pipe(map(user => {
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
        return user;
      }));
  }

  haveToken(): boolean {
    return !!localStorage.getItem('currentUser');
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }

  getUserInfo(): Observable<any> {
    return this.http.get<any>(this.authMe);
  }

}

export interface User {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  roleId: number;
  points: number;
}
