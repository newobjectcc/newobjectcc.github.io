(window.webpackJsonp=window.webpackJsonp||[]).push([[12,31],{352:function(t,s,a){},355:function(t,s,a){},356:function(t,s,a){"use strict";a(352)},359:function(t,s,a){"use strict";a.r(s);var i={props:{sidebar:{type:Boolean,default:!1}},computed:{year:()=>(new Date).getFullYear()}},e=(a(356),a(0)),r=Object(e.a)(i,(function(){var t=this,s=t._self._c;return s("div",{class:t.sidebar?"footer-wrapper footer-adapt":"footer-wrapper"},[t._m(0),t._v(" "),t.$themeConfig.record?s("span",[s("i",{staticClass:"iconfont reco-beian"}),t._v(" "),s("a",{attrs:{target:"blank",href:"http://beian.miit.gov.cn"}},[t._v(t._s(t.$themeConfig.record))])]):t._e(),t._v(" "),s("span",[s("i",{staticClass:"iconfont reco-copyright"}),t._v(" "),s("a",[t.$themeConfig.startYear?s("span",[t._v(t._s(t.$themeConfig.startYear)+" - ")]):t._e(),t._v("\n      "+t._s(t.year)+" newobject.cc\n    ")])]),t._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:void 0!==t.$themeConfig.valineConfig,expression:"$themeConfig.valineConfig !== undefined"}]},[s("i",{staticClass:"iconfont reco-eye"}),t._v(" "),s("AccessNumber",{attrs:{idVal:"/"}})],1),t._v(" "),s("div",{staticClass:"other-info"},[t.$themeConfig.footerWeChat?s("img",{attrs:{src:t.$withBase(t.$themeConfig.footerWeChat),alt:"公众号「NO编程」",title:"公众号「NO编程」"}}):t._e()])])}),[function(){var t=this._self._c;return t("span",[t("i",{staticClass:"iconfont reco-theme"}),this._v(" "),t("a",{attrs:{target:"blank",href:"https://vuepress-theme-reco.recoluan.com"}},[this._v("vuepress-theme-reco")])])}],!1,null,"acb96f76",null);s.default=r.exports},369:function(t,s,a){"use strict";a(355)},425:function(t,s,a){},460:function(t,s,a){"use strict";a(425)},488:function(t,s,a){"use strict";a.r(s);a(8),a(50);var i=a(381),e=a(359);const r=["#FF6B6B","#4ECDC4","#45B7D1","#96CEB4","#FFEEAD","#A594F9","#7ECEFD","#FFA577","#B692FE"];var v={name:"ToolJSON",components:{Common:i.default,Footer:e.default},data:()=>({}),mounted(){this.setDynamicColors()},methods:{setDynamicColors(){this.$el.querySelectorAll(".imgInfo").forEach(t=>{if(t.querySelector("img"))return;const s=t.textContent.trim().charAt(0).charCodeAt(0)%r.length;t.style.backgroundColor=r[s],t.style.color=this.getContrastColor(r[s])})},getContrastColor:t=>(299*parseInt(t.substr(1,2),16)+587*parseInt(t.substr(3,2),16)+114*parseInt(t.substr(5,2),16))/1e3>=128?"#000":"#fff"}},c=(a(369),a(460),a(0)),l=Object(c.a)(v,(function(){var t=this,s=t._self._c;return s("div",[s("Common",{attrs:{sidebar:!1,isComment:!1}},[s("div",{staticClass:"nav-card-wrapper"},[s("h4",[s("span",{staticClass:"nav-title"},[t._v("编程相关")])]),t._v(" "),s("div",{staticClass:"nav-card-row"},[s("div",{staticClass:"nav-body"},[s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/",target:"_blank"}},[s("div",{staticClass:"nav-card"},[s("div",{staticClass:"url-img"},[s("img",{attrs:{src:"/assets/webnav/MDN.png",height:"auto",width:"auto"}})]),t._v(" "),s("div",{staticClass:"url-info"},[s("p",{staticClass:"text title"},[t._v("MDN")]),t._v(" "),s("p",{staticClass:"text desc"},[t._v("\n                                    Mozilla 基金会的开发者平台\n                                    "),s("span",{staticClass:"tooltip"},[t._v("MDN 是 Mozilla 基金会的开发者平台。提供大量 HTML、CSS 和 JS 的文档以及参考资料。")])])])])])]),t._v(" "),s("div",{staticClass:"nav-body"},[s("a",{attrs:{href:"https://www.github.com",target:"_blank"}},[s("div",{staticClass:"nav-card"},[s("div",{staticClass:"url-img"},[s("img",{attrs:{src:"/assets/webnav/github.svg",height:"auto",width:"auto"}})]),t._v(" "),s("div",{staticClass:"url-info"},[s("p",{staticClass:"text title"},[t._v("GitHub")]),t._v(" "),s("p",{staticClass:"text desc"},[t._v("基于 Git 的代码托管和协作开发平台")])])])])]),t._v(" "),s("div",{staticClass:"nav-body"},[s("a",{attrs:{href:"https://nodejs.org/zh-cn",target:"_blank"}},[s("div",{staticClass:"nav-card"},[s("div",{staticClass:"url-img"},[s("img",{attrs:{src:"/assets/webnav/nodejs.png",height:"auto",width:"auto"}})]),t._v(" "),s("div",{staticClass:"url-info"},[s("p",{staticClass:"text title"},[t._v("Node.js")]),t._v(" "),s("p",{staticClass:"text desc"},[t._v("免费、开源、跨平台的 JavaScript 运行时环境")])])])])]),t._v(" "),s("div",{staticClass:"nav-body"},[s("a",{attrs:{href:"https://spring.io",target:"_blank"}},[s("div",{staticClass:"nav-card"},[s("div",{staticClass:"url-img"},[s("img",{attrs:{src:"/assets/webnav/spring.png",height:"auto",width:"auto"}})]),t._v(" "),s("div",{staticClass:"url-info"},[s("p",{staticClass:"text title"},[t._v("Spring")]),t._v(" "),s("p",{staticClass:"text desc"},[t._v("开源的 Java 应用框架")])])])])]),t._v(" "),s("div",{staticClass:"nav-body"},[s("a",{attrs:{href:"https://mvnrepository.com",target:"_blank"}},[s("div",{staticClass:"nav-card"},[s("div",{staticClass:"url-img"},[s("img",{attrs:{src:"/assets/webnav/mvnrepository.png",height:"auto",width:"auto"}})]),t._v(" "),s("div",{staticClass:"url-info"},[s("p",{staticClass:"text title"},[t._v("MVN Repository")]),t._v(" "),s("p",{staticClass:"text desc"},[t._v("Java 生态依赖库（开源库、框架、工具）的搜索引擎")])])])])]),t._v(" "),s("div",{staticClass:"nav-body"},[s("a",{attrs:{href:"https://cn.vuejs.org",target:"_blank"}},[s("div",{staticClass:"nav-card"},[s("div",{staticClass:"url-img"},[s("img",{attrs:{src:"/assets/webnav/vue.svg",height:"auto",width:"auto"}})]),t._v(" "),s("div",{staticClass:"url-info"},[s("p",{staticClass:"text title"},[t._v("Vue.js")]),t._v(" "),s("p",{staticClass:"text desc"},[t._v("渐进式 JavaScript 框架")])])])])]),t._v(" "),s("div",{staticClass:"nav-body"},[s("a",{attrs:{href:"https://es6.ruanyifeng.com",target:"_blank"}},[s("div",{staticClass:"nav-card"},[s("div",{staticClass:"url-img"},[s("img",{attrs:{src:"/assets/webnav/es6book.png",height:"auto",width:"auto"}})]),t._v(" "),s("div",{staticClass:"url-info"},[s("p",{staticClass:"text title"},[t._v("ES6 入门教程")]),t._v(" "),s("p",{staticClass:"text desc"},[t._v("ECMAScript 6 入门教程")])])])])]),t._v(" "),s("div",{staticClass:"nav-body"},[s("a",{attrs:{href:"https://git-scm.com",target:"_blank"}},[s("div",{staticClass:"nav-card"},[s("div",{staticClass:"url-img"},[s("img",{attrs:{src:"/assets/webnav/git.png",height:"auto",width:"auto"}})]),t._v(" "),s("div",{staticClass:"url-info"},[s("p",{staticClass:"text title"},[t._v("Git")]),t._v(" "),s("p",{staticClass:"text desc"},[t._v("免费开源的分布式版本控制系统")])])])])]),t._v(" "),s("div",{staticClass:"nav-body"},[s("a",{attrs:{href:"https://www.electronjs.org/zh/",target:"_blank"}},[s("div",{staticClass:"nav-card"},[s("div",{staticClass:"url-img"},[s("img",{attrs:{src:"/assets/webnav/electron.png",height:"auto",width:"auto"}})]),t._v(" "),s("div",{staticClass:"url-info"},[s("p",{staticClass:"text title"},[t._v("Electron")]),t._v(" "),s("p",{staticClass:"text desc"},[t._v("使用 Web 技术(HTML、CSS、JavaScript)构建跨平台的桌面应用程序的开源的框架")])])])])])]),t._v(" "),s("h4",[s("span",{staticClass:"nav-title"},[t._v("AI")])]),t._v(" "),s("div",{staticClass:"nav-card-row"},[s("div",{staticClass:"nav-body"},[s("a",{attrs:{href:"https://www.deepseek.com",target:"_blank"}},[s("div",{staticClass:"nav-card"},[s("div",{staticClass:"url-img"},[s("img",{attrs:{src:"/assets/webnav/deepseek.png",height:"auto",width:"auto"}})]),t._v(" "),s("div",{staticClass:"url-info"},[s("p",{staticClass:"text title"},[t._v("DeepSeek")]),t._v(" "),s("p",{staticClass:"text desc"},[t._v("幻方量化旗下深度求索推出的开源大模型和聊天助手")])])])])])]),t._v(" "),s("h4",[s("span",{staticClass:"nav-title"},[t._v("视频教程")])]),t._v(" "),s("div",{staticClass:"nav-card-row"},[s("div",{staticClass:"nav-body"},[s("a",{attrs:{href:"https://www.gulixueyuan.com",target:"_blank"}},[s("div",{staticClass:"nav-card"},[s("div",{staticClass:"url-img"},[s("img",{attrs:{src:"/assets/webnav/gulixueyuan.png",height:"auto",width:"auto"}})]),t._v(" "),s("div",{staticClass:"url-info"},[s("p",{staticClass:"text title"},[t._v("谷粒学苑")]),t._v(" "),s("p",{staticClass:"text desc"},[t._v("尚硅谷旗下在线教育平台，提供 IT 技术类视频课程")])])])])])]),t._v(" "),s("h4",[s("span",{staticClass:"nav-title"},[t._v("开发工具")])]),t._v(" "),s("div",{staticClass:"nav-card-row"},[s("div",{staticClass:"nav-body"},[s("a",{attrs:{href:"https://www.jetbrains.com/zh-cn/idea/",target:"_blank"}},[s("div",{staticClass:"nav-card"},[s("div",{staticClass:"url-img"},[s("img",{attrs:{src:"/assets/webnav/idea.png",height:"auto",width:"auto"}})]),t._v(" "),s("div",{staticClass:"url-info"},[s("p",{staticClass:"text title"},[t._v("IntelliJ IDEA")]),t._v(" "),s("p",{staticClass:"text desc"},[t._v("专业的 Java 和 Kotlin 开发 IDE")])])])])]),t._v(" "),s("div",{staticClass:"nav-body"},[s("a",{attrs:{href:"https://code.visualstudio.com",target:"_blank"}},[s("div",{staticClass:"nav-card"},[s("div",{staticClass:"url-img"},[s("img",{attrs:{src:"/assets/webnav/vscode.png",height:"auto",width:"auto"}})]),t._v(" "),s("div",{staticClass:"url-info"},[s("p",{staticClass:"text title"},[t._v("VS Code")]),t._v(" "),s("p",{staticClass:"text desc"},[t._v("微软开发的一款免费、开源、跨平台的代码编辑器")])])])])]),t._v(" "),s("div",{staticClass:"nav-body"},[s("a",{attrs:{href:"https://github.com/qishibo/AnotherRedisDesktopManager/releases",target:"_blank"}},[s("div",{staticClass:"nav-card"},[s("div",{staticClass:"url-img"},[s("img",{attrs:{src:"/assets/webnav/anotherredis.png",height:"auto",width:"auto"}})]),t._v(" "),s("div",{staticClass:"url-info"},[s("p",{staticClass:"text title"},[t._v("AnotherRedisDesktopManager")]),t._v(" "),s("p",{staticClass:"text desc"},[t._v("Redis 桌面(GUI)管理客户端")])])])])])]),t._v(" "),s("h4",[s("span",{staticClass:"nav-title"},[t._v("画图")])]),t._v(" "),s("div",{staticClass:"nav-card-row"},[s("div",{staticClass:"nav-body"},[s("a",{attrs:{href:"https://app.diagrams.net",target:"_blank"}},[s("div",{staticClass:"nav-card"},[s("div",{staticClass:"url-img"},[s("img",{attrs:{src:"/assets/webnav/drawio.png",height:"auto",width:"auto"}})]),t._v(" "),s("div",{staticClass:"url-info"},[s("p",{staticClass:"text title"},[t._v("draw.io")]),t._v(" "),s("p",{staticClass:"text desc"},[t._v("一款免费的、基于浏览器的在线图表绘制工具")])])])])]),t._v(" "),s("div",{staticClass:"nav-body"},[s("a",{attrs:{href:"https://excalidraw.com",target:"_blank"}},[s("div",{staticClass:"nav-card"},[s("div",{staticClass:"url-img"},[s("img",{attrs:{src:"/assets/webnav/excalidraw.png",height:"auto",width:"auto"}})]),t._v(" "),s("div",{staticClass:"url-info"},[s("p",{staticClass:"text title"},[t._v("Excalidraw")]),t._v(" "),s("p",{staticClass:"text desc"},[t._v("一款开源的、极简的、手绘风格的在线白板工具")])])])])])])])]),t._v(" "),s("Footer",{staticClass:"footer",attrs:{sidebar:!1}})],1)}),[],!1,null,"0af0bddc",null);s.default=l.exports}}]);