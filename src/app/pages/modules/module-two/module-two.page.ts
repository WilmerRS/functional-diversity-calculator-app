import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  IonApp,
  IonContent,
  IonImg,
  IonInput,
  IonSelect,
  IonSelectOption,
} from '@ionic/angular/standalone';
import { BackPageButtonComponent } from 'src/app/components/back-page-button/back-page-button.component';
import { BadgeTitleComponent } from 'src/app/components/badge-title/badge-title.component';
import { ModuleCardComponent } from 'src/app/components/module-card/module-card.component';
import { NextPageButtonComponent } from 'src/app/components/next-page-button/next-page-button.component';
import { NotebookBackgroundComponent } from 'src/app/components/notebook-background/notebook-background.component';

type Genders = 'male' | 'female' | 'other';

type DiversityTypes =
  | 'sensorial'
  | 'psychological'
  | 'cognitive'
  | 'visually'
  | 'auditory'
  | 'multiple';

@Component({
  selector: 'app-module-two',
  templateUrl: 'module-two.page.html',
  styleUrls: ['module-two.page.scss'],
  standalone: true,
  imports: [
    IonApp,
    IonImg,
    IonContent,
    IonInput,
    IonSelect,
    IonSelectOption,
    NotebookBackgroundComponent,
    NextPageButtonComponent,
    BackPageButtonComponent,
    BadgeTitleComponent,
    ModuleCardComponent,
    ReactiveFormsModule,
  ],
})
export class ModuleTwoPage {
  readonly diversityTypes: { name: string; label: string }[] = [
    {
      name: 'sensorial',
      label: 'Sensorial',
    },
    {
      name: 'psychological',
      label: 'Psicológica',
    },
    {
      name: 'cognitive',
      label: 'Cognitiva',
    },
    {
      name: 'visually',
      label: 'Visual',
    },
    {
      name: 'auditory',
      label: 'Auditiva',
    },
    {
      name: 'multiple',
      label: 'Múltiple',
    },
  ];
  readonly genders: { name: string; label: string }[] = [
    {
      name: 'male',
      label: 'Masculino',
    },
    {
      name: 'female',
      label: 'Femenino',
    },
    {
      name: 'other',
      label: 'Otro',
    },
  ];
  readonly venues: { name: string; label: string }[] = [
    {
      name: 'villa-rosario',
      label: 'Villa del Rosario',
    },
    {
      name: 'pamplona',
      label: 'Pamplona',
    },
    {
      name: 'cucuta',
      label: 'Cread Cúcuta',
    },
  ];
  readonly semesters = Array.from({ length: 10 }, (_, i) => i + 1);

  readonly studentForm = new FormGroup({
    name: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(1),
    ]),
    gender: new FormControl<Genders | null>(null, [Validators.required]),
    otherAnswer: new FormControl<string>(''),
    diversityType: new FormControl<DiversityTypes | null>(null),
    semester: new FormControl<number>(1, [Validators.required]),
    career: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(1),
    ]),
    faculty: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(1),
    ]),
    venue: new FormControl<string>('', [Validators.required]),
  });
}
