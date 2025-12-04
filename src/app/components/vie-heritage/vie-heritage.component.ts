import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-vie-heritage',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './vie-heritage.component.html',
  styleUrl: './vie-heritage.component.scss'
})
export class VieHeritageComponent {
  heritageSections = [
    {
      title: 'L\'Enseignement Spirituel',
      titleAr: 'التعليم الروحي',
      description: 'La transmission de la sagesse et des enseignements du Prophète (صلى الله عليه وسلم) à travers les générations.',
      descriptionAr: 'نقل الحكمة وتعاليم النبي صلى الله عليه وسلم عبر الأجيال'
    },
    {
      title: 'La Guidance des Disciples',
      titleAr: 'إرشاد المريدين',
      description: 'Accompagner les cœurs vers Allah, élever les âmes et guider sur le chemin de la piété.',
      descriptionAr: 'مرافقة القلوب إلى الله، ورفع الأرواح وتوجيهها في طريق التقوى'
    },
    {
      title: 'L\'Héritage de Baraka',
      titleAr: 'إرث البركة',
      description: 'La baraka qui se transmet de maître à disciple, créant une chaîne spirituelle ininterrompue.',
      descriptionAr: 'البركة التي تنتقل من الأستاذ إلى التلميذ، مكونة سلسلة روحية متصلة'
    }
  ];

  citations = [
    {
      fr: 'Le vrai succès est de plaire à Allah avant tout',
      ar: 'النجاح الحقيقي هو إرضاء الله قبل كل شيء'
    },
    {
      fr: 'Celui qui suit les pieux ne s\'égare jamais',
      ar: 'من تبع الصالحين لا يضل أبدًا'
    },
    {
      fr: 'La prière est la clé du paradis',
      ar: 'الصلاة مفتاح الجنة'
    }
  ];
}

