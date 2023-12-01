import { BackPageButtonComponent } from './../../components/back-page-button/back-page-button.component';
import { Component } from '@angular/core';
import { IonApp, IonContent } from '@ionic/angular/standalone';
import { BadgeTitleComponent } from 'src/app/components/badge-title/badge-title.component';
import { ModuleCardComponent } from 'src/app/components/module-card/module-card.component';
import { NextPageButtonComponent } from 'src/app/components/next-page-button/next-page-button.component';
import { NotebookBackgroundComponent } from 'src/app/components/notebook-background/notebook-background.component';

@Component({
  selector: 'app-modules-index',
  templateUrl: 'modules-index.page.html',
  styleUrls: ['modules-index.page.scss'],
  standalone: true,
  imports: [
    IonApp,
    IonContent,
    NotebookBackgroundComponent,
    NextPageButtonComponent,
    BackPageButtonComponent,
    BadgeTitleComponent,
    ModuleCardComponent,
  ],
})
export class ModulesIndexPage {
  readonly modules: {
    title: string;
    description: string;
    theme: 'cyan' | 'yellow' | 'orange' | 'green' | 'blue' | 'beige';
    link: string;
  }[] = [
    {
      title: 'Módulo 1',
      description: 'A través del lente',
      theme: 'cyan',
      link: '/modules/module-one',
    },
    {
      title: 'Módulo 2',
      description: 'Caracterización',
      theme: 'yellow',
      link: '/modules/module-two',
    },
    {
      title: 'Módulo 3',
      description: 'Ruta de Bienestar',
      theme: 'orange',
      link: '/modules/module-three',
    },
    {
      title: 'Módulo 4',
      description: 'DUA - PIAR',
      theme: 'green',
      link: '/modules/module-four',
    },
    {
      title: 'Módulo 5',
      description: 'Normativa',
      theme: 'blue',
      link: '/modules/module-five',
    },
    {
      title: 'Módulo 6',
      description: 'Cambios ocupacionales',
      theme: 'beige',
      link: '/modules/module-six',
    },
  ];
}
