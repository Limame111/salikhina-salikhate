import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'fondateur',
    loadComponent: () => import('./components/fondateur-aidara/fondateur-aidara.component').then(m => m.FondateurAidaraComponent)
  },
  {
    path: 'vie-et-heritage',
    loadComponent: () => import('./components/vie-et-heritage/vie-et-heritage.component').then(m => m.VieEtHeritageComponent)
  },
  {
    path: 'hassidas',
    loadComponent: () => import('./components/hassidas/hassidas-list.component').then(m => m.HassidasListComponent)
  },
  {
    path: 'hassidas/:id',
    loadComponent: () => import('./components/hassidas/hassida-detail.component').then(m => m.HassidaDetailComponent)
  },
  {
    path: 'enseignements',
    loadComponent: () => import('./components/enseignements/enseignements.component').then(m => m.EnseignementsComponent)
  },
  {
    path: 'evenements',
    loadComponent: () => import('./components/evenements/evenements.component').then(m => m.EvenementsComponent)
  },
  {
    path: 'actualites',
    loadComponent: () => import('./components/actualites/actualites.component').then(m => m.ActualitesComponent)
  },
  {
    path: 'adhesion',
    loadComponent: () => import('./components/adhesion/adhesion.component').then(m => m.AdhesionComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./components/contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
