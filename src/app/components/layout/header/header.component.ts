import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  isMenuOpen = signal(false);

  menuItems = [
    { path: '', label: 'Accueil' },
    { path: '/fondateur', label: 'Le Fondateur' },
    { path: '/vie-et-heritage', label: 'Vie et héritage' },
    { path: '/hassidas', label: 'Hassidas & Écrits' },
    { path: '/enseignements', label: 'Enseignements' },
    { path: '/evenements', label: 'Événements' },
    { path: '/actualites', label: 'Actualités' },
    { path: '/adhesion', label: 'Adhésion' },
    { path: '/contact', label: 'Contact' }
  ];

  ngOnInit(): void {
    // Smooth scroll pour tous les liens
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e: Event) => {
        e.preventDefault();
        const href = (anchor as HTMLAnchorElement).getAttribute('href');
        if (href) {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      });
    });
  }

  toggleMenu(): void {
    this.isMenuOpen.update(value => !value);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}

