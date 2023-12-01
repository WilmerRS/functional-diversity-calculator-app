import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { IonInput } from '@ionic/angular/standalone';

@Component({
  selector: 'app-email-input',
  standalone: true,
  imports: [IonInput, ReactiveFormsModule],
  templateUrl: './email-input.component.html',
  styleUrl: './email-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmailInputComponent {
  @Input({ required: true })
  emailControl!: FormControl;
}
