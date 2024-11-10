import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule, CommonModule],
  standalone: true
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  onLogin() {
    if (this.username === 'Admin' && this.password === '12345') {
      localStorage.setItem('isAuthenticated', 'true');
      this.router.navigate(['/profile']);
    } else {
      this.errorMessage = 'Ім\'я користувача або пароль введені не вірно';
    }
  }
}
