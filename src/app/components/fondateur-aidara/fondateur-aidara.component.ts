import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-fondateur-aidara',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './fondateur-aidara.component.html',
  styleUrl: './fondateur-aidara.component.scss'
})
export class FondateurAidaraComponent {
  founderMessage = `Mes frères et sœurs, suivez le chemin des Salikhina wa Salikhate, 
car c'est le chemin le plus court vers Allah et Son Prophète ﷺ.`;
}

