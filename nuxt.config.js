const axios = require("axios");
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  ssr: false,
  routes: () => {
    return axios.get(`my.own.api.com/getSitemapRoutes`);
  },
  server: {
    port: 3000,
    host: "0.0.0.0",
    timing: false,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: "en",
    },
    title: "Original thinking, research help add to human knowledge",
    titleTemplate: "PANAFRICANA | %s",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        hid: "description",
        name: "description",
        content:
          "PANAFRICANA was founded in 1992 to provide an in-depth study and analyses of the challenges of political stability, safety and development in Africa and propose policy options and strategies for these issues while synergizing the potentials of its Diaspora for executing these policies.",
      },

      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "summary_large_image",
      },
      { hid: "twitter:site", name: "twitter:site", content: "@panafstrag" },
      {
        hid: "twitter:url",
        name: "twitter:url",
        content: "https://panafstrag.netlify.app/",
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "PANAFRICANA official website",
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: "Original thinking, research help add to human knowledge",
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content:
          "https://res.cloudinary.com/marquis/image/upload/v1668940037/enagoshtazxadezqqjrj.png",
      },

      { hid: "og:site_name", property: "og:site_name", content: "PANAFRICANA" },
      { hid: "og:type", property: "og:type", content: "website" },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://panafstrag.netlify.app/",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "PANAFRICANA official website",
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "PANAFRICANA was founded in 1992 to provide an in-depth study and analyses of the challenges of political stability, safety and development in Africa and propose policy options and strategies for these issues while synergizing the potentials of its Diaspora for executing these policies.",
      },
      {
        hid: "og:image",
        property: "og:image",
        content:
          "https://res.cloudinary.com/marquis/image/upload/v1668940037/enagoshtazxadezqqjrj.png",
      },
      {
        hid: "og:image:secure_url",
        property: "og:image:secure_url",
        content:
          "https://res.cloudinary.com/marquis/image/upload/v1668940037/enagoshtazxadezqqjrj.png",
      },
      {
        hid: "og:image:alt",
        property: "og:image:alt",
        content: "PANAFRICANA",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap",
      },
    ],
    script: [
      {
        src: `https://www.googletagmanager.com/gtag/js?id=G-02WFDSB2TF`,
        async: true,
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/toastr.js", mode: "client" },
    { src: "@/plugins/aos", mode: "client" },
    "~/plugins/enlargeImage.js",
    {
      src: "~/plugins/tawk-messenger.client.js",
      mode: "client",
    },
    // {
    //   src: '~/plugins/vue-video-background',
    //   ssr: false
    // }
    // {
    //   src: "~/plugins/GoogleAnalytics.js",
    //   mode: "client",
    // },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxt/postcss8",
    "@nuxtjs/google-analytics",
  ],
  sweetalert: {
    confirmButtonColor: "#41b882",
    cancelButtonColor: "#ff7674",
  },
  googleAnalytics: {
    id: "G-02WFDSB2TF",
  },
  publicRuntimeConfig: {
    googleAnalytics: {
      id: "G-02WFDSB2TF",
    },
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      "nuxt-sweetalert2",
      {
        confirmButtonColor: "#000000",
      },
    ],
    "@nuxtjs/axios",
    "@nuxtjs/moment",
    "@nuxtjs/sitemap",
  ],
  sweetalert: {
    confirmButtonColor: "#41b882",
    cancelButtonColor: "#ff7674",
  },
  axios: {
    proxy: true,
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "https://panafstrag.onrender.com/api",
  },
  sitemap: {
    hostname: "https://panafstrag.netlify.app/",
    exclude: ["/admin/**", "/admin", "/login", "/otp-verification"],
    routes: async () => {
      let baseURL = "https://panafstrag.onrender.com/api";
      let { data } = await axios.get(`${baseURL}/panAfrica/board-member`);
      return data.map((eachBoardMember) => `/watch/${eachBoardMember._id}`);
    },
    path: "/sitemap.xml",
    cacheTime: 1000 * 60 * 60 * 2,
    trailingSlash: true,
    gzip: true,
    defaults: {
      changefreq: "daily",
      priority: 1,
      lastmod: new Date(),
    },
  },
  moment: {
    timezone: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
};
