import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonApp, IonContent, IonImg } from '@ionic/angular/standalone';
import { BoardCardComponent } from 'src/app/components/board-card/board-card.component';
import { EmailInputComponent } from 'src/app/components/email-input/email-input.component';
import { MenuButtonComponent } from 'src/app/components/menu-button/menu-button.component';
import { NextPageButtonComponent } from 'src/app/components/next-page-button/next-page-button.component';
import { NotebookBackgroundComponent } from 'src/app/components/notebook-background/notebook-background.component';
import { UserStateService } from 'src/app/services/user-state.service';

@Component({
  selector: 'app-inclusion-in-the-classroom',
  templateUrl: 'inclusion-in-the-classroom.page.html',
  styleUrls: ['inclusion-in-the-classroom.page.scss'],
  standalone: true,
  imports: [
    IonApp,
    IonContent,
    IonImg,
    NotebookBackgroundComponent,
    NextPageButtonComponent,
    BoardCardComponent,
    MenuButtonComponent,
    EmailInputComponent,
    ReactiveFormsModule,
  ],
})
export class InclusionInTheClassroomPage {
  emailControl = new FormControl('', [Validators.required, Validators.email]);

  private _userStateService = inject(UserStateService);

  constructor() {}

  saveEmailUser() {
    if (!this.emailControl.value) {
      return;
    }

    this._userStateService.saveEmailUser(this.emailControl.value);
  }
}
