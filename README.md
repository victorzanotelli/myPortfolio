PORTFOLIO — DEUX MONDES (VUE + TAILWIND CSS)

Page d'accueil : une image coupée en diagonale.
- En bas à gauche → version française, thème Zalem (étrange et vivant).
- En haut à droite → version anglaise, thème Brave New World (ordonné et lumineux).
Les deux versions ont les mêmes pages : Accueil, Projets, Parcours, Expériences, Contact.

Lancer le site :
1. npm install
2. npm run dev (ou node ./node_modules/vite/bin/vite.js --host 0.0.0.0)
3. Ouvre l’adresse locale affichée dans le terminal.

Où modifier quoi :
- src/data.js : tout le contenu, en français (fr) et en anglais (en).
- src/style.css : les deux thèmes ([data-theme="zalem"] et [data-theme="brave"]).
- src/pages/PortalPage.vue : la page d'accueil avec l'image.
- src/router.js : la liste des pages.
- public/assets/ : portal.jpg (image d'accueil), photo-pro.jpg, CV-VAZ-Epitech.pdf.

Chaque push sur main déploie le site sur GitHub Pages.
