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
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/plyr/3.7.8/plyr.css",
          integrity:
            "sha512-yexU9hwne3MaLL2PG+YJDhaySS9NWcj6z7MvUDSoMhwNghPgXgcvYgVhfj4FMYpPh1Of7bt8/RK5A0rQ9fPMOw==",
          crossorigin: "anonymous",
          referrerpolicy: "no-referrer",
        },
      ],
      script: [
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.min.js",
          integrity:
            "sha512-3dZ9wIrMMij8rOH7X3kLfXAzwtcHpuYpEgQg1OA4QAob1e81H8ntUQmQm3pBudqIoySO5j0tHN4ENzA6+n2r4w==",
          crossorigin: "anonymous",
        },
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/plyr/3.7.8/plyr.min.js",
          crossorigin: "anonymous",
          integrity:
            "sha512-vONptKEoKbP1gaC5UkbYDa9OPr04ur4bxaaqT7DAJxGHB2oogtseCPrl5e5hPFokGYotlGNV4d+GM593ka7iNA==",
          referrerpolicy: "no-referrer",
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
  ssr: false,
});
