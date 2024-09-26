import { defineConfig } from 'vitepress';


function env(vercelVal, cloudflareVal, defaultVal) {
  // @ts-ignore
  if (process.env.VERCEL_ENV == 1) {
    return vercelVal;
    // @ts-ignore
  } else if (process.env.CLOUDFLARE_ENV == 1) {
    return cloudflareVal;
  }
  return defaultVal;
}
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "miHoYo Fan Art",
  titleTemplate: 'miHoYo Fan Art - 米哈游原神、崩坏：星穹铁道、绝区零二创相关',
  description: "包含大量米哈游旗下游戏的二创内容：原神二创、崩坏星穹铁道二创、米哈游最全的官方账号整理",
  base: env('/',  '/','/awesome-mihoyo/'),
  sitemap: {
    hostname: env('https://awesome-mihoyo.vercel.app/', 'https://awesome-mihoyo.pages.dev/', 'https://vant1032.github.io/awesome-mihoyo/'),
  },
  head: [
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-G2QJKJ9C6H' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-G2QJKJ9C6H');`
    ],
    [
      'meta',
      {
        name: 'baidu-site-verification', content: 'codeva-NRguDBtg3N'
      }
    ]
  ],
  themeConfig: {
    search: {
      provider: 'local',
      options: {
        detailedView: true,
      }
    },
    outline: {
      level: "deep",
    },
    lastUpdated: {
      text: 'Updated at',
    },
    // https://vitepress.dev/reference/default-theme-config
  
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Vant1032/awesome-mihoyo' }
    ]
  },

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
          { text: '原神', link: '/README.md' },
          { text: '崩坏：星穹铁道', link: '/HonkaiStarRailContent(崩坏：星穹铁道同人作品).md' },
          { text: '绝区零', link: '/ZenlessZoneZero(绝区零).md' },
        ],
  
        sidebar: [
          {
            text: '分类',
            items: [
              { text: '米哈游官方账号', link: '/MihoyoOfficialAccount(米哈游官方账号).md' },
              { text: '原神', link: '/README.md' },
              { text: '崩坏：星穹铁道', link: '/HonkaiStarRailContent(崩坏：星穹铁道同人作品).md' },
              { text: '绝区零', link: '/ZenlessZoneZero(绝区零).md' },
              { text: 'Coser', link: '/ChineseCoser(中国Coser).md' },
              { text: '相关CV（配音演员）', link: '/MihoyoCV(米哈游相关CV).md' },
            ]
          }
        ]
      }
    },
    en: {
      label: 'English',
      lang: 'en',
      title: 'miHoYo Fan Art',
      titleTemplate: 'miHoYo Fan Art - miHoYo Genshin Impact, Honkai: Star Rail, Zenless Zone Zero Fan Art',
      description: 'About miHoYo: miHoYo Fan-made or Fan art content collection, Genshin Impact Fan-made content collection, Honkai: Star Rail Fan-made content collection.',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en' },
          { text: 'Genshin Impact', link: '/en/README.md' },
          { text: 'Honkai: Star Rail', link: '/en/HonkaiStarRailContent(崩坏：星穹铁道同人作品)' },
          { text: 'Zenless Zone Zero', link: '/en/ZenlessZoneZero(绝区零)' },
        ],
  
        sidebar: [
          {
            text: 'Collections',
            items: [
              { text: 'miHoYo Official Accounts', link: '/en/MihoyoOfficialAccount(米哈游官方账号).md' },
              { text: 'Genshin Impact', link: '/en/README.md' },
              { text: 'Honkai: Star Rail', link: '/en/HonkaiStarRailContent(崩坏：星穹铁道同人作品).md' },
              { text: 'ZenlessZoneZero', link: '/en/ZenlessZoneZero(绝区零).md' },
              { text: 'Cosplayers (CN Community)', link: '/en/ChineseCoser(中国Coser).md' },
              { text: 'miHoYo-related VAs (CN Voice)', link: '/en/MihoyoCV(米哈游相关CV).md' },
            ]
          }
        ]
      }
    }
  }

})
