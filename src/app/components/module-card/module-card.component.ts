import { IonImg, IonRouterLink } from '@ionic/angular/standalone';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-module-card',
  standalone: true,
  imports: [IonImg, NgClass, RouterLink, IonRouterLink],
  templateUrl: './module-card.component.html',
  styleUrl: './module-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModuleCardComponent {
  @Input({ required: true })
  title!: string;
  @Input({ required: true })
  description!: string;
  @Input({ required: true })
  link!: string;

  @Input({ required: true })
  theme: 'cyan' | 'yellow' | 'orange' | 'green' | 'blue' | 'beige' = 'blue';
}
