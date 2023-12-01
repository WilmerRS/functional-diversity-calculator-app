import { Component } from '@angular/core';
import { IonApp, IonContent, IonImg } from '@ionic/angular/standalone';
import { BackPageButtonComponent } from 'src/app/components/back-page-button/back-page-button.component';
import { NextPageButtonComponent } from 'src/app/components/next-page-button/next-page-button.component';
import { NotebookBackgroundComponent } from 'src/app/components/notebook-background/notebook-background.component';

@Component({
  selector: 'app-module-three',
  templateUrl: './module-three.page.html',
  styleUrls: ['./module-three.page.scss'],
  standalone: true,
  imports: [
    IonApp,
    IonImg,
    IonContent,
    NotebookBackgroundComponent,
    NextPageButtonComponent,
    BackPageButtonComponent,
  ],
})
export class ModuleThreePage {}
