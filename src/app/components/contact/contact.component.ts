import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  showWelcome = false;

  openEmail() {
    // Afficher la décoration de bienvenue
    this.showWelcome = true;
    
    // Après 2 secondes, ouvrir l'email
    setTimeout(() => {
      const email = 'mouhamedlimameaidara4@gmail.com';
      const subject = 'Contact Salikhina wa Salikhate';
      
      // Détecter si c'est un appareil mobile
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      
      if (isMobile) {
        // Sur mobile : utiliser mailto: pour ouvrir l'app mail native
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
        window.location.href = mailtoLink;
      } else {
        // Sur desktop : utiliser Gmail Web
        const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}`;
        window.open(gmailLink, '_blank');
      }
      
      // Cacher la décoration après 3 secondes
      setTimeout(() => {
        this.showWelcome = false;
      }, 3000);
    }, 2000);
  }

  closeWelcome() {
    this.showWelcome = false;
  }
}

