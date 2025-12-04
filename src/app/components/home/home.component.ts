import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypewriterQuoteComponent } from '../typewriter-quote/typewriter-quote.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TypewriterQuoteComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}

