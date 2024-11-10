import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAuthenticated(): boolean {
    return typeof window !== 'undefined' && localStorage.getItem('isAuthenticated') === 'true';
  }

  login() {
    if (typeof window !== 'undefined') {
      localStorage.setItem('isAuthenticated', 'true');
    }
  }

  logout() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('isAuthenticated');
    }
  }
}
