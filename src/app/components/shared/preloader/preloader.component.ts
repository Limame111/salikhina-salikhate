import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-preloader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preloader.component.html',
  styleUrl: './preloader.component.scss'
})
export class PreloaderComponent implements OnInit {
  isLoading = signal(true);

  ngOnInit(): void {
    // Simuler un chargement minimal pour une meilleure UX
    setTimeout(() => {
      this.isLoading.set(false);
    }, 500);
  }
}

