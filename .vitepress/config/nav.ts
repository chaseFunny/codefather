import type { DefaultTheme } from "vitepress";

// 直接使用 NavItem 类型
type NavItem = DefaultTheme.NavItem

export default [
  {
    text: "学习路线",
    link: '/学习路线/'
  },
  {
    text: "自学之路",
    link: "/自学之路/",
    items: [
      {
        text: "大学经历", link: "/自学之路/#大学经历",
      },
      {
        text: "求职经历", link: "/自学之路/#求职经历",
      },
      {
        text: "职场工作", link: "/自学之路/#职场工作",
      },
      {
        text: "创作经历", link: "/自学之路/#创作经历",
      },
      {
        text: "创业经历", link: "/自学之路/#创业经历",
      },
      {
        text: "生活日常", link: "/自学之路/#生活日常",
      },

    ]
  },
  {
    text: "编程分享",
    link: '/编程分享/',
    items: [
      {
        text: "入门必看-学习路线", link: "/编程分享/#入门必看-学习路线",
      },
      {
        text: "学习指南", link: "/编程分享/#学习指南",
      },
      {
        text: "开发经验", link: "/编程分享/#开发经验",
      },
      {
        text: "求职经验", link: "/编程分享/#求职经验",
      },
      {
        text: "职场经验", link: "/编程分享/#职场经验",
      },
      {
        text: "技术分享", link: "/编程分享/#技术分享",
      },
      {
        text: "实战教程", link: "/编程分享/#实战教程",
      },
      {
        text: "其他", link: "/编程分享/#其他",
      },
      {
        text: "项目教程", link: "/编程分享/#📚-项目教程",
      },
      {
        text: "个人作品", link: "/编程分享/#个人作品",
      },

      {
        text: "编程资源", link: "/编程分享/#🎁-编程资源",
      },

      {
        text: "科技科普", link: "/编程分享/#🌐-科技科普",
      },


    ]
  },
  {
    text: "高频面试题",
    link: '/高频面试题/Java 基础面试题/',
    items: [
      {
        text: "Java 基础面试题", link: "/高频面试题/Java 基础面试题/",
      },
      {
        text: "Java 并发面试题", link: "/高频面试题/Java 并发面试题/",
      },
      {
        text: "Java 集合面试题", link: "/高频面试题/Java 集合面试题/",
      },
    ]
  },
  {
    text: "项目实战",
    link: '/项目实战/'
  },
  {
    text: "🔥 编程导航",
    link: '/编程导航/'
  },
  {
    text: "技术知识",
    link: '/知识碎片/'
  },
  {
    text: "Bug手册",
    link: '/Bug手册/'
  },
  {
    text: "实用工具",
    link: '/产品服务/'
  },
  {
    text: "作者",
    link: '/作者/'
  },
] as NavItem[];