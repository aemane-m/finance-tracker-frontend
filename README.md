# Finance Tracker — Frontend

Interface Angular du projet Finance Tracker.

---

## Prérequis

| Outil | Version |
|-------|---------|
| Node.js | `24.13.0` |
| npm | `11.6.2` |
| Angular CLI | inclus via `npx` / `npm start` |

> Le backend Finance Tracker doit être lancé sur `http://localhost:8080` avant de démarrer le frontend.

Si vous utilisez **nvm**, la version Node correcte est sélectionnée automatiquement :

```bash
nvm use
```

---

## Installation & démarrage rapide

```bash
# 1. Cloner le dépôt (si ce n'est pas déjà fait)
git clone <url-du-repo>
cd finance-tracker-frontend

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm start
```

L'application est ensuite accessible sur **http://localhost:4200**.

La configuration de développement (`src/environments/environment.development.ts`) est déjà versionnée dans le dépôt : aucune configuration supplémentaire n'est nécessaire après le clonage.

---

## Problème connu — dépendances optionnelles sur Windows

> **Ce projet a été développé sous macOS.** Un bug connu de npm peut provoquer l'erreur suivante lors du premier `npm install` sur Windows :

```
An unhandled exception occurred: Cannot find module @rollup/rollup-win32-x64-msvc.
npm has a bug related to optional dependencies (https://github.com/npm/cli/issues/4828).
Please try `npm i` again after removing both package-lock.json and node_modules directory.
```

**Solution :**

```powershell
# Supprimer node_modules et package-lock.json, puis réinstaller
Remove-Item -Recurse -Force node_modules
Remove-Item -Force package-lock.json
npm install
npm start
```

Ce problème est dû à la manière dont npm gère les dépendances optionnelles spécifiques à la plateforme. La réinstallation depuis zéro suffit à le résoudre.

---

## Commandes disponibles

| Commande | Description |
|----------|-------------|
| `npm start` | Lance le serveur de développement sur `http://localhost:4200` |
| `npm run build` | Build de production (sortie dans `dist/`) |
| `npm test` | Exécute les tests unitaires |

---

## Fichiers d'environnement

| Fichier | Rôle |
|---------|------|
| `src/environments/environment.development.ts` | Configuration de développement (déjà versionné) |
| `src/environments/environment.ts` | Configuration de production |

Les fichiers `*.local.ts` sont ignorés par Git et peuvent être utilisés pour des surcharges locales non versionnées.
