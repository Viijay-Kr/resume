/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  supportedLanguages: ["en", "de"],
  defaultLanguage: "en",
  i18next: {
    initImmediate: false,
    resources: {
      en: {
        translation: {
          header: {
            title_1: "Hi there,",
            title_2: "I'm Vijay",
            subtitle_1: "I'm React Engineer",
            subtitle_2: "and a open source enthusiast",
            job_title: "Senior FrontEnd Developer",
            company: "Quantilope GmbH, 📍Hamburg,Germany",
          },
          navbar: {
            about_me: "About me",
            projects: "Open Source Projects",
            experience: "Work History",
          },
          about_me: {
            info_1:
              "I am an enthusiastic FrontEnd Developer, passionate about User interfaces and User experiences with deep interest in programming and building software products that solves problems 🤓",
            info_3:
              "I have over 6 years of experience in Front end development with good knowledge in",
            info_4:
              "Constantly trying to improve my and my colleagues developer experience ⚒️.",
            info_5: "Currently trying to contribute to VSCode",
            skills: "Skills",
          },
          and: "and",
          experience: {
            quantilope: {
              company_name: "Quantilope GmbH, Hamburg,Germany",
              role_1:
                "At Quantilope , I play an integral role in helping the market research industry by developing cutting end Consumer anytime user interface platform.",
              role_2:
                "I work with a team of Backend and Front end developers who are experts in Typescript , React and Node JS. We together as a team are responsible for Data Acquisition and Data Quality platform of Quantilope.Our mission as a team is to improve the market research platform by providing  cutting edge user interfaces that makes surveys more playful and inspiring to fill",
              role_3:
                "I am responsible for developing and maintaining the new Survey application which is state of the art and actively trying to better our competitors such as Typeform , SurveyMonkey and PollFish. I work closely with designers and provide valuable feasbility feedback by judging the level of front end work that would be needed to develop the design into a usable software application",
              achievement_1: "Laying out a Style System using SASS",
              achievement_2:
                "Integration of Chromatic to acheive 100% visual testing",
              achievement_3:
                "Component System that scales well with incoming product requirements",
              achievement_4:
                "Built a VS code extension to improve the DX in the team",
            },
            about_you: {
              company_name: "About You GmBH, Hamburg Germany",
              role_1:
                "I started as Intermediate Front end software developer ,focusing on React Native and helped the company build their React Native Version of Mobile APP.",
              role_2:
                "I got the opportunity to lead the Mobile web shop team which consisted of four amazing front end developers. I led a team of four front end developers across various projects working closely with the product manager and technical lead",
              role_3: "Some of the projects that I worked on are as follows",
              role_4: "1. AY 6.0 - A complete redesign of the Shop.",
              role_5:
                "2. Native Account Area - A whole new native account experience for our customers.",
              role_6:
                "3. Google Optimize Integration - A project related to improve our AB test capabilities",
              achievement_1:
                "Graph QL POC - Proof of concept to bring GraphQL architecture.",
              achievement_2: "GRPC integration into web.",
              achievement_3:
                "Analaytics integration with Optimizely and Google Optimize 360.",
            },
            razorthink: {
              company_name: "Razorthink, Bangalore India",
              role_1:
                "Being the core member of the front end team , I helped Razorthink to build their Customer facing application using React, Redux, and redux-saga.",
              role_2:
                "I contributed in setting up the Development environment and Git workflow for releases and Architecture changes",
              role_3:
                "I explored all possible solutions for a problem and solve them more precisely.I oversaw the potential risks and improvements in the codebase and helped overcome them.",
              achievement_1:
                "Used a 🤓 smart rendering approach to render tabular data containing 1000 rows using React virtualized list",
              achievement_2:
                "Jupyter notebook integration with semantic errors and syntax highlighting",
              achievement_3:
                "Lazy loading of dependencies such as Reducers, Redux Sags and Modules",
            },
            cmango: {
              company_name: "Cartoon Mango Studios, Bangalore India",
              role_1:
                "Being a Junior developer, I managed to work on projects independently focusing on client requirements.",
              role_2:
                "Developed Complex web applications that involved working with Canvas and SVG",
              role_3:
                "Worked in a self managed project called Caselets. Caselets was a incubator start up which planned to help businesses show case their Research and Field work . I teamed with the founder and helped him set up a the whole project using Firebase and React",
              achievement_3: "I began my React JS Journey",
              achievement_2:
                "Gained more passiong towards front end development",
              achievement_1:
                "Worked as a consultant for cleartip.com where I learned about scalable systems used by millions of daily users",
            },
          },
        },
      },
      de: {
        translation: {
          header: {
            title: "Hi",
            title_2: "Ich bin Vijay",
            subtitle_1: "Ich bin React Engineer",
            subtitle_2: "und ein Open-Source-Enthusiast",
            job_title: "Senior-Software-Entwickler",
            company: "Quantilope GmbH, 📍Hamburg,Germany",
          },
          navbar: {
            about_me: "Über mich",
            projects: "Projekte",
            experience: "Berufserfahrung",
          },
          about_me: {
            info_1:
              "Ich bin ein begeisterter Frontend-Entwickler, der sich leidenschaftlich für Benutzeroberflächen und Benutzererfahrungen interessiert und ein tiefes Interesse an der Programmierung und Erstellung von Softwareprodukten hat, die Probleme lösen 🤓",
            info_3:
              "Ich habe über 6 Jahre Erfahrung im Bereich Frontend-Entwicklung und mit guten Kenntnissen in",
            skills: "Fähigkeiten",
          },
          and: "and",
        },
      },
    },
  },
};
