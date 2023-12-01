import { IonImg, IonRouterLink, IonButton } from '@ionic/angular/standalone';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { StarIconComponent } from 'src/app/icons/star-icon/star-icon.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu-button',
  standalone: true,
  imports: [
    IonImg,
    NgClass,
    IonButton,
    StarIconComponent,
    IonRouterLink,
    RouterLink,
  ],
  templateUrl: './menu-button.component.html',
  styleUrl: './menu-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuButtonComponent {
  @Input({ required: true })
  theme: 'orange' | 'yellow' | 'purple' | 'cyan' = 'orange';

  @Input({ required: true })
  text!: string;

  @Input()
  link: string = '';
}
