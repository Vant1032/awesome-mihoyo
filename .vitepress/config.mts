import { defineConfig } from 'vitepress'


function vercelOrNot(vercelVal, defaultVal) {
  // @ts-ignore
  if (process.env.VERCEL_ENV === 1) {
    return vercelVal;
  }
  return defaultVal;
}
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "miHoYo related content",
  description: "About Mihoyo: miHoYo Fan-made content collection, Genshin Impact Fan-made content collection, Honkai: Star Rail Fan-made content collection, | 包含大量米哈游旗下游戏的二创内容：原神二创、崩坏星穹铁道二创、米哈游最全的官方账号整理",
  base: vercelOrNot('/', '/awesome-mihoyo/'),
  sitemap: {
    hostname: vercelOrNot('https://awesome-mihoyo.vercel.app/', 'https://vant1032.github.io/awesome-mihoyo/'),
  },

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
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Genshin Impact', link: '/README.md' },
      { text: 'Honkai:Star Rail', link: '/HonkaiStarRailContent(崩坏：星穹铁道同人作品).md' },
      { text: 'ZenlessZoneZero', link: '/ZenlessZoneZero(绝区零).md' },
    ],

    sidebar: [
      {
        text: 'Collections',
        items: [
          { text: 'miHoYo Official Account 米哈游官方账号', link: '/MihoyoOfficialAccount(米哈游官方账号).md' },
          { text: 'Genshin Impact 原神', link: '/README.md' },
          { text: 'Honkai:Star Rail 崩坏：星穹铁道同人作品)', link: '/HonkaiStarRailContent(崩坏：星穹铁道同人作品).md' },
          { text: 'ZenlessZoneZero 绝区零', link: '/ZenlessZoneZero(绝区零).md' },
          { text: 'ChineseCoser 中国Coser', link: '/ChineseCoser(中国Coser).md' },
          { text: 'Mihoyo CV 米哈游相关CV', link: '/MihoyoCV(米哈游相关CV).md' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Vant1032/awesome-mihoyo' }
    ]
  },

})
