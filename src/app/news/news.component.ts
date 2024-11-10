import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Article {
  title: string;
  content: string;
  date: string;
}

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  imports: [FormsModule, CommonModule],
  standalone: true
})
export class NewsComponent {
  articles: Article[] = [
    {
      title: 'New Feature Released!',
      content: 'We are excited to announce the release of a new feature that improves user experience.',
      date: '2024-11-01'
    },
    {
      title: 'Upcoming Maintenance',
      content: 'Scheduled maintenance will occur on November 15, during which the application may be unavailable.',
      date: '2024-10-30'
    },
    {
      title: 'Security Update',
      content: 'A security update has been applied to enhance the safety of user data.',
      date: '2024-10-25'
    }
  ];
}
