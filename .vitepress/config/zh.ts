import { defineConfig, type DefaultTheme } from "vitepress";

export const zh = defineConfig({
  lang: "zh",

  title: "米哈游二创收藏夹",
  description:
    "收集整理大量米哈游旗下游戏的二创内容，包括《原神》《崩坏：星穹铁道》《绝区零》二创内容等和米哈游官方账号整理。",

  themeConfig: {
    nav: nav(),

    sidebar: sidebar(),

    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    outline: {
      label: "页面导航",
    },

    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },

    langMenuLabel: "多语言",
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",

    editLink: {
      pattern: "https://github.com/Vant1032/awesome-mihoyo/blob/master/:path",
      text: "在 Github 上编辑此页",
    },
  },
});

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: "主页", link: "/" },
    { text: "原神", link: "/README.md" },
    {
      text: "崩坏：星穹铁道",
      link: "/HonkaiStarRailContent(崩坏：星穹铁道同人作品).md",
    },
    { text: "绝区零", link: "/ZenlessZoneZero(绝区零).md" },
  ];
}

function sidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "分类",
      items: [
        {
          text: "米哈游官方账号",
          link: "/MihoyoOfficialAccount(米哈游官方账号).md",
        },
        { text: "原神", link: "/README.md" },
        {
          text: "崩坏：星穹铁道",
          link: "/HonkaiStarRailContent(崩坏：星穹铁道同人作品).md",
        },
        {
          text: "绝区零",
          link: "/ZenlessZoneZero(绝区零).md",
        },
        {
          text: "Coser",
          link: "/ChineseCoser(中国Coser).md",
        },
        {
          text: "相关CV（配音演员）",
          link: "/MihoyoCV(米哈游相关CV).md",
        },
      ],
    },
  ];
}

export const search: DefaultTheme.LocalSearchOptions["locales"] = {
  zh: {
    translations: {
      button: {
        buttonText: "搜索文档",
        buttonAriaLabel: "搜索文档",
      },
      modal: {
        displayDetails: "显示详细列表",
        resetButtonTitle: "重置搜索",
        backButtonTitle: "关闭搜索",
        noResultsText: "没有结果",
        footer: {
          selectText: "选择",
          selectKeyAriaLabel: "输入",
          navigateText: "导航",
          navigateUpKeyAriaLabel: "上箭头",
          navigateDownKeyAriaLabel: "下箭头",
          closeText: "关闭",
          closeKeyAriaLabel: "esc",
        },
      },
    },
  },
};
