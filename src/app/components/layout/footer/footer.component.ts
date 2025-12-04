import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  footerLinks = [
    { path: '/fondateur', label: 'Le Fondateur' },
    { path: '/hassidas', label: 'Hassidas & Écrits' },
    { path: '/enseignements', label: 'Enseignements' },
    { path: '/evenements', label: 'Événements' },
    { path: '/adhesion', label: 'Adhésion' },
    { path: '/contact', label: 'Contact' }
  ];
}

