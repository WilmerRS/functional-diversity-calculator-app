import { IonImg } from '@ionic/angular/standalone';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-board-card',
  standalone: true,
  imports: [IonImg],
  templateUrl: './board-card.component.html',
  styleUrl: './board-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardCardComponent {}
