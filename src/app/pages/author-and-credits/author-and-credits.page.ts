import { UserStateService } from 'src/app/services/user-state.service';
import { Component, inject } from '@angular/core';
import {
  IonApp,
  IonContent,
  IonImg,
  IonButton,
} from '@ionic/angular/standalone';
import { BackPageButtonComponent } from 'src/app/components/back-page-button/back-page-button.component';
import { BoardCardComponent } from 'src/app/components/board-card/board-card.component';
import { HandButtonComponent } from 'src/app/components/hand-button/hand-button.component';
import { NotebookBackgroundComponent } from 'src/app/components/notebook-background/notebook-background.component';
import { ToastController, AlertController } from '@ionic/angular/standalone';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';

@Component({
  selector: 'app-author-and-credits',
  templateUrl: 'author-and-credits.page.html',
  styleUrls: ['author-and-credits.page.scss'],
  standalone: true,
  imports: [
    IonApp,
    IonContent,
    IonImg,
    IonButton,
    NotebookBackgroundComponent,
    BackPageButtonComponent,
    BoardCardComponent,
    HandButtonComponent,
  ],
})
export class AuthorAndCreditsPage {
  private _toastController = inject(ToastController);
  private _alertController = inject(AlertController);
  private _userStateService = inject(UserStateService);

  async generateCSV() {
    try {
      const users = this._userStateService.getCharacterizedUsersAsCSV();
      const date = new Date().toISOString().slice(0, 10);
      await this._saveCSV(
        users,
        `${date} - Caracterizacion usuarios - Diversidad funcional`
      );
      this._toastController
        .create({
          message:
            'Datos exportados con éxito. Revisa tu carpeta de Documentos.',
          duration: 2000,
          color: 'success',
          position: 'top',
        })
        .then((toast) => toast.present());
    } catch (error) {
      this._toastController
        .create({
          message: 'No hay datos para exportar',
          duration: 2000,
          color: 'danger',
          position: 'top',
        })
        .then((toast) => toast.present());
    }
  }

  clearData() {
    this._alertController
      .create({
        header: '¿Estás seguro?',
        message:
          'Se borrarán todos los datos de los usuarios caracterizados y no se podrán recuperar.',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
          },
          {
            text: 'Borrar',
            handler: () => this._clearDataHandler(),
          },
        ],
      })
      .then((alert) => alert.present());
  }

  private _clearDataHandler() {
    this._userStateService.removeCharacterizedUsersInLocalStorage();
    this._toastController
      .create({
        message: 'Datos borrados con éxito',
        duration: 2000,
        color: 'success',
        position: 'top',
      })
      .then((toast) => toast.present());
  }

  private async _saveCSV(users: any, fileName: string) {
    return Filesystem.writeFile({
      path: `${fileName}.csv`,
      data: users,
      directory: Directory.Documents,
      encoding: Encoding.UTF8,
    });
  }
}
