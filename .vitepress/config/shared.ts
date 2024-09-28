import { defineConfig } from "vitepress";
import { search as enSearch } from "./en";
import { search as zhSearch } from "./zh";

function env(vercelVal: any, cloudflareVal: any, defaultVal: any) {
  // @ts-ignore
  if (process.env.VERCEL_ENV == 1) {
    return vercelVal;
    // @ts-ignore
  } else if (process.env.CLOUDFLARE_ENV == 1) {
    return cloudflareVal;
  }
  return defaultVal;
}

export const shared = defineConfig({
  base: env("/", "/", "/awesome-mihoyo/"),

  lastUpdated: true,
  cleanUrls: true,
  ignoreDeadLinks: true,
  metaChunk: true,

  sitemap: {
    hostname: env(
      "https://awesome-mihoyo.vercel.app/",
      "https://awesome-mihoyo.pages.dev/",
      "https://vant1032.github.io/awesome-mihoyo/"
    ),
  },

  head: [
    [
      "script",
      {
        async: "",
        src: "https://www.googletagmanager.com/gtag/js?id=G-G2QJKJ9C6H",
      },
    ],
    [
      "script",
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-G2QJKJ9C6H');`,
    ],
    [
      "meta",
      {
        name: "baidu-site-verification",
        content: "codeva-NRguDBtg3N",
      },
    ],
  ],

  themeConfig: {
    search: {
      provider: "local",
      options: {
        detailedView: true,
        translations: zhSearch?.zh.translations,
        locales: {
          ...enSearch,
        },
      },
    },

    outline: {
      level: "deep",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/Vant1032/awesome-mihoyo" },
    ],

    editLink: {
      pattern: "https://github.com/Vant1032/awesome-mihoyo/blob/master/:path",
    },
  },
});
