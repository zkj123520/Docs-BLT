import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/Docs-BLT/",
  head: [["link", { rel: "icon",base: "/Docs-BLT/", href: "/iconlogo.svg" }]],
  title: "与亲友的便捷文档",
  description: "A VitePress Site",
  themeConfig: {
    logo: '/bilibili.png',
    // https://vitepress.dev/reference/default-theme-config

   // 设置搜索框的样式
   search: {
    provider: "local",
    options: {
      translations: {
        button: {
          buttonText: "搜索文档",
          buttonAriaLabel: "搜索文档",
        },
        modal: {
          noResultsText: "无法找到相关结果",
          resetButtonTitle: "清除查询条件",
          footer: {
            selectText: "选择",
            navigateText: "切换",
          },
        },
      },
    },
  },

    nav: [
      { text: '首页', link: '/' },
      { text: '使用文档', link: '/about-BLT/Warning'},
      { text: '联系作者', link: '/other/chat-with-us'}
    ],

    sidebar: [
      {
        text: '关于BLT',
        items: [
          { text: '警告', link: '/about-BLT/Warning'},
          { text: '这是什么', link: '/about-BLT/what_is_this'}
        ]
      },
      {
        text: '使用BLT',
        items: [
          { text: '什么是BLT Site 购票辅助系统', link: '/use-BLT/what_is_BLT'},
          { text: '如何获取', link: '/use-BLT/how_to_get'},
          { text: '使用引导', link: '/use-BLT/user-guide'},
          { text: '抢票秘籍与多开模式指南', link: '/use-BLT/multi_open_mode_guide'},
          { text: '进阶玩法', link: '/use-BLT/advanced_play'},
          { text: '隐私安全', link: '/use-BLT/privacy-security'},
          { text: '代理服务', link: '/use-BLT/proxy-service'}
        ]
      },
      {
        text: '用户协议与用户隐私条款',
        items: [
          { text: 'BLT Site 隐私条款', link: '/user-policy/Privacy_Policy'},
          { text: 'BLT Site 用户最终许可协议(BLT Site EULA)', link: '/user-policy/user-agreement'},
        ]
      },
      {
        text: '其他',
        items: [
          { text: '常见问题', link: '/other/use_faq'},
          { text: '更新日志', link: '/other/update-log'},
          { text: '联系作者', link: '/other/chat-with-us'}
        ]

      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zkj123520' }
    ],
    footer: {
      message: 'Released under the MIT License.'
    }
  }
})
