// Tout le contenu du portfolio est ici, en français (fr) et en anglais (en).
// All the portfolio content lives here, in French (fr) and English (en).

const base = import.meta.env.BASE_URL

export const profile = {
  name: 'Victor',
  email: 'victor.anclin@epitech.eu',
  photo: `${base}assets/photo-pro.jpg`,
  cv: `${base}assets/CV-VAZ-Epitech.pdf`,
  portal: `${base}assets/portal.jpg`,
}

// Adresse de chaque page dans chaque langue
export const paths = {
  fr: { home: '/fr', projects: '/fr/projets', journey: '/fr/parcours', experiences: '/fr/experiences', contact: '/fr/contact' },
  en: { home: '/en', projects: '/en/projects', journey: '/en/journey', experiences: '/en/experience', contact: '/en/contact' },
}

export const content = {
  // ───────────── Version française · thème Zalem ─────────────
  fr: {
    theme: 'zalem',
    brandTag: '// Zalem',
    pages: { home: 'Accueil', projects: 'Projets', journey: 'Parcours', experiences: 'Expériences', contact: 'Contact' },
    switchLabel: 'English',
    switchTitle: 'Voir la version anglaise',
    portal: 'Retour au portail',
    menu: 'Menu',
    close: 'Fermer',
    footer: 'assemblé à la main, pièce par pièce.',

    home: {
      eyebrow: 'Fragment récupéré · 2026-2027',
      // Phrase d'accroche : la partie du milieu est mise en valeur
      title: ['L’intelligence sans capacité d’action est impuissante,', 'la force sans intelligence', 'est dangereuse.'],
      intro: "Après plus de 10 ans dans la restauration, en France et à l'étranger ; en associatif, en collectivité, en bar d'hôtel et en restaurant gastronomique ; à travailler entre 50 h et 90 h par semaine, j'ai décidé de me reconvertir dans l'informatique. Comment je convertis ces années d'expérience d'un domaine si différent ? En une maturité professionnelle et des compétences transverses : adaptabilité, créativité, curiosité et autonomie.",
      cta: 'Fouiller mes projets',
      contact: 'Me contacter',
      next: 'Où creuser ensuite ?',
      caption: 'Victor, en état de marche',
      notes: {
        projects: (n) => `${n} trouvailles à fouiller`,
        journey: () => 'Les pièces que j’ai assemblées',
        experiences: (n) => `${n} chantiers hors programme`,
        contact: () => 'Signal ouvert, réponds-moi',
      },
    },
    projectsPage: {
      eyebrow: 'Étape 01 · Trouvailles',
      title: 'Projets réalisés',
      intro: 'Chaque projet est une pièce que j’ai récupérée, réparée et fait tourner.',
      kicker: 'Pièce n°',
      context: 'Contexte',
      objective: 'Objectif',
      skills: 'Compétences',
      reflection: 'Mon retour',
      code: 'Code source',
      demo: 'Démo',
      codeMissing: 'Lien du code à ajouter',
      demoMissing: 'Lien de démo à ajouter',
    },
    journeyPage: {
      eyebrow: 'Étape 02 · Évolution des compétences',
      title: 'Mon parcours cette année',
      next: 'Prochaine étape',
    },
    experiencesPage: {
      eyebrow: 'Étape 03 · Activités hors programme',
      title: 'Autres expériences',
      intro: 'Le code n’est pas le seul atelier : ces expériences m’ont appris à organiser, à m’adapter et à travailler avec les autres.',
    },
    contactPage: {
      eyebrow: 'Étape 04 · Canal de contact',
      title: 'Entrer en communication',
      intro: 'Une question, un projet, un stage ? Envoie un signal, je réponds.',
      emailLabel: 'E-mail',
      cv: 'Télécharger mon CV (PDF)',
      formEmail: 'Ton adresse e-mail',
      formMessage: 'Message',
      submit: 'Préparer un e-mail',
      subject: 'Message depuis mon portfolio',
      bodyPrefix: 'Mon adresse : ',
    },

    projects: [
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
    ],

    // Le texte peut contenir des balises <strong>
    journey: [
      "Depuis ma rentrée à Epitech, je découvre de nombreux langages et technologies. Conscient qu'il faut du temps pour maîtriser ne serait-ce qu'un de ces domaines, je cherche toujours à en apprendre et à en tester de nouveaux. La diversité des compétences apporte une meilleure vision d'ensemble et une plus grande ouverture d'esprit sur différents projets.",
    ],
    journeyNext: "À côté de mes études, je commence à travailler sur un projet qui me tient à cœur : développer des assistants virtuels ultraspécialisés, entraînés sur des données open source. Le but est de créer des « IA » utilisées pour des tâches précises, qui tournent en local afin de limiter au maximum l'impact environnemental ainsi que le partage et la circulation des données.",

    experiences: [
      {
        date: '2024',
        place: 'Association',
        title: 'Atipik',
        detail: "Organisation d'évènement musicaux comprennant choix du line-up, acheminement des artistes, mise en place de des postes de ventes et services en temps réels",
      },
      {
        date: '2021',
        place: 'Mama Shelter',
        title: 'Bar rooftop au Mama Shelter de Lyon',
        detail: 'Mise en place du poste de vente : carte, équipement, matière première et personnel',
      },
    ],
  },

  // ───────────── English version · Brave New World theme ─────────────
  en: {
    theme: 'brave',
    brandTag: 'Personal file',
    pages: { home: 'Home', projects: 'Projects', journey: 'Journey', experiences: 'Experience', contact: 'Contact' },
    switchLabel: 'Français',
    switchTitle: 'See the French version',
    portal: 'Back to the portal',
    menu: 'Menu',
    close: 'Close',
    footer: 'everything in its place.',

    home: {
      eyebrow: 'Personal file · 2026–2027',
      title: ['Intelligence without the power to act is helpless;', 'strength without intelligence', 'is dangerous.'],
      intro: 'After more than 10 years in the restaurant industry, in France and abroad (non-profits, institutional catering, hotel bars and fine-dining restaurants), working between 50 and 90 hours a week, I decided to retrain in computer science. How do I turn those years in such a different field into an asset? Through professional maturity and transferable skills: adaptability, creativity, curiosity and autonomy.',
      cta: 'View my projects',
      contact: 'Get in touch',
      next: 'Where to next?',
      caption: 'Victor',
      notes: {
        projects: (n) => `${n} projects, carefully filed`,
        journey: () => 'What I learned this year',
        experiences: (n) => `${n} experiences beyond the curriculum`,
        contact: () => 'One clear channel',
      },
    },
    projectsPage: {
      eyebrow: 'Section 01 · Completed work',
      title: 'Projects',
      intro: 'Each project, documented in the same way: where it started, what it aimed for, and what it taught me.',
      kicker: 'Unit ',
      context: 'Context',
      objective: 'Goal',
      skills: 'Skills',
      reflection: 'What I learned',
      code: 'Source code',
      demo: 'Demo',
      codeMissing: 'Code link coming soon',
      demoMissing: 'Demo link coming soon',
    },
    journeyPage: {
      eyebrow: 'Section 02 · Skills progress',
      title: 'My journey this year',
      next: 'Next objective',
    },
    experiencesPage: {
      eyebrow: 'Section 03 · Beyond the curriculum',
      title: 'Other experience',
      intro: 'Code is not the only place to learn. These experiences taught me to organize, adapt and work with others.',
    },
    contactPage: {
      eyebrow: 'Section 04 · Contact',
      title: 'Get in touch',
      intro: 'A question, a project, an internship? Send me a message and I will reply.',
      emailLabel: 'Email',
      cv: 'Download my CV (PDF)',
      formEmail: 'Your email address',
      formMessage: 'Message',
      submit: 'Write an email',
      subject: 'Message from my portfolio',
      bodyPrefix: 'My address: ',
    },

    projects: [
      {
        title: "Eclat d'art",
        context: 'Full-stack final project of my training',
        objective: 'Build a full-stack application that proves the skills learned during the course',
        skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Symfony', 'Teamwork', 'Autonomy', 'Resilience'],
        reflection: 'It let me discover new things and share them with exceptional teammates, and overcome challenges that, a few months earlier, seemed out of reach. All thanks to the power of friendship.',
        code: 'https://github.com/WildCodeSchool/2023-09-PHP-LYON-P3-eclat-d-art',
        demo: '',
      },
      {
        title: 'Name of a personal project',
        context: 'Explain what made you want to build this project.',
        objective: 'What result did you want?',
        skills: ['HTML', 'CSS', 'JavaScript', 'Accessibility'],
        reflection: 'Describe one difficulty and how you solved it.',
        code: '',
        demo: '',
      },
    ],

    journey: [
      'Since starting at Epitech, I have been discovering many languages and technologies. I know it takes time to master even one of these fields, so I am always looking to learn and try new ones. A diverse set of skills gives a better overall view and a more open mind when approaching different projects.',
    ],
    journeyNext: 'Alongside my studies, I am starting to work on a project close to my heart: building highly specialized virtual assistants trained on open-source data. The goal is to create “AIs” for specific tasks that run locally, to keep their environmental impact, and the sharing and circulation of data, as low as possible.',

    experiences: [
      {
        date: '2024',
        place: 'Non-profit',
        title: 'Atipik',
        detail: 'Organizing music events: choosing the line-up, bringing the artists to the venue, and setting up the sales points and live service.',
      },
      {
        date: '2021',
        place: 'Mama Shelter',
        title: 'Rooftop bar at Mama Shelter Lyon',
        detail: 'Set up the sales point: menu, equipment, supplies and staff.',
      },
    ],
  },
}
