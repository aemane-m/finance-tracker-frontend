# Finance Tracker Frontend

Frontend Angular du projet Finance Tracker.

## Prérequis

- Node.js `24.13.0`
- npm `11.6.2`
- Backend Finance Tracker lancé sur `http://localhost:8080`

Si `nvm` est installé :

```bash
nvm use
```

## Installation

```bash
npm install
```

## Lancer le projet

```bash
npm start
```

L'application sera disponible sur `http://localhost:4200`.

En mode développement, Angular utilise `src/environments/environment.development.ts`, déjà versionné dans ce dépôt pour permettre un lancement direct du projet après clonage.

## Build

```bash
npm run build
```

Le build de production utilise `src/environments/environment.ts`.

## Tests

```bash
npm test
```

## Environnements

- `src/environments/environment.development.ts`
  Utilisé par `npm start` et la configuration Angular `development`.
- `src/environments/environment.ts`
  Utilisé pour le build de production.
- `src/environments/environment.development.ts.example`
  Modèle de référence si vous souhaitez remplacer localement la configuration de développement.

Pour des overrides locaux non versionnés, vous pouvez créer vos propres fichiers `*.local.ts` : ils sont ignorés par Git.

## Notes pour l'évaluation

- Le dépôt contient déjà la configuration frontend de développement.
- Après clonage, les commandes minimales sont :

```bash
npm install
npm start
```

ou pour vérifier la compilation :

```bash
npm install
npm run build
```
