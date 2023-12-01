import { IonImg, IonButton, IonRouterLink } from '@ionic/angular/standalone';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hand-button',
  standalone: true,
  imports: [IonImg, IonButton, IonRouterLink, RouterLink],
  templateUrl: './hand-button.component.html',
  styleUrl: './hand-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HandButtonComponent {
  @Input({ required: true })
  label!: string;

  @Input()
  link!: string;
}
