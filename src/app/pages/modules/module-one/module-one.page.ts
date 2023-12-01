import { Component } from '@angular/core';
import { IonApp, IonContent, IonImg } from '@ionic/angular/standalone';
import { BackPageButtonComponent } from 'src/app/components/back-page-button/back-page-button.component';
import { BadgeTitleComponent } from 'src/app/components/badge-title/badge-title.component';
import { ModuleCardComponent } from 'src/app/components/module-card/module-card.component';
import { NextPageButtonComponent } from 'src/app/components/next-page-button/next-page-button.component';
import { NotebookBackgroundComponent } from 'src/app/components/notebook-background/notebook-background.component';

@Component({
  selector: 'app-module-one',
  templateUrl: 'module-one.page.html',
  styleUrls: ['module-one.page.scss'],
  standalone: true,
  imports: [
    IonApp,
    IonContent,
    IonImg,
    NotebookBackgroundComponent,
    NextPageButtonComponent,
    BackPageButtonComponent,
    BadgeTitleComponent,
    ModuleCardComponent,
  ],
})
export class ModuleOnePage {}
