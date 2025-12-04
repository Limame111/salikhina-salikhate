import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-hassida-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hassida-detail.component.html',
  styleUrl: './hassida-detail.component.scss'
})
export class HassidaDetailComponent {
  constructor(private route: ActivatedRoute) {}
}

