(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{236:function(e,t,n){},239:function(e,t,n){},240:function(e,t,n){"use strict";var o=n(236);n.n(o).a},245:function(e,t,n){"use strict";var o={props:{sidebar:{type:Boolean,default:!1}},computed:{year:function(){return(new Date).getFullYear()}}},a=(n(251),n(0)),r=Object(a.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.sidebar?"footer-wrapper footer-adapt":"footer-wrapper"},[e._m(0),e._v(" "),e.$themeConfig.record?n("span",[n("i",{staticClass:"iconfont reco-beian"}),e._v(" "),n("a",{attrs:{target:"blank",href:"http://beian.miit.gov.cn"}},[e._v(e._s(e.$themeConfig.record))])]):e._e(),e._v(" "),n("span",[n("i",{staticClass:"iconfont reco-copyright"}),e._v(" "),n("a",[e.$themeConfig.startYear?n("span",[e._v(e._s(e.$themeConfig.startYear)+" - ")]):e._e(),e._v("\n      "+e._s(e.year)+" newobject.cc\n    ")])]),e._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:void 0!==e.$themeConfig.valineConfig,expression:"$themeConfig.valineConfig !== undefined"}]},[n("i",{staticClass:"iconfont reco-eye"}),e._v(" "),n("AccessNumber",{attrs:{idVal:"/"}})],1),e._v(" "),n("div",{staticClass:"other-info"},[e.$themeConfig.footerWeChat?n("img",{attrs:{src:e.$withBase(e.$themeConfig.footerWeChat),alt:"公众号「NO编程」",title:"公众号「NO编程」"}}):e._e()])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("span",[t("i",{staticClass:"iconfont reco-theme"}),this._v(" "),t("a",{attrs:{target:"blank",href:"https://vuepress-theme-reco.recoluan.com"}},[this._v("vuepress-theme-reco")])])}],!1,null,"acb96f76",null);t.a=r.exports},251:function(e,t,n){"use strict";var o=n(239);n.n(o).a},252:function(e,t,n){},290:function(e,t,n){"use strict";var o=n(252);n.n(o).a},353:function(e,t,n){"use strict";n.r(t);var o=n(245),a=["这啥也没有，兄弟！","这地方荒无人烟的，换个页面。"],r={components:{Footer:o.a},computed:{noFoundPageByTencent:function(){return!1!==this.$themeConfig.noFoundPageByTencent}},mounted:function(){if(this.noFoundPageByTencent){var e=document.createElement("script");e.setAttribute("homePageName","回到首页"),e.setAttribute("homePageUrl","/"),e.setAttribute("src","//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js"),document.body.append(e)}},methods:{getMsg:function(){return a[Math.floor(Math.random()*a.length)]}}},s=(n(240),n(290),n(0)),i=Object(s.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.noFoundPageByTencent?e._e():n("div",{staticClass:"theme-container"},[n("div",{staticClass:"content"},[n("h1",[e._v("404")]),e._v(" "),n("blockquote",[e._v(e._s(e.getMsg()))]),e._v(" "),n("router-link",{attrs:{to:"/"}},[e._v("返回首页")])],1),e._v(" "),n("Footer",{staticClass:"footer",attrs:{sidebar:!1}})],1)}),[],!1,null,"511e5ddf",null);t.default=i.exports}}]);