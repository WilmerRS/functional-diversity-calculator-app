import { IonApp } from '@ionic/angular/standalone';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-notebook-background',
  standalone: true,
  imports: [IonApp, NgClass],
  templateUrl: './notebook-background.component.html',
  styleUrl: './notebook-background.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotebookBackgroundComponent {
  @Input({ required: true })
  public theme:
    | 'cyan'
    | 'light-beige'
    | 'pale-aqua'
    | 'white'
    | 'ivory'
    | 'grayish-blue' = 'cyan';
  @Input()
  public size: 'small' | 'medium' | 'large' = 'medium';
}
