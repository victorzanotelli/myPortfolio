PORTFOLIO — CARNET D'EXPLORATEUR (VUE + TAILWIND CSS)

1. Ouvre un terminal dans ce dossier.
2. Lance npm install.
3. Lance npm run dev (ou node ./node_modules/vite/bin/vite.js --host 0.0.0.0).
4. Ouvre l’adresse locale affichée dans le terminal.

Structure :
- src/data.js : tout le contenu (profil, projets, expériences). C'est le fichier à modifier en priorité.
- src/pages/ : une page par section (Accueil, Projets, Parcours, Expériences, Contact).
- src/router.js : la liste des pages et leurs adresses (#/projets, #/contact…).
- src/style.css : les couleurs et polices du thème.
- public/assets/ : la photo (photo-pro.jpg) et le CV (CV-VAZ-Epitech.pdf).

Chaque push sur main déploie le site sur GitHub Pages.
