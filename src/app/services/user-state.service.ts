import { Injectable } from '@angular/core';

@Injectable()
export class UserStateService {
  private _email: string | null = null;

  saveEmailUser(email: string) {
    this._email = email;
  }

  get email() {
    return this._email;
  }
}
