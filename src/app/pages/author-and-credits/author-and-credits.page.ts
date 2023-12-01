import { Component } from '@angular/core';
import { IonApp, IonContent, IonImg } from '@ionic/angular/standalone';
import { BackPageButtonComponent } from 'src/app/components/back-page-button/back-page-button.component';
import { BoardCardComponent } from 'src/app/components/board-card/board-card.component';
import { HandButtonComponent } from 'src/app/components/hand-button/hand-button.component';
import { NotebookBackgroundComponent } from 'src/app/components/notebook-background/notebook-background.component';

@Component({
  selector: 'app-author-and-credits',
  templateUrl: 'author-and-credits.page.html',
  styleUrls: ['author-and-credits.page.scss'],
  standalone: true,
  imports: [
    IonApp,
    IonContent,
    IonImg,
    NotebookBackgroundComponent,
    BackPageButtonComponent,
    BoardCardComponent,
    HandButtonComponent,
  ],
})
export class AuthorAndCreditsPage {}
