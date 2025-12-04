import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-vie-et-heritage',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './vie-et-heritage.component.html',
  styleUrl: './vie-et-heritage.component.scss'
})
export class VieEtHeritageComponent {
  // Les 53 fils - à compléter avec la liste exacte
  fils: string[] = [
    'Cheikh Saadbou ould Cheikhna Cheikh Mouhamed Vadal',
    'Cheikh Tourad ould Abass',
    // ... à compléter avec les 51 autres
  ];

  // Les 47 filles - à compléter avec la liste exacte
  filles: string[] = [
    // ... à compléter avec les 47 filles
  ];
}
