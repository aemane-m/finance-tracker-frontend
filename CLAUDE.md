## Mission

Implémenter le frontend Angular de l’application de finance personnelle associée au backend Spring Boot + Supabase Auth.

Le frontend doit être :
- proprement structuré
- strictement typé
- cohérent avec les endpoints REST
- sécurisé côté client sans exposer de secrets serveur
- maintenable
- présentable académiquement
- assez propre pour servir de base produit

Le projet n’est pas un SaaS complet.
Le périmètre assumé est :
- mono-portefeuille
- devise unique EUR
- pas de sync bancaire
- pas de multi-comptes
- pas de rapprochement bancaire

---

## Contraintes produit non négociables

- Un utilisateur = un seul portefeuille logique
- Devise unique = EUR
- Aucune notion de compte bancaire multiple
- Aucune synchronisation bancaire
- Aucune conversion multi-devise
- Tous les agrégats dashboard sont calculés côté backend à la volée
- Supabase Auth gère l’authentification
- Le backend Spring valide le JWT Supabase sur les routes protégées
- Le frontend n’envoie jamais de `userId`
- Le frontend ne connaît jamais la `service_role` Supabase
- Le frontend utilise uniquement :
  - la clé `anon` Supabase
  - le token d’accès utilisateur
- Le logout global se fait via le backend sur `/v1/account/logout-all`

---

## Source de vérité API

Utiliser comme base :
- `environment.apiBaseUrl = http://localhost:8080/v1`

Important :
- certains documents projet peuvent mentionner `/api/...`
- le frontend doit être codé pour une seule convention
- par défaut ici, utiliser `/v1/...`

Ne jamais coder plusieurs préfixes concurrents.

---

## Stack frontend imposée

- Angular récent avec standalone components
- TypeScript strict
- Angular Router
- Angular HttpClient
- Angular Reactive Forms
- Interceptor HTTP pour injecter le Bearer token
- Guard d’authentification pour protéger les routes privées
- Supabase JS SDK pour auth côté client
- SCSS
- RxJS
- dayjs pour la gestion des dates
- chart.js + ng2-charts pour le dashboard
- SweetAlert2 pour les confirmations, suppressions, succès, erreurs et feedback utilisateur

Optionnel mais recommandé :
- Tailwind CSS pour accélérer l’UI
- sinon SCSS modulaire propre

---

## Intégration obligatoire de SweetAlert2 Library

Installer et utiliser SweetAlert2 pour éviter les confirmations et alertes basiques.

### Dépendance attendue

- `sweetalert2`

### Usages obligatoires

Utiliser SweetAlert2 pour :
- confirmations de suppression
- confirmations d’actions sensibles
- succès après création / mise à jour / suppression
- erreurs utilisateur lisibles
- confirmation avant `logout-all`
- confirmation avant exécution manuelle de transaction planifiée
- confirmation avant paiement de dette
- confirmation avant contribution à un objectif si l’action a un impact significatif

### Interdictions

- ne pas utiliser `window.alert()`
- ne pas utiliser `window.confirm()`
- ne pas coder des modales artisanales inutiles pour les cas simples d’alerte/confirmation

### Centralisation

Créer si utile un service dédié :
- `notification.service.ts`

Il doit proposer des helpers explicites :
- `confirmDelete(...)`
- `confirmAction(...)`
- `showSuccess(...)`
- `showError(...)`
- `showWarning(...)`

---

## Structure attendue du projet

Créer ou conserver cette structure :

