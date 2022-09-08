/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  supportedLanguages: ['en', 'de'],
  defaultLanguage: "en",
  i18next: {
    initImmediate: false,
    resources: {
      "en": {
        translation: {
          "header": {
            "title_1": "Hi there,",
            "title_2": "I'm Vijay",
            "subtitle_1": "I'm React Engineer",
            "subtitle_2": "and a open source enthusiast",
            "job_title": "Senior Software engineer",
            "company": "Quantilope GmbH, 📍Hamburg,Germany"
          },
          "navbar": {
            "about_me": "About me",
            "projects": "Projects",
            "experience": "Work Experience"
          },
          "about_me": {
            "info_1": "I am an enthusiastic FrontEnd Developer, passionate about User interfaces and User experiences with deep interest in programming and building software products that solves problems 🤓",
            "info_3": "I have over 6 years of experience in the field of Front end development and with good knowledge in",
            "skills": "Skills"
          },
          "and": "and"
        }
      },
      "de": {
        translation: {
          "header": {
            "title": "Hi",
            "title_2": "Ich bin Vijay",
            "subtitle_1": "Ich bin React Engineer",
            "subtitle_2": "und ein Open-Source-Enthusiast",
            "job_title": "Senior-Software-Entwickler",
            "company": "Quantilope GmbH, 📍Hamburg,Germany"
          },
          "navbar": {
            "about_me": "Über mich",
            "projects": "Projekte",
            "experience": "Berufserfahrung"
          },
          "about_me": {
            "info_1": "Ich bin ein begeisterter Frontend-Entwickler, der sich leidenschaftlich für Benutzeroberflächen und Benutzererfahrungen interessiert und ein tiefes Interesse an der Programmierung und Erstellung von Softwareprodukten hat, die Probleme lösen 🤓",
            "info_3": "Ich habe über 6 Jahre Erfahrung im Bereich Frontend-Entwicklung und mit guten Kenntnissen in",
            "skills": "Fähigkeiten"
          },
          "and": "and"
        }
      }
    },
  },
}