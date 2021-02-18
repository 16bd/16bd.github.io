module.exports = {
  "title": "一流摆渡",
  "description": "吾闻宥坐之器，虚则欹，中则正，满则覆，明君以为至诫，故常置之于坐侧。",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "Linux",
        "link": "/categories/linux/",
        "icon": "reco-document"
      },
      {
        "text": "Docker",
        "link": "/categories/docker/",
        "icon": "reco-blog"
      },
      {
        "text": "DotNetCore",
        "link": "/categories/dotnetcore/",
        "icon": "reco-api"
      },
      {
        "text": "Other",
        "link": "/categories/other/",
        "icon": "reco-message"
      },
      {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      //{
      //  "text": "Docs",
      //  "icon": "reco-message",
      //  "items": [
      //    {
      //      "text": "vuepress-reco",
      //      "link": "/docs/theme-reco/"
      //    }
      //  ]
      //},
      //{
      //  "text": "Contact",
      //  "icon": "reco-message",
      //  "items": [
      //    {
      //      "text": "GitHub",
      //      "link": "https://github.com/recoluan",
      //      "icon": "reco-github"
      //    }
      //  ]
      //}
    ],
    //"sidebar": {
    //  "/docs/theme-reco/": [
    //    "",
    //    "theme",
    //    "plugin",
    //    "api"
    //  ]
    //},
    "type": "blog",
    "blogConfig": {
      //"category": {
      //  "location": 2,
      //  "text": "分类"
      //},
      "tag": {
        "location": 6,
        "text": "标签"
      }
    },
    //"friendLink": [
    //  {
    //    "title": "午后南杂",
    //    "desc": "Enjoy when you can, and endure when you must.",
    //    "email": "1156743527@qq.com",
    //    "link": "https://www.recoluan.com"
    //  },
    //  {
    //    "title": "vuepress-theme-reco",
    //    "desc": "A simple and beautiful vuepress Blog & Doc theme.",
    //    "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
    //    "link": "https://vuepress-theme-reco.recoluan.com"
    //  }
    //],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "16bd",
    "authorAvatar": "/avatar.png",
    //"record": "一流摆渡",
    "startYear": "2020"
  },
  "markdown": {
    "lineNumbers": true
  }
}