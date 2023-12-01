import {
  IonApp,
  IonFab,
  IonFabButton,
  IonIcon,
  IonRouterLink,
} from '@ionic/angular/standalone';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { chevronBackOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-back-page-button',
  standalone: true,
  imports: [
    IonApp,
    IonFab,
    IonFabButton,
    IonIcon,
    NgClass,
    IonRouterLink,
    RouterLink,
  ],
  templateUrl: './back-page-button.component.html',
  styleUrl: './back-page-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackPageButtonComponent {
  @Input({ required: true })
  theme: 'blue' | 'yellow' = 'blue';

  @Input({ required: true })
  link!: string;

  constructor() {
    addIcons({
      chevronBackOutline,
    });
  }
}
