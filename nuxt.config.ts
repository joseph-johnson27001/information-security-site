export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  app: {
    head: {
      title: "Information Security Site",
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Assistant:wght@300;400;600&family=Inter&family=Roboto:wght@300;400;500&family=Unica+One&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css",
          referrerpolicy: "no-referrer",
        },
        {
          rel: "icon",
          type: "image/png",
          href: "/dashboard-logo.png",
        },
      ],
    },
  },
});
