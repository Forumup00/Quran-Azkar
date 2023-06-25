// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Quran-Azkar",
      htmlAttrs: {
        dir: "rtl",
        lang: "ar",
      },
      meta: [
        {
          name: "description",
          content: "description",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          charset: "UTF-8",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css",
          integrity:
            "sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==",
          crossorigin: "anonymous",
          referrerpolicy: "no-referrer",
        },
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
      ],
      script: [
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.min.js",
          integrity:
            "sha512-3dZ9wIrMMij8rOH7X3kLfXAzwtcHpuYpEgQg1OA4QAob1e81H8ntUQmQm3pBudqIoySO5j0tHN4ENzA6+n2r4w==",
          crossorigin: "anonymous",
        },
      ],
    },
  },
  css: [
    "~/node_modules/bootstrap/dist/css/bootstrap.min.css",
    "~/assets/css/style.css",
  ],
  modules: ["@pinia/nuxt"],
  alias: {
    assets: "/<rootDir>/assets",
  },
});