```text
src/app/
  core/
    auth/
      auth.service.ts
      supabase.client.ts
    guards/
      auth.guard.ts
      guest.guard.ts
    interceptors/
      auth-interceptor.ts
      api-error-interceptor.ts
    services/
      api.service.ts
      notification.service.ts
    models/
      api-error.model.ts
      page.model.ts
      common.model.ts
    utils/
      date.utils.ts
      http.utils.ts
      enum.utils.ts

  shared/
    ui/
      button/
      card/
      modal/
      table/
      form-field/
      empty-state/
      loading-skeleton/
      confirm-dialog/
      badge/
      stat-card/
    components/
      public-header/
      public-footer/
      app-sidebar/
      app-topbar/
      pagination/
      search-bar/
    pipes/
    directives/

  layout/
    public-layout/
    app-layout/

  features/
    landing/
      pages/
        landing-page/
    auth/
      pages/
        login-page/
        signup-page/
        forgot-password-page/
    dashboard/
      pages/
        dashboard-page/
      services/
        dashboard.service.ts
      models/
    transactions/
      pages/
        transactions-list-page/
        transaction-form-page/
        transaction-detail-page/
      services/
        transactions.service.ts
      models/
      components/
        transactions-table/
        transaction-form/
        transaction-filters/
    categories/
      pages/
        categories-page/
      services/
        categories.service.ts
      models/
      components/
        category-form/
    budgets/
      pages/
        budgets-page/
      services/
        budgets.service.ts
      models/
      components/
        budget-form/
    goals/
      pages/
        goals-page/
        goal-detail-page/
      services/
        goals.service.ts
      models/
      components/
        goal-form/
        contribute-goal-form/
        goal-contributions-table/
    debts/
      pages/
        debts-page/
        debt-detail-page/
      services/
        debts.service.ts
      models/
      components/
        debt-form/
        debt-payment-form/
        debt-payments-table/
    planned-transactions/
      pages/
        planned-list-page/
        planned-detail-page/
      services/
        planned-transactions.service.ts
      models/
      components/
        planned-form/
        planned-runs-table/
    calendar/
      pages/
        calendar-page/
      services/
        calendar.service.ts
      models/
      components/
        calendar-grid/
        calendar-event-form/
        event-detail-modal/
    profile/
      pages/
        profile-page/
      services/
        profile.service.ts
      components/
        profile-form/
    security/
      pages/
        security-page/
      services/
        account.service.ts
      components/
        logout-all-card/

  app.routes.ts
  app.config.ts
````

---

## Règles d’architecture frontend

### 1. Séparation stricte des responsabilités

* `core/` = infrastructure transverse
* `shared/` = composants UI réutilisables
* `layout/` = structure visuelle publique/privée
* `features/` = domaines métier

### 2. Services HTTP par domaine métier

Créer un service dédié par domaine :

* `transactions.service.ts`
* `categories.service.ts`
* `budgets.service.ts`
* `goals.service.ts`
* `debts.service.ts`
* `planned-transactions.service.ts`
* `calendar.service.ts`
* `dashboard.service.ts`
* `account.service.ts`
* `profile.service.ts`

### 3. Modèles TypeScript séparés par domaine

Ne pas tout mettre dans un seul fichier `types.ts`.
Créer des modèles propres, nommés et strictement typés.

### 4. Aucun `any`

Interdit.
Tout doit être typé.

### 5. Pas de logique métier importante dans les composants

Les composants :

* affichent
* collectent l’entrée utilisateur
* délèguent aux services

### 6. Gestion d’erreur uniforme

Toutes les erreurs backend doivent être converties en messages UI lisibles.
Utiliser le format `ApiError`.

---

## Typescript Types Enhancement

Renforcer le typage TypeScript au-delà du strict minimum.

### Règles

* pas de `any`
* éviter `unknown` sauf cas justifié
* éviter `as` non justifié
* préférer des interfaces ou types explicites
* typer les réponses HTTP
* typer les payloads de création
* typer les payloads de mise à jour
* typer les formulaires réactifs autant que possible
* typer les paramètres de route
* typer les objets de filtres
* typer les états de chargement si nécessaire

### À créer par domaine

Pour chaque domaine métier, distinguer :

* modèle de lecture
* payload de création
* payload de mise à jour
* filtres ou query params si utile

Exemples :

* `CreateTransactionRequest`
* `UpdateTransactionRequest`
* `TransactionSearchParams`
* `CreateGoalRequest`
* `ContributeGoalRequest`
* `RegisterDebtPaymentRequest`
* `CreateCalendarEventRequest`

### Utiliser des unions et types utilitaires intelligemment

Quand pertinent, utiliser :

* `Partial<T>`
* `Pick<T, ...>`
* `Omit<T, ...>`
* unions littérales
* types readonly pour les constantes

Mais ne pas en abuser au point de rendre le code illisible.

---

## Typages obligatoires

### Enums

```ts
export type TransactionType = 'INCOME' | 'EXPENSE';
export type PlannedFrequency = 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'YEARLY';
export type GoalStatus = 'ACTIVE' | 'COMPLETED' | 'ARCHIVED';
export type DebtStatus = 'ACTIVE' | 'PAID' | 'CANCELLED';
export type PlannedRunStatus = 'SUCCESS' | 'FAILED';
```

### Formats de dates

* `LocalDate` backend → `string` format `YYYY-MM-DD`
* `Instant` backend → `string` ISO-8601
* query param `month` → `YYYY-MM`

### Erreur API uniforme

```ts
export interface ApiError {
  timestamp: string;
  status: number;
  error: string;
  message: string;
  path: string;
  details?: string[];
}
```

### Pagination Spring

```ts
export interface Page<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  number: number;
  size: number;
}
```

### Modèles métier minimaux

#### Category

```ts
export interface Category {
  id: number;
  name: string;
  icon?: string | null;
  color?: string | null;
  isDefault: boolean;
  createdAt: string;
}
```

#### Transaction

```ts
export interface Transaction {
  id: number;
  amount: number;
  type: TransactionType;
  categoryId: number;
  label: string;
  date: string;
  note?: string | null;
  source?: string | null;
  createdAt: string;
  updatedAt?: string | null;
}
```

#### Budget

```ts
export interface Budget {
  id: number;
  categoryId: number;
  monthlyLimit: number;
  alertThreshold: number;
  createdAt: string;
  updatedAt?: string | null;
}
```

#### Goal

```ts
export interface Goal {
  id: number;
  name: string;
  targetAmount: number;
  currentAmount: number;
  deadline?: string | null;
  status: GoalStatus;
  createdAt: string;
  updatedAt?: string | null;
}
```

#### GoalContribution

```ts
export interface GoalContribution {
  id: number;
  goalId: number;
  amount: number;
  contributionDate: string;
  note?: string | null;
  transactionId?: number | null;
  createdAt: string;
}
```

#### Debt

```ts
export interface Debt {
  id: number;
  creditorName: string;
  totalAmount: number;
  remainingAmount: number;
  monthlyPayment: number;
  interestRate?: number | null;
  startDate: string;
  dueDate?: string | null;
  status: DebtStatus;
  createdAt: string;
  updatedAt?: string | null;
}
```

#### DebtPayment

```ts
export interface DebtPayment {
  id: number;
  debtId: number;
  paymentDate: string;
  amount: number;
  note?: string | null;
  transactionId?: number | null;
  createdAt: string;
}
```

#### PlannedTransaction

```ts
export interface PlannedTransaction {
  id: number;
  label: string;
  amount: number;
  type: TransactionType;
  categoryId: number;
  frequency: PlannedFrequency;
  nextDueDate: string;
  autoCreate: boolean;
  isActive: boolean;
  createdAt: string;
  updatedAt?: string | null;
}
```

#### PlannedTransactionRun

```ts
export interface PlannedTransactionRun {
  id: number;
  plannedTransactionId: number;
  dueDate: string;
  executedAt?: string | null;
  status: PlannedRunStatus;
  createdTransactionId?: number | null;
  errorMessage?: string | null;
}
```

#### CalendarEvent

```ts
export interface CalendarEvent {
  id: number;
  title: string;
  eventDate: string;
  amount?: number | null;
  color?: string | null;
  notes?: string | null;
  createdAt: string;
  updatedAt?: string | null;
}
```

### Dashboard models

Créer des modèles dédiés pour :

* monthly summary
* spending by category
* upcoming planned transactions
* goals progress
* budget alerts

Ne pas les typer en `unknown` ou `Record<string, any>`.

---

## Angular Reactive Forms obligatoire

Tous les formulaires métier doivent utiliser **Angular Reactive Forms**.

### Interdictions

* ne pas construire les formulaires métier uniquement en template-driven forms
* ne pas gérer les champs complexes avec `[(ngModel)]` partout
* ne pas laisser la validation dispersée dans le template sans structure

### Obligations

Utiliser :

* `FormGroup`
* `FormControl`
* `FormBuilder`
* `Validators`
* validation conditionnelle si nécessaire
* soumission désactivée tant que formulaire invalide
* marquage `touched` / `dirty`
* helper de messages d’erreurs

---

## Angular FormGroup - TypeScript

Dans les fichiers TypeScript de composants formulaire, construire les formulaires proprement.

### Exigences

* initialiser les `FormGroup` dans le composant
* typer les contrôles autant que possible
* centraliser les validators
* patcher les valeurs en mode édition
* éviter les `.value` non sûrs si le typage permet mieux
* transformer les payloads formulaire vers DTO backend explicitement

### Exemple de discipline attendue

* `buildForm()`
* `patchForm(entity)`
* `submit()`
* `mapFormToRequest()`

Ne pas mettre toute la logique dans `ngOnInit()` comme un bourrin.

---

## Angular FormGroup - HTML

Dans les templates HTML :

* connecter les formulaires avec `[formGroup]`
* connecter les champs avec `formControlName`
* afficher les erreurs de validation proprement
* désactiver le bouton submit si le formulaire est invalide ou en chargement
* afficher les états `touched`, `dirty`, `invalid`

---

## Reactive Forms Validators

Utiliser les validateurs Angular partout où nécessaire.

### Validators attendus

* `Validators.required`
* `Validators.min`
* `Validators.max`
* `Validators.minLength`
* `Validators.maxLength`
* `Validators.email`
* `Validators.pattern`

### Validators custom à prévoir si utile

* confirmation mot de passe
* date de fin après date de début
* deadline cohérente
* montant positif
* seuil budget cohérent
* couleur hexadécimale valide
* fréquence/plage de dates cohérente

---

## Make use of the validations in the HTML

Les validations ne doivent pas rester seulement côté TypeScript.

Le HTML doit exploiter explicitement les états de validation pour :

* afficher les messages d’erreur
* signaler les champs invalides
* ajouter les attributs HTML natifs utiles
* désactiver la soumission
* améliorer l’UX

### Utiliser aussi les validations HTML natives quand pertinent

Ajouter dans les champs HTML :

* `required`
* `min`
* `max`
* `minlength`
* `maxlength`
* `type="email"`
* `type="number"`
* `step`
* `pattern`

Même si Reactive Forms valide déjà côté Angular.
La redondance ici est utile pour UX + accessibilité + clarté.

### Exemple de règle

Un formulaire propre doit combiner :

* validation HTML native
* validation Angular Reactive Forms
* messages UI lisibles

Pas juste une des trois.

---

## Authentification

### Principe

Le frontend gère via Supabase JS :

* login
* signup
* logout simple
* récupération session
* récupération token
* éventuelle mise à jour password si le flux retenu passe par SDK

Le backend Spring gère :

* toutes les routes métier protégées
* logout global via `/v1/account/logout-all`

### À implémenter

#### `supabase.client.ts`

Créer le client Supabase avec :

* `environment.supabaseUrl`
* `environment.supabaseAnonKey`

#### `auth.service.ts`

Implémenter :

* `signIn(email, password)`
* `signUp(email, password, metadata?)`
* `signOut()`
* `getSession()`
* `getAccessToken()`
* `getCurrentUser()`
* `isAuthenticated()`

### Interceptor auth

Créer un interceptor HTTP qui :

* récupère le token Supabase courant
* ajoute `Authorization: Bearer <token>` sur toutes les requêtes backend protégées
* n’ajoute rien si pas de session
* n’ajoute rien aux appels directs purement Supabase SDK

### Guards

Créer :

* `auth.guard.ts` pour routes privées
* `guest.guard.ts` pour empêcher un utilisateur connecté d’aller sur `/login` ou `/signup`

---

## Routage attendu

### Routes publiques

* `/` → landing page
* `/login`
* `/signup`

### Routes privées

Toutes sous `/app` :

* `/app/dashboard`
* `/app/transactions`
* `/app/transactions/new`
* `/app/transactions/:id`
* `/app/categories`
* `/app/budgets`
* `/app/goals`
* `/app/goals/:id`
* `/app/debts`
* `/app/debts/:id`
* `/app/planned`
* `/app/planned/:id`
* `/app/calendar`
* `/app/profile`
* `/app/security`

### Règles

* `authGuard` sur `/app/**`
* `guestGuard` sur `/login` et `/signup`
* wildcard `**` → redirection vers `/`

---

## Layouts

### Public layout

Utilisé pour :

* landing
* login
* signup

Doit inclure :

* header public
* footer
* contenu centré et propre

### App layout

Utilisé pour toutes les routes privées `/app/**`

Doit inclure :

* sidebar
* topbar
* contenu principal
* responsive mobile/desktop

Sidebar :

* Dashboard
* Transactions
* Categories
* Budgets
* Goals
* Debts
* Planned
* Calendar
* Profile
* Security

---

## Landing page

Créer une vraie landing page utile, pas un écran vide.

### Sections minimales

* hero principal
* proposition de valeur
* aperçu fonctionnalités
* section sécurité / confidentialité
* CTA vers signup/login
* preview du dashboard
* footer

### Messages à refléter

* gestion simple des finances personnelles
* visualisation claire des dépenses
* objectifs d’épargne
* budgets mensuels
* transactions planifiées
* calendrier financier
* application sérieuse, pas un gadget

---

## API services à implémenter

## 1. Transactions

Base path :

* `/v1/transactions`

Méthodes :

* `getAll(page?, size?, sort?)`
* `getById(id)`
* `create(payload)`
* `update(id, payload)`
* `delete(id)`
* `search(params)`

Endpoint spécial :

* `GET /v1/transactions/search`

Prévoir :

* pagination
* tri
* filtres
* recherche texte si dispo
* date min/max si dispo

## 2. Categories

Base path :

* `/v1/categories`

Méthodes :

* `getAll()`
* `getById(id)`
* `create(payload)`
* `update(id, payload)`
* `delete(id)`

UI :

* distinction catégories système vs custom
* empêcher suppression/édition système si nécessaire

## 3. Budgets

Base path :

* `/v1/budgets`

Méthodes :

* `getAll()`
* `getById(id)`
* `create(payload)`
* `update(id, payload)`
* `delete(id)`

## 4. Goals

Base path :

* `/v1/goals`

Méthodes :

* `getAll()`
* `getById(id)`
* `create(payload)`
* `update(id, payload)`
* `delete(id)`
* `contribute(id, payload)`
* `getContributions(id, page?, size?)`

Endpoints spéciaux :

* `PATCH /v1/goals/{id}/contribute`
* `GET /v1/goals/{id}/contributions`

## 5. Debts

Base path :

* `/v1/debts`

Méthodes :

* `getAll()`
* `getById(id)`
* `create(payload)`
* `update(id, payload)`
* `delete(id)`
* `registerPayment(id, payload)`
* `getPayments(id, page?, size?)`
* `getSummary()`

Endpoints spéciaux :

* `PATCH /v1/debts/{id}/payment`
* `GET /v1/debts/{id}/payments`
* `GET /v1/debts/summary`

## 6. Planned Transactions

Base path :

* `/v1/planned-transactions`

Méthodes :

* `getAll()`
* `getById(id)`
* `create(payload)`
* `update(id, payload)`
* `delete(id)`
* `runNow(id)`
* `toggle(id)`
* `getRuns(id, page?, size?)`

Endpoints spéciaux :

* `POST /v1/planned-transactions/{id}/run-now`
* `PATCH /v1/planned-transactions/{id}/toggle`
* `GET /v1/planned-transactions/{id}/runs`

## 7. Calendar

Base path :

* `/v1/calendar/events`

Méthodes :

* `getMonth(month)`
* `getById(id)`
* `create(payload)`
* `update(id, payload)`
* `delete(id)`

## 8. Dashboard

Base path :

* `/v1/dashboard`

Méthodes :

* `getSummary()`
* `getSpendingByCategory()`
* `getUpcoming()`
* `getGoalsProgress()`
* `getBudgetAlerts()`

## 9. Account / Security

Base path :

* `/v1/account`

Méthode :

* `logoutAll()`

UI :

* carte dédiée dans `/app/security`
* confirmation SweetAlert2
* appel POST sans `userId`
* le backend déduit l’utilisateur depuis le JWT

---

## Pages à implémenter

* Login page
* Signup page
* Dashboard page
* Transactions page
* Categories page
* Budgets page
* Goals page
* Goal detail page
* Debts page
* Debt detail page
* Planned page
* Planned detail page
* Calendar page
* Profile page
* Security page

---

## UX attendue

Chaque écran métier doit gérer :

* loading state
* skeleton state
* empty state
* error state
* success feedback
* confirmation avant suppression
* formulaires validés côté client

---

## Validation des formulaires

Chaque formulaire doit combiner :

* validations HTML natives
* Angular Reactive Forms
* Validators Angular
* messages d’erreur UI clairs
* feedback visuel sur invalidité
* bouton submit désactivé si invalide

### Champs à valider rigoureusement

* email
* password
* confirmation password
* montant
* dates
* seuils budgets
* fréquences
* nom/titre
* couleur hex si utilisée
* notes selon longueur max

---

## Pagination et requêtes

Respecter le contrat Spring Page :

* `page=0`
* `size=20`
* `sort=date,desc`

Créer un composant/helper réutilisable de pagination.

Toutes les listes paginées doivent permettre :

* page suivante/précédente
* affichage total
* affichage page courante
* rechargement propre

---

## Gestion d’erreurs

Créer un `api-error-interceptor.ts` ou helper central pour :

* extraire `ApiError`
* afficher des messages propres
* gérer 401/403/404/422/500

Comportement recommandé :

* `401` → session invalide, logout local puis redirection login
* `403` → message d’autorisation
* `404` → message neutre ou redirection liste
* validation backend → afficher `details[]` si présents
* feedback utilisateur via SweetAlert2 ou UI contextuelle selon le cas

---

## Environnements

Créer :

### `environment.development.ts`

```ts
export const environment = {
  production: false,
  apiBaseUrl: 'http://localhost:8080/v1',
  supabaseUrl: 'https://YOUR_PROJECT.supabase.co',
  supabaseAnonKey: 'YOUR_SUPABASE_ANON_KEY'
};
```

### `environment.ts`

Adapter selon la stratégie build.

Ne jamais mettre la `service_role`.

---

## Règles de sécurité front

* ne jamais stocker de secret serveur
* ne jamais faire confiance à un `userId` venant de l’UI
* ne jamais appeler logout-all avec un `userId`
* ne jamais logger de token JWT
* ne jamais afficher des traces backend brutes en production

---

## Qualité de code exigée

* standalone components
* imports propres
* services injectables `providedIn: 'root'`
* fichiers lisibles
* noms explicites
* pas de duplication massive
* pas de composants géants
* extraire les composants réutilisables
* pas de commentaires triviaux

---

## Style UI recommandé

Cible :

* sobre
* moderne
* lisible
* financier sans cliché agressif
* proche d’un dashboard personnel premium/minimal

Éviter :

* gradients criards
* excès de bleu partout
* interface surchargée
* look bootstrap scolaire

---

## Plan d’implémentation obligatoire

### Phase 1 — fondations

1. config Angular
2. environnements
3. client Supabase
4. auth service
5. auth interceptor
6. auth guard
7. guest guard
8. layouts public/app
9. routing global
10. composants UI de base
11. intégration SweetAlert2
12. base reactive forms

### Phase 2 — accès public

1. landing
2. login
3. signup

### Phase 3 — dashboard

1. dashboard service
2. widgets
3. dashboard page

### Phase 4 — transactions + categories

1. modèles
2. services
3. liste
4. formulaire réactif
5. recherche
6. pagination
7. CRUD

### Phase 5 — budgets + goals

1. budgets CRUD
2. goals CRUD
3. contribute
4. contributions history

### Phase 6 — debts + planned transactions

1. debts CRUD
2. payment flow
3. summary
4. planned CRUD
5. toggle
6. run-now
7. runs history

### Phase 7 — calendar + profile + security

1. calendar month view
2. event CRUD
3. profile page
4. logout-all
5. stabilisation UI

### Phase 8 — finition

1. empty states
2. skeletons
3. confirmations SweetAlert2
4. responsive
5. polish visuel
6. nettoyage code
7. renforcement typage TypeScript
8. revue validations HTML + Reactive Forms

---

## Définition de terminé

Le frontend est terminé si :

* authentification fonctionne
* routes publiques/privées fonctionnent
* JWT injecté correctement
* toutes les ressources métier ont un service dédié
* toutes les pages principales existent
* les CRUD principaux fonctionnent
* les endpoints spéciaux fonctionnent
* pagination Spring est gérée
* erreurs backend sont rendues proprement
* formulaires en Reactive Forms
* validations HTML et Angular présentes
* SweetAlert2 intégré pour les actions sensibles
* code strictement typé
* aucun secret sensible exposé

---

## Ce qu’il ne faut pas faire

* ne pas inventer des endpoints non documentés
* ne pas envoyer `userId` au backend
* ne pas mélanger plusieurs conventions de routes
* ne pas coder l’app entière dans `app.component.ts`
* ne pas faire de logique métier lourde dans les templates
* ne pas contourner Supabase Auth
* ne pas faire des formulaires non typés et non validés
* ne pas utiliser `alert()` et `confirm()`
* ne pas faire une landing vide juste pour cocher une case

---

## Priorité de vérité en cas de conflit

Ordre :

1. endpoints réellement exposés par le backend
2. `environment.apiBaseUrl`
3. architecture mono-wallet / EUR / Supabase Auth
4. ce fichier `CLAUDE.md`
5. préférences UI secondaires

Si un document mentionne `/api/...` et un autre `/v1/...`,
ne jamais implémenter les deux à la fois.

---

## Résultat attendu de Claude

Claude doit produire :

* les fichiers Angular nécessaires
* le code des services, modèles, guards, interceptors
* le routing
* les layouts
* les pages principales
* les composants partagés utiles
* les formulaires en Reactive Forms
* les validators HTML + Angular
* l’intégration SweetAlert2
* un typage TypeScript renforcé
* du code exécutable, pas des pseudo-maquettes

