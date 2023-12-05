import { Injectable } from '@angular/core';

interface Characterization {
  name: string;
  gender: string;
  otherAnswer: string;
  diversityType: string;
  semester: number;
  career: string;
  faculty: string;
  venue: string;
}
@Injectable()
export class UserStateService {
  private _email: string | null = null;

  saveEmailUser(email: string) {
    this._email = email;
  }

  clearEmailUser() {
    this._email = null;
  }

  saveCharacterization(user: Characterization) {
    if (!this._email) {
      return;
    }

    this._saveInLocalStorage({
      email: this._email,
      characterization: user,
    });
  }

  private _saveInLocalStorage({
    email,
    characterization,
  }: {
    email: string;
    characterization: Characterization;
  }) {
    const users = this.getCharacterizedUsers();
    users.push({
      email,
      ...characterization,
    });

    localStorage.setItem('users', JSON.stringify(users));
  }

  getCharacterizedUsers() {
    const users = localStorage.getItem('users');
    if (!users) {
      return [];
    }

    return JSON.parse(users);
  }

  getCharacterizedUsersAsCSV() {
    const users = this.getCharacterizedUsers();
    let str = '';

    const header = Object.keys(users[0]);
    str += header.join(',') + '\r\n';

    // Extract rows
    for (let i = 0; i < users.length; i++) {
      let line = '';
      for (let index in users[i]) {
        if (line !== '') line += ',';
        line += users[i][index];
      }
      str += line + '\r\n';
    }

    return str;
  }

  removeCharacterizedUsersInLocalStorage() {
    const users = this.getCharacterizedUsers();
    localStorage.removeItem('users');
    return users;
  }
}
