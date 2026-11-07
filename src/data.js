// Tout le contenu du portfolio est ici : modifie ce fichier pour mettre à jour le site.

const base = import.meta.env.BASE_URL

export const profile = {
  name: 'Victor',
  school: 'Étudiant à Epitech',
  email: 'victor.anclin@epitech.eu',
  photo: `${base}assets/photo-pro.jpg`,
  cv: `${base}assets/CV-VAZ-Epitech.pdf`,
}

export const projects = [
  {
    title: "Eclat d'art",
    context: "Projet full stack de fin d'étude",
    objective: "Créer un full-stack validant les aquis de la formation",
    skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Symphony', 'Travail en équipe', 'Autonomie', 'Réssilience'],
    reflection: "Cela m'a permit de découvir et partager avec des collaborateurs éxceptionnels mais aussi de surmonter des challenges qui, quelques mois plus tot, me paraissaient hors de porter. Et tout ça grâce à la force de l'amitier",
    code: 'https://github.com/WildCodeSchool/2023-09-PHP-LYON-P3-eclat-d-art',
    demo: '',
  },
  {
    title: "Nom d'un projet personnel",
    context: 'Explique ce qui t’a donné envie de créer ce projet.',
    objective: 'Quel résultat voulais-tu obtenir ?',
    skills: ['HTML', 'CSS', 'JavaScript', 'Accessibilité'],
    reflection: 'Présente une difficulté et la manière dont tu l’as résolue.',
    code: '',
    demo: '',
  },
]

export const experiences = [
  {
    date: '2024',
    place: 'Association',
    title: 'Atipik',
    detail: "Organisation d'évènement musicaux comprennant choix du line-up, acheminement des artistes, mise en place de des postes de ventes et services en temps réels ",
  },
  {
    date: '2021',
    place: 'Mama Shelter',
    title: 'Bar rooftop au Mama Shelter de Lyon',
    detail: 'Mise en place du poste de vente : carte, équipement, matière première et personnel',
  },
]
