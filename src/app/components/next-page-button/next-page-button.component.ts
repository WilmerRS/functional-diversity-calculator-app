import {
  IonApp,
  IonFab,
  IonFabButton,
  IonIcon,
  IonRouterLink,
} from '@ionic/angular/standalone';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { chevronForwardOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-next-page-button',
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
  templateUrl: './next-page-button.component.html',
  styleUrl: './next-page-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NextPageButtonComponent {
  @Input({ required: true })
  theme: 'blue' | 'yellow' = 'blue';

  @Input({ required: true })
  link!: string;

  @Input() disabled = false;

  @Output() next = new EventEmitter<void>();

  constructor() {
    addIcons({
      chevronForwardOutline,
    });
  }
}
