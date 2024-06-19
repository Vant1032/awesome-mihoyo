import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
// @ts-ignore
export default defineConfig({
  title: "miHoYo related content",
  description: "About Mihoyo",
  base: '/awesome-mihoyo/',

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
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
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
          { text: 'Honkai:Star Rail 崩坏：星穹铁道同人作品)', link: '/Honkai star rail content(崩坏：星穹铁道同人作品).md' },
          { text: 'ChineseCoser 中国Coser.md', link: '/ChineseCoser(中国Coser).md' },
          { text: 'Mihoyo CV 米哈游相关CV', link: '/Mihoyo CV(米哈游相关CV).md' },
          { text: 'Mihoyo official account 米哈游官方账号', link: '/Mihoyo official account(米哈游官方账号).md' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Vant1032/awesome-mihoyo' }
    ]
  },

})
