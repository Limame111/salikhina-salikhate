import { Component, OnInit, OnDestroy, signal, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Quote {
  fr: string;
  ar: string;
}

const QUOTES: Quote[] = [
  { fr: 'Le vrai succès est de plaire à Allah avant tout', ar: 'النجاح الحقيقي هو إرضاء الله قبل كل شيء' },
  { fr: 'Celui qui suit les pieux ne s\'égare jamais', ar: 'من تبع الصالحين لا يضل أبدًا' },
  { fr: 'La prière est la clé du paradis', ar: 'الصلاة مفتاح الجنة' },
  { fr: 'Aimez-vous pour Allah et vous serez unis éternellement', ar: 'أحبوا في الله تكونوا متحدين أبد الدهر' },
  { fr: 'La patience dans l\'épreuve est la voie des élus', ar: 'الصبر في البلاء طريق المختارين' },
  { fr: 'Le savoir sans pratique est comme un arbre sans fruits', ar: 'العلم بلا عمل كشجرة بلا ثمر' },
  { fr: 'L\'humilité élève l\'âme vers les sommets', ar: 'التواضع يرفع النفس إلى القمم' },
  { fr: 'Rappelez-vous Allah et Il se souviendra de vous', ar: 'اذكروا الله يذكركم' }
];

@Component({
  selector: 'app-typewriter-quote',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './typewriter-quote.component.html',
  styleUrl: './typewriter-quote.component.scss'
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
          characterData: true
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
        // Start typing Arabic after a short pause
        setTimeout(() => {
          this.isTypingArabic.set(true);
          const typeArabic = () => {
            if (arabicIndex < quote.ar.length) {
              this.displayedArabic.set(quote.ar.substring(0, arabicIndex + 1));
              arabicIndex++;
              this.typingInterval = window.setTimeout(typeArabic, typingSpeed);
            } else {
              // Finished typing both texts
              this.isTyping.set(false);
              this.isTypingArabic.set(false);
              this.typingInterval = undefined;
              this.lastFrenchText = quote.fr; // Sauvegarder le texte original
            }
          };
          typeArabic();
        }, 600);
      }
    };

    typeFrench();
  }

  private startCursorBlink(): void {
    this.cursorInterval = window.setInterval(() => {
      this.showCursor.update(val => !val);
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
    }, 10000); // 10 seconds
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

