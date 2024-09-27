import { defineConfig, type DefaultTheme } from "vitepress";

export const en = defineConfig({
  lang: "en",

  title: "miHoYo Fan Art",
  titleTemplate: 'miHoYo Fan Art - Genshin Impact,Honkai:Star Rail、Zenless Zone Zero Fan art',
  description:
    "About miHoYo: miHoYo Fan-made or Fan art content collection, Genshin Impact Fan-made content collection, Honkai: Star Rail Fan-made content collection.",

  themeConfig: {
    nav: nav(),

    sidebar: sidebar(),
  },
});

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: "Home", link: "/en" },
    { text: "Genshin Impact", link: "/en/README.md" },
    {
      text: "Honkai: Star Rail",
      link: "/en/HonkaiStarRailContent(崩坏：星穹铁道同人作品)",
    },
    {
      text: "Zenless Zone Zero",
      link: "/en/ZenlessZoneZero(绝区零)",
    },
  ];
}

function sidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Collections",
      items: [
        {
          text: "miHoYo Official Accounts",
          link: "/en/MihoyoOfficialAccount(米哈游官方账号).md",
        },
        { text: "Genshin Impact", link: "/en/README.md" },
        {
          text: "Honkai: Star Rail",
          link: "/en/HonkaiStarRailContent(崩坏：星穹铁道同人作品).md",
        },
        {
          text: "ZenlessZoneZero",
          link: "/en/ZenlessZoneZero(绝区零).md",
        },
        {
          text: "Cosplayers (CN Community)",
          link: "/en/ChineseCoser(中国Coser).md",
        },
        {
          text: "miHoYo-related VAs (CN Voice)",
          link: "/en/MihoyoCV(米哈游相关CV).md",
        },
      ],
    },
  ];
}

export const search: DefaultTheme.LocalSearchOptions["locales"] = {
  en: {
    translations: {
      button: {
        buttonText: "Search",
        buttonAriaLabel: "Search",
      },
      modal: {
        displayDetails: "Display detailed list",
        resetButtonTitle: "Reset search",
        backButtonTitle: "Close search",
        noResultsText: "No results for",
        footer: {
          selectText: "to select",
          selectKeyAriaLabel: "enter",
          navigateText: "to navigate",
          navigateUpKeyAriaLabel: "up arrow",
          navigateDownKeyAriaLabel: "down arrow",
          closeText: "to close",
          closeKeyAriaLabel: "escape",
        },
      },
    },
  },
};
