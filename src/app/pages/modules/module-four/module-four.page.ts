import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonApp, IonContent, IonImg, IonRouterLink } from '@ionic/angular/standalone';
import { BackPageButtonComponent } from 'src/app/components/back-page-button/back-page-button.component';
import { NextPageButtonComponent } from 'src/app/components/next-page-button/next-page-button.component';
import { NotebookBackgroundComponent } from 'src/app/components/notebook-background/notebook-background.component';

@Component({
  selector: 'app-module-four',
  templateUrl: './module-four.page.html',
  styleUrls: ['./module-four.page.scss'],
  standalone: true,
  imports: [
    IonApp,
    IonImg,
    IonContent,
    IonRouterLink,
    RouterLink,
    NotebookBackgroundComponent,
    NextPageButtonComponent,
    BackPageButtonComponent,
  ],
})
export class ModuleFourPage {
  readonly diversities: {
    image: string,
    link: string,
  }[] =[
    {
      image: 'assets/images/module-four/visually.png',
      link: '/modules/module-four-visually',
    },
    {
      image: 'assets/images/module-four/cognitive.png',
      link: '/modules/module-four-cognitive',
    },
    {
      image: 'assets/images/module-four/auditory.png',
      link: '/modules/module-four-auditory',
    },
    {
      image: 'assets/images/module-four/multiple.png',
      link: '/modules/module-four-multiple',
    },
    {
      image: 'assets/images/module-four/psychological.png',
      link: '/modules/module-four-psychological',
    },
    {
      image: 'assets/images/module-four/sensorial.png',
      link: '/modules/module-four-sensorial',
    },
  ]
}
