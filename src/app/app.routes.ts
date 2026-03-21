import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth-guard';
import { guestGuard } from './core/guards/guest-guard';
import { MainLayout } from './layout/main-layout/main-layout';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/landing/pages/landing-page/landing-page')
        .then(m => m.LandingPage)
  },
  {
    path: 'login',
    canActivate: [guestGuard],
    loadComponent: () =>
      import('./features/auth/pages/login-page/login-page')
        .then(m => m.LoginPage)
  },
  {
    path: 'signup',
    canActivate: [guestGuard],
    loadComponent: () =>
      import('./features/auth/pages/signup-page/signup-page')
        .then(m => m.SignupPage)
  },
  {
    path: 'forgot-password',
    canActivate: [guestGuard],
    loadComponent: () =>
      import('./features/auth/pages/forgot-password-page/forgot-password-page')
        .then(m => m.ForgotPasswordPage)
  },
  {
    path: 'app',
    component: MainLayout,
    canActivate: [authGuard],
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/dashboard/pages/dashboard-page/dashboard-page')
            .then(m => m.DashboardPage)
      },
      {
        path: 'transactions',
        loadComponent: () =>
          import('./features/transactions/pages/transactions-page/transactions-page')
            .then(m => m.TransactionsPage)
      },
      {
        path: 'categories',
        loadComponent: () =>
          import('./features/categories/pages/categories-page/categories-page')
            .then(m => m.CategoriesPage)
      },
      {
        path: 'budgets',
        loadComponent: () =>
          import('./features/budgets/pages/budgets-page/budgets-page')
            .then(m => m.BudgetsPage)
      },
      {
        path: 'goals',
        loadComponent: () =>
          import('./features/goals/pages/goals-page/goals-page')
            .then(m => m.GoalsPage)
      },
      {
        path: 'debts',
        loadComponent: () =>
          import('./features/debts/pages/debts-page/debts-page')
            .then(m => m.DebtsPage)
      },
      {
        path: 'planned',
        loadComponent: () =>
          import('./features/planned-transactions/pages/planned-page/planned-page')
            .then(m => m.PlannedPage)
      },
      {
        path: 'calendar',
        loadComponent: () =>
          import('./features/calendar/pages/calendar-page/calendar-page')
            .then(m => m.CalendarPage)
      },
      {
        path: 'import-export',
        loadComponent: () =>
          import('./features/import-export/pages/import-export-page/import-export-page')
            .then(m => m.ImportExportPage)
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./features/profile/pages/profile-page/profile-page')
            .then(m => m.ProfilePage)
      },
      {
        path: 'security',
        redirectTo: 'profile',
        pathMatch: 'full',
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
