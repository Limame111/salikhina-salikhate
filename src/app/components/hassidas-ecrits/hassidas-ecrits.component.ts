import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Hassida {
  title: string;
  fileName: string;
  author?: string;
}

@Component({
  selector: 'app-hassidas-ecrits',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hassidas-ecrits.component.html',
  styleUrl: './hassidas-ecrits.component.scss'
})
export class HassidasEcritsComponent {
  hassidas: Hassida[] = [
    { title: 'Abda-ou bismi Laahî', fileName: 'abda-ou bismi Laahî.pdf' },
    { title: 'Abou Abdoulm Azizil Amsali', fileName: 'ABOU  ABDOULM AZIZIL AMSALI.pdf' },
    { title: 'Ahabbou minnal bilaadi bilaada Taahaa', fileName: 'Ahabbou minnal  bilaadi bilaada Taahaa.pdf' },
    { title: 'Ahlann Bi Chahri Mawlidi', fileName: 'Ahlann Bi Chahri Mawlidi.pdf' },
    { title: 'Al ham kafani fakhra', fileName: 'al ham kafani fakhra.pdf' },
    { title: 'Al hamdou li Laahil Khabîr', fileName: 'Al hamdou  li Laahil Khabîr-1.pdf' },
    { title: 'Al hamdou li Laahi alaa', fileName: 'Al hamdou li Laahi alaa.pdf' },
    { title: 'Al Hamdou Lilahi Alal Wassila Moubdil Haraami', fileName: 'Al Hamdou Lilahi Alal Wassila  Moubdil Haraami-1.pdf' },
    { title: 'Al Hamdou Lillahi Lazii Laa Youhtii', fileName: 'Al Hamdou Lillahi Lazii Laa Youhtii.pdf' },
    { title: 'Aqoûlou limann yamchî anil haqqi wa zikri', fileName: 'Aqoûlou limann yamchî anil haqqi wa zikri-1-2.pdf' },
    { title: 'Asadal ilaahi', fileName: 'Asadal ilaahi-1.pdf' },
    { title: 'Asbahtou Inna Lazii', fileName: 'Asbahtou Inna Lazii.pdf' },
    { title: 'Astaghfirou Laaha minn zambi chabaabi', fileName: 'Astaghfirou Laaha minn zambi chabaabi-1-1-1-1.pdf' },
    { title: 'Bada\'tou bismi Laahi alli maqsadî', fileName: 'Bada\'-tou bismi Laahi alli maqsadî-1.pdf' },
    { title: 'BI QALBIYA SIRRIL QAWNI', fileName: 'BI QALBIYA SIRRIL QAWNI-1.pdf' },
    { title: 'Bizaati rabbil aalamînn', fileName: 'Bizaati rabbil aalamînn.pdf' },
    { title: 'Inaa tassawoufa fardou aïninn youzkarou', fileName: 'Inaa tassawoufa fardou aïninn youzkarou-1-1.pdf' },
    { title: 'Inal Mouraada', fileName: 'Inal Mouraada-1.pdf' },
    { title: 'Qhala Abdoul Azizi Sadou', fileName: 'Qhala Abdoul Azizi Sadou(0).pdf' },
    { title: 'Yaa Nafsou Nassiiti', fileName: 'Yaa Nafsou Nassiiti(0).pdf' },
    { title: 'Yaa Rabbi bi Rahmani wa Rahîmi', fileName: 'Yaa Rabbi bi Rahmani wa Rahîmi.pdf' },
    { title: 'Yaa saahibayya da –aanî', fileName: 'Yaa saahibayya da –aanî-1.pdf' },
    { title: 'Zourtou khayrou Nabi', fileName: 'Zourtou khayrou Nabi.pdf' }
  ];

  getPdfUrl(fileName: string): string {
    // Encoder le nom de fichier correctement pour l'URL
    // Les fichiers sont dans public/hassidas/, donc l'URL est /hassidas/
    const encodedFileName = encodeURIComponent(fileName).replace(/'/g, '%27');
    return `/hassidas/${encodedFileName}`;
  }
}

