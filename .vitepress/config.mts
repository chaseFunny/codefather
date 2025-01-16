import { defineConfig } from 'vitepress'
import themeNavConfig from './config/nav'

const author = "程序员鱼皮";
const domain = "https://codefather.cn";
const tags = ["程序员", "编程", "计算机"];
const description = "贴心的编程学习路线，全面的编程知识百科"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "鱼皮的编程宝典",
  description,
  // 启用最后更新时间
  lastUpdated: true,
  // 可以自定义 seo
  // transformHead: function () { },
  head: [
    // 站点图标
    ["link", { rel: "icon", href: "/favicon.ico" }],
    // 设置全局的 keywords meta 标签
    ['meta', { name: 'keywords', content: '程序员鱼皮, 编程学习路线, 编程知识百科, Java, 编程导航, 前端, 开发, 编程分享, 项目, IT, 求职, 面经' }],
    // 其他全局 meta 标签
    ['meta', { name: 'author', content: author }],
    ['meta', { name: 'description', content: description }],
    // 添加百度统计代码
    [
      "script",
      {},
      `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?2675818a983a3131404cee835018f016";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();
      `,
    ],
  ],
  // 主题配置
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: themeNavConfig,
    // lang: 'zh-CN',
    // siteTitle: '鱼皮的编程宝典 - cc',
    logo: '/logo.png',

    sidebar: [
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/liyupi/codefather' }
    ],
    footer: {}
  },
  // markdown: {
  //   config: (md) => {
  //     md.use((md) => {
  //       // 自定义插件逻辑
  //       md.inline.ruler.before('escape', 'custom_escape', (state, silent) => {
  //         const start = state.pos
  //         const marker = state.src.charCodeAt(start)

  //         if (marker !== 0x3C /* < */) return false

  //         const match = state.src.slice(start).match(/^<T>/)
  //         if (!match) return false

  //         if (!silent) {
  //           state.push({
  //             type: 'text',
  //             level: state.level,
  //             content: match[0]
  //           })
  //         }

  //         state.pos += match[0].length
  //         return true
  //       })
  //     })
  //   }
  // }
})
