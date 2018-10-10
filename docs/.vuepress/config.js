module.exports = {
  base: '/mpvue-weui/',
  dest: 'dist',
  title: 'mpvue-weui',
  description: '基于 mpvue 的 weui 框架',
  head: [
    ['link', {
      rel: 'icon',
      href: `/logo.ico`
    }]
  ],
  themeConfig: {
    repo: 'MPComponent/mpvue-weui',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '上次更新',
    nav: [{
        text: '首页',
        link: '/'
      },
      {
        text: '文档',
        link: '/guide/'
      }
    ],
    sidebar: [{
        title: '快速开始',
        collapsable: false,
        children: [
          ['guide/', '介绍'],
          'guide/install'
        ]
      }, {
        title: '表单组件',
        collapsable: false,
        children: [
          'formComponent/button',
          'formComponent/slider',
          'formComponent/uploader',
          'formComponent/switch',
          'formComponent/checkbox'
        ]
      }, {
        title: '基础组件',
        collapsable: false,
        children: [
          'baseComponent/badge',
          'baseComponent/grid',
          'baseComponent/rate',
          'baseComponent/loading',
          'baseComponent/toast'
        ]
      },
      {
        title: '操作反馈',
        collapsable: false,
        children: [
          'feedbackComponent/picker',
          'feedbackComponent/cityPicker',
          'feedbackComponent/datePicker',
          'feedbackComponent/actionsheet'
        ]
      }, {
        title: '导航相关',
        collapsable: false,
        children: [
          'navbarComponent/navbar'
        ]
      },
      {
        title: '搜索相关',
        collapsable: false,
        children: [
          'searchbarComponent/searchbar'
        ]
      }
    ]
  }
};
