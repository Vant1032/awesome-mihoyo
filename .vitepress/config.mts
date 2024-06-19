import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "miHoYo related content",
  description: "About Mihoyo: miHoYo Fan-made content collection, Genshin Impact Fan-made content collection, Honkai: Star Rail Fan-made content collection, | 包含大量米哈游旗下游戏的二创内容：原神二创、崩坏星穹铁道二创、米哈游最全的官方账号整理",
  base: '/awesome-mihoyo/',
  sitemap: {
    hostname: 'https://vant1032.github.io/awesome-mihoyo/'
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
      { text: 'Genshin Impact', link: '/README.md' }
    ],

    sidebar: [
      {
        text: 'Collections',
        items: [
          { text: 'Genshin Impact 原神', link: '/README.md' },
          { text: 'Honkai:Star Rail 崩坏：星穹铁道同人作品)', link: '/HonkaiStarRailContent(崩坏：星穹铁道同人作品).md' },
          { text: 'ChineseCoser 中国Coser.md', link: '/ChineseCoser(中国Coser).md' },
          { text: 'Mihoyo CV 米哈游相关CV', link: '/MihoyoCV(米哈游相关CV).md' },
          { text: 'Mihoyo official account 米哈游官方账号', link: 'MihoyoOfficialAccount(米哈游官方账号).md' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Vant1032/awesome-mihoyo' }
    ]
  },

})