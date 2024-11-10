import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

interface UserProfile {
  name: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  imports: [FormsModule],
  standalone: true
})
export class ProfileComponent {
  userProfile: UserProfile = {
    name: 'Sofiia Hruba',
    email: 'sofiia.hruba@example.com',
    phone: '123-456-7890'
  };

  constructor(private authService: AuthService, private router: Router) {}

  onUpdateProfile() {
    console.log('Updated profile:', this.userProfile);
  }

  onLogout() {
    this.authService.logout(); 
    this.router.navigate(['/login']);
  }
}
