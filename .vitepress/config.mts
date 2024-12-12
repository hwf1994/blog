import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "我的博客",
  description: "我的技术博客 ,博客,萧寂,萧寂博客,牛马人的博客,IT学习,java,前端,nodejs,vue,react",
  head: [
    ["link", { rel: "icon", href: "/img.jpg" }],
    ["meta", { name: "referrer", content: "no-referrer" }],
    [
      "meta",
      {
        name: "keywords",
        content:
          "博客,前端,IT学习,java,前端,nodejs,vue,react,低代码,小程序",
      },
    ],
  ],
  base: '/blog/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    carbonAds: {
      code: 'your-carbon-code',
      placement: 'your-carbon-placement'
    }
  }
})
