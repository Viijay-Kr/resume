/** @type {import('astro-i18next').AstroI18nextConfig} */

export default {
  supportedLanguages: ['en', 'de'],
  defaultLanguage: "en",
  i18next: {
    initImmediate: false,
    backend: {
      loadPath: "./src/locales/{{lng}}.json",
    },
  },
  i18nextPlugins: { fsBackend: "i18next-fs-backend" },
}