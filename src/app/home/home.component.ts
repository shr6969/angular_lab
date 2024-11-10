import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [FormsModule, CommonModule],
  standalone: true
})
export class HomeComponent {
  title: string = 'Welcome to My App!';
  description: string = 'This is the home page of the application where you can find various features and functionalities.';
  features: string[] = [
    'Feature 1: User Authentication',
    'Feature 2: Data Management',
    'Feature 3: Real-time Updates'
  ];
}
