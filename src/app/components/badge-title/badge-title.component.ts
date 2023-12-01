import { IonImg } from '@ionic/angular/standalone';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-badge-title',
  standalone: true,
  imports: [IonImg],
  templateUrl: './badge-title.component.html',
  styleUrl: './badge-title.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgeTitleComponent {
  @Input({ required: true })
  title!: string;
}
