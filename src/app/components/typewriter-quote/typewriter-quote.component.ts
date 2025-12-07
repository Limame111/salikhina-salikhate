import {
  Component,
  OnInit,
  OnDestroy,
  signal,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';

interface Quote {
  fr: string;
  ar: string;
}

const QUOTES: Quote[] = [
  {
    fr: "Des maux de la vie d'ici-bas et de l'au-delà, préserve-nous et accorde-nous de Ta part la paix.",
    ar: 'من ءافة الدنيا والأخرى يا سلام سلم لنا وهب لنا منك السلام',
  },
  {
    fr: "Et quiconque a l'intention de nous nuire, saisis-le, ô Toi qui tiens toute chose, avant qu'il ne nous atteigne, repousse-le.",
    ar: 'و من نوى لضرنا فاقبضه يا قابض قبل المجي فاردده',
  },
  {
    fr: "Toi qui contemples avec sagesse le destin de l'indigent, enveloppe-nous de Ta douceur, ô Seigneur, par Ton Nom, Ya Latîf.",
    ar: 'و قدر بما جرى على الضعيف فالطف به يا رب باسمك اللطيف',
  },
];

@Component({
  selector: 'app-typewriter-quote',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './typewriter-quote.component.html',
  styleUrl: './typewriter-quote.component.scss',
})
export class TypewriterQuoteComponent implements OnInit, OnDestroy, AfterViewInit {
  currentQuoteIndex = signal(0);
  displayedFrench = signal('');
  displayedArabic = signal('');
  isTyping = signal(false);
  showCursor = signal(true);
  isTypingArabic = signal(false);

  private typingInterval?: number;
  private cursorInterval?: number;
  private quoteChangeInterval?: number;
  private currentQuote = signal<Quote>(QUOTES[0]);
  private mutationObserver?: MutationObserver;
  private lastFrenchText = '';

  ngOnInit(): void {
    this.startCursorBlink();
    this.startTyping();
    this.startQuoteRotation();
  }

  ngAfterViewInit(): void {
    // Observer pour détecter les changements de traduction
    this.setupTranslationObserver();
  }

  ngOnDestroy(): void {
    this.clearAllIntervals();
    if (this.mutationObserver) {
      this.mutationObserver.disconnect();
    }
  }

  private setupTranslationObserver(): void {
    // Observer les changements dans le DOM qui pourraient être causés par la traduction
    this.mutationObserver = new MutationObserver((mutations) => {
      // Si on n'est pas en train de taper, on peut ignorer les changements
      if (this.isTyping() || this.isTypingArabic()) {
        return;
      }

      // Vérifier si le texte français a changé (traduction)
      const currentText = this.displayedFrench();
      if (currentText && currentText !== this.lastFrenchText && this.lastFrenchText !== '') {
        // Le texte a été modifié par la traduction, mais l'animation est terminée
        // On met à jour le dernier texte connu
        this.lastFrenchText = currentText;
      }
    });

    // Observer les changements dans le composant
    setTimeout(() => {
      const element = document.querySelector('app-typewriter-quote');
      if (element) {
        this.mutationObserver?.observe(element, {
          childList: true,
          subtree: true,
          characterData: true,
        });
      }
    }, 100);
  }

  private startTyping(): void {
    // Clear any existing typing
    if (this.typingInterval) {
      clearTimeout(this.typingInterval);
      this.typingInterval = undefined;
    }

    this.isTyping.set(true);
    this.isTypingArabic.set(false);
    const quote = this.currentQuote();

    // Reset displayed text
    this.displayedFrench.set('');
    this.displayedArabic.set('');

    let frenchIndex = 0;
    let arabicIndex = 0;
    const typingSpeed = 50; // ms per character

    const typeFrench = () => {
      if (frenchIndex < quote.fr.length) {
        const textToDisplay = quote.fr.substring(0, frenchIndex + 1);
        this.displayedFrench.set(textToDisplay);
        this.lastFrenchText = textToDisplay;
        frenchIndex++;
        this.typingInterval = window.setTimeout(typeFrench, typingSpeed);
      } else {
        // Display Arabic text completely after a short pause (no typewriter effect for Arabic)
        setTimeout(() => {
          this.isTypingArabic.set(true);
          // Display the complete Arabic text at once to avoid truncation issues
          this.displayedArabic.set(quote.ar);
          // Small delay to show cursor briefly
          setTimeout(() => {
            this.isTyping.set(false);
            this.isTypingArabic.set(false);
            this.typingInterval = undefined;
            this.lastFrenchText = quote.fr; // Sauvegarder le texte original
          }, 300);
        }, 600);
      }
    };

    typeFrench();
  }

  private startCursorBlink(): void {
    this.cursorInterval = window.setInterval(() => {
      this.showCursor.update((val) => !val);
    }, 500);
  }

  private startQuoteRotation(): void {
    this.quoteChangeInterval = window.setInterval(() => {
      const nextIndex = (this.currentQuoteIndex() + 1) % QUOTES.length;
      this.currentQuoteIndex.set(nextIndex);
      this.currentQuote.set(QUOTES[nextIndex]);

      // Clear current typing
      if (this.typingInterval) {
        clearTimeout(this.typingInterval);
        this.typingInterval = undefined;
      }

      // Fade out and start typing new quote
      setTimeout(() => {
        this.startTyping();
      }, 300);
    }, 13000); // 13 seconds
  }

  private clearAllIntervals(): void {
    if (this.typingInterval) {
      clearTimeout(this.typingInterval);
      this.typingInterval = undefined;
    }
    if (this.cursorInterval) {
      clearInterval(this.cursorInterval);
      this.cursorInterval = undefined;
    }
    if (this.quoteChangeInterval) {
      clearInterval(this.quoteChangeInterval);
      this.quoteChangeInterval = undefined;
    }
  }
}
