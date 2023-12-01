import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'inclusion-in-the-classroom',
    loadComponent: () =>
      import(
        './pages/inclusion-in-the-classroom/inclusion-in-the-classroom.page'
      ).then((m) => m.InclusionInTheClassroomPage),
  },
  {
    path: 'modules-index',
    loadComponent: () =>
      import('./pages/modules-index/modules-index.page').then(
        (m) => m.ModulesIndexPage
      ),
  },
  {
    path: 'modules',
    children: [
      {
        path: 'module-one',
        loadComponent: () =>
          import('./pages/modules/module-one/module-one.page').then(
            (m) => m.ModuleOnePage
          ),
      },
      {
        path: 'module-two',
        loadComponent: () =>
          import('./pages/modules/module-two/module-two.page').then(
            (m) => m.ModuleTwoPage
          ),
      },
      {
        path: 'module-three',
        loadComponent: () =>
          import('./pages/modules/module-three/module-three.page').then(
            (m) => m.ModuleThreePage
          ),
      },
      {
        path: 'module-four',
        loadComponent: () =>
          import('./pages/modules/module-four/module-four.page').then(
            (m) => m.ModuleFourPage
          ),
      },
      {
        path: 'module-five',
        loadComponent: () =>
          import('./pages/modules/module-five/module-five.page').then(
            (m) => m.ModuleFivePage
          ),
      },
      {
        path: 'module-six',
        loadComponent: () =>
          import('./pages/modules/module-six/module-six.page').then(
            (m) => m.ModuleSixPage
          ),
      },
      {
        path: 'module-six-occupational-changes',
        loadComponent: () =>
          import('./pages/modules/module-six/occupational-changes/occupational-changes.page').then(
            (m) => m.OccupationalChangesPage
          ),
      },

      // diversities
      {
        path: 'module-four-visually',
        loadComponent: () =>
          import(
            './pages/modules/module-four/diversities/visually/visually.page'
          ).then((m) => m.VisuallyPage),
      },
      {
        path: 'module-four-cognitive',
        loadComponent: () =>
          import(
            './pages/modules/module-four/diversities/cognitive/cognitive.page'
          ).then((m) => m.CognitivePage),
      },
      {
        path: 'module-four-auditory',
        loadComponent: () =>
          import(
            './pages/modules/module-four/diversities/auditory/auditory.page'
          ).then((m) => m.AuditoryPage),
      },
      {
        path: 'module-four-multiple',
        loadComponent: () =>
          import(
            './pages/modules/module-four/diversities/multiple/multiple.page'
          ).then((m) => m.MultiplePage),
      },
      {
        path: 'module-four-psychological',
        loadComponent: () =>
          import(
            './pages/modules/module-four/diversities/psychological/psychological.page'
          ).then((m) => m.PsychologicalPage),
      },
      // {
      //   path: 'module-four-sensorial',
      //   loadComponent: () =>
      //     import(
      //       './pages/modules/module-four/diversities/sensorial/sensorial.page'
      //     ).then((m) => m.SensorialPage),
      // },
    ],
  },
  {
    path: 'author-and-credits',
    loadComponent: () =>
      import('./pages/author-and-credits/author-and-credits.page').then(
        (m) => m.AuthorAndCreditsPage
      ),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
