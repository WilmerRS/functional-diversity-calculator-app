import { Component } from '@angular/core';
import { IonApp, IonContent } from '@ionic/angular/standalone';
import { NotebookBackgroundComponent } from 'src/app/components/notebook-background/notebook-background.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonApp, IonContent, NotebookBackgroundComponent],
})
export class HomePage {}
