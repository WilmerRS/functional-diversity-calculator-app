import { Component } from '@angular/core';
import { IonApp, IonContent, IonImg } from '@ionic/angular/standalone';
import { NextPageButtonComponent } from 'src/app/components/next-page-button/next-page-button.component';
import { NotebookBackgroundComponent } from 'src/app/components/notebook-background/notebook-background.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonApp,
    IonContent,
    IonImg,
    NotebookBackgroundComponent,
    NextPageButtonComponent,
  ],
})
export class HomePage {}
