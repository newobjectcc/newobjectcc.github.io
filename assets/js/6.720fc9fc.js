(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{236:function(t,e,n){},240:function(t,e,n){"use strict";var a=n(236);n.n(a).a},279:function(t,e,n){},280:function(t,e,n){},333:function(t,e,n){"use strict";n(334);var a=n(8),i=n(122),o=n(6),r=/./.toString,l=function(t){n(19)(RegExp.prototype,"toString",t,!0)};n(9)((function(){return"/a/b"!=r.call({source:"a",flags:"b"})}))?l((function(){var t=a(this);return"/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?i.call(t):void 0)})):"toString"!=r.name&&l((function(){return r.call(this)}))},334:function(t,e,n){n(6)&&"g"!=/./g.flags&&n(14).f(RegExp.prototype,"flags",{configurable:!0,get:n(122)})},335:function(t,e,n){var a=Date.prototype,i=a.toString,o=a.getTime;new Date(NaN)+""!="Invalid Date"&&n(19)(a,"toString",(function(){var t=o.call(this);return t==t?i.call(this):"Invalid Date"}))},336:function(t,e,n){},337:function(t,e,n){},338:function(t,e,n){"use strict";var a=n(279);n.n(a).a},339:function(t,e,n){"use strict";var a=n(280);n.n(a).a},357:function(t,e,n){"use strict";n.r(e);var a=n(71),i=(n(69),n(67),n(70),n(68),n(118),n(244),n(333),n(335),n(249)),o=n(245),r=n(246),l=(n(336),n(337),{mixins:[r.a],name:"Tool",components:{Common:i.a,Footer:o.a},data:function(){return{Pickr:null,watermark:null,Swal:null,loadImage:null,dataURLtoBlob:null,Canvas2Image:null,img:"",watermarkText:"仅用于XXX办理，他用无效。",fontSize:48,fontColor:"#fff",fontAlpha:1,textSpaceX:80,textSpaceY:200,textRotationAngle:-45,fontType:"Microsoft YaHei",supportFontTypes:[]}},props:{},computed:{},created:function(){},mounted:function(){var t=this;n.e(11).then(n.t.bind(null,346,7)).then((function(e){t.Pickr=e.default,t.initPickr()})),n.e(25).then(n.t.bind(null,347,7)).then((function(e){t.watermark=e.default})),n.e(24).then(n.t.bind(null,348,7)).then((function(e){t.Swal=e.default})),n.e(7).then(n.t.bind(null,349,7)).then((function(e){t.loadImage=e.default})),n.e(12).then(n.t.bind(null,350,7)).then((function(e){t.dataURLtoBlob=e.default})),n.e(22).then(n.bind(null,351)).then((function(e){t.Canvas2Image=e.default})),this.initSupportFontFamily2Select(this.dataFont())},methods:{initPickr:function(){var t=this;t.Pickr.create({el:".color-picker",theme:"nano",default:"#00000080",appClass:"color-custom-class",container:".color-picker-container",autoReposition:!1,swatches:["rgba(66, 68, 90, 1)","rgba(233, 30, 99, 0.95)","rgba(156, 39, 176, 0.9)","rgba(103, 58, 183, 0.85)","rgba(63, 81, 181, 0.8)","rgba(33, 150, 243, 0.75)","rgba(3, 169, 244, 0.7)"],components:{preview:!0,opacity:!0,hue:!0,interaction:{input:!0,save:!0,cancel:!0}},i18n:{"btn:save":"确定","btn:cancel":"取消"}}).on("init",(function(e){var n=e.getColor(),a=n.toHEXA().toString();t.fontColor=a.length>7?a.substr(0,7):a,t.fontAlpha=n.toRGBA()[3]})).on("save",(function(e,n){var a=e.toHEXA().toString();t.fontColor=a.length>7?a.substr(0,7):a,t.fontAlpha=e.toRGBA()[3],n.hide(),t.handleFontColorAndAlpha(t.fontColor+"-"+t.fontAlpha)}))},rotate:function(t){var e=t.getContext("2d");e.globalAlpha=this.fontAlpha,e.fillStyle=this.fontColor,e.font=this.fontSize+"px "+this.fontType,e.textBaseline="top";for(var n=this.watermarkText,a=e.measureText(n),i=t.height,o=t.width,r=a.width,l=this.textSpaceY+this.fontSize,c=r-Math.cos(this.textRotationAngle*Math.PI/180)*r,s=this.textRotationAngle>0?l:0,u=Math.ceil(o/(r-c))+2,p=Math.ceil(i/l)+2,h=0;h<=u;h++)for(var d=0;d<=p;d++)e.save(),e.translate((r-c+this.textSpaceX)*h,l*d-s),e.rotate(this.textRotationAngle*Math.PI/180),e.fillText(n,0,0),e.restore();return t},addWatermark:function(t){this.watermark([t]).image(this.rotate).then((function(t){var e=document.getElementById("draw-area");e.innerHTML="",t.className="animate__animated animate__pulse",e.appendChild(t)}))},changeFile:function(t){var e=this,n=t.target.files[0];if(n)if(-1!=n.type.indexOf("image")){var a=new FileReader;a.readAsDataURL(n),a.onloadend=function(){var t=this.result;e.handleImg(t)}}else this.Swal.fire({title:"格式有误",text:"请选择图片文件!",icon:"warning",confirmButtonText:"确定",confirmButtonColor:"#69a4de",showClass:{popup:"animate__animated animate__fadeInDown"},hideClass:{popup:"animate__animated animate__fadeOutUp"}})},handleWatermarkText:function(t){""!=this.img&&this.addWatermark(this.img)},handleTextSpaceY:function(t){""!=this.img&&this.addWatermark(this.img)},handleTextSpaceX:function(t){""!=this.img&&this.addWatermark(this.img)},handleFontSize:function(t){""!=this.img&&this.addWatermark(this.img)},handleFontColorAndAlpha:function(t){""!=this.img&&this.addWatermark(this.img)},handleFontType:function(t){""!=this.img&&this.addWatermark(this.img)},handleImg:function(t){this.img=t,""!=this.img&&this.addWatermark(this.img)},verifyInt:function(t,e){var n=parseInt((t+"").replace(/[^\d]/g,""));return n<=e||isNaN(n)?e:n},rotateImg:function(){var t=this;if(""!=t.img){var e=t.dataURLtoBlob(t.img);t.loadImage(e,(function(e){var n=e,a=t.Canvas2Image.convertToJPEG(n,n.width,n.height);t.handleImg(a.src)}),{canvas:!0,orientation:6})}},save:function(){var t=this,e=document.getElementById("draw-area").children[0];if(e){var n=t.dataURLtoBlob(e.src);t.loadImage(n,(function(e){var n=e;t.Canvas2Image.saveAsJPEG(n,n.width,n.height)}),{canvas:!0})}},dataFont:function(){return{windows:[{ch:"宋体",en:"SimSun"},{ch:"黑体",en:"SimHei"},{ch:"微软雅黑",en:"Microsoft YaHei"},{ch:"微软正黑体",en:"Microsoft JhengHei"},{ch:"楷体",en:"KaiTi"},{ch:"新宋体",en:"NSimSun"},{ch:"仿宋",en:"FangSong"}],"OS X":[{ch:"苹方",en:"PingFang SC"},{ch:"华文黑体",en:"STHeiti"},{ch:"冬青黑体简",en:"Hiragino Sans GB"},{ch:"兰亭黑-简",en:"Lantinghei SC"},{ch:"翩翩体-简",en:"Hanzipen SC"},{ch:"手札体-简",en:"Hannotate SC"},{ch:"宋体-简",en:"Songti SC"},{ch:"娃娃体-简",en:"Wawati SC"},{ch:"魏碑-简",en:"Weibei SC"},{ch:"行楷-简",en:"Xingkai SC"},{ch:"雅痞-简",en:"Yapi SC"},{ch:"圆体-简",en:"Yuanti SC"}],office:[{ch:"幼圆",en:"YouYuan"},{ch:"隶书",en:"LiSu"},{ch:"华文细黑",en:"STXihei"},{ch:"华文楷体",en:"STKaiti"},{ch:"华文宋体",en:"STSong"},{ch:"华文仿宋",en:"STFangsong"},{ch:"华文中宋",en:"STZhongsong"},{ch:"华文彩云",en:"STCaiyun"},{ch:"华文琥珀",en:"STHupo"},{ch:"华文新魏",en:"STXinwei"},{ch:"华文隶书",en:"STLiti"},{ch:"华文行楷",en:"STXingkai"},{ch:"方正舒体",en:"FZShuTi"},{ch:"方正姚体",en:"FZYaoti"}],open:[{ch:"思源黑体",en:"Source Han Sans CN"},{ch:"思源宋体",en:"Source Han Serif SC"},{ch:"文泉驿微米黑",en:"WenQuanYi Micro Hei"}]}},isSupportFontFamily:function(t){if("string"!=typeof t)return!1;var e="Arial";if(t.toLowerCase()==e.toLowerCase())return!0;var n=100,a=100,i=document.createElement("canvas"),o=i.getContext("2d");i.width=n,i.height=a,o.textAlign="center",o.fillStyle="black",o.textBaseline="middle";var r=function(t){o.clearRect(0,0,n,a),o.font="100px "+t+", "+e,o.fillText("a",50,50);var i=o.getImageData(0,0,n,a).data;return[].slice.call(i).filter((function(t){return 0!=t}))};return r(e).join("")!==r(t).join("")},initSupportFontFamily2Select:function(t){var e=this,n=[],i=[],o=(document.documentElement.currentStyle?document.documentElement.currentStyle:window.getComputedStyle(document.documentElement)).fontFamily;o=o.replace(/\"|\'/g,""),Object.keys(t).forEach((function(e){n.push.apply(n,Object(a.a)(t[e]))})),Object.keys(n).forEach((function(t){if(e.isSupportFontFamily(n[t].en)){var a={text:n[t].ch,value:n[t].en};o==a.value?i.unshift(a):i.push(a)}})),e.fontType=i[0].value,e.supportFontTypes=i}}}),c=(n(240),n(338),n(339),n(0)),s=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Common",{attrs:{sidebar:!1,isComment:!1}},[n("div",{staticClass:"tool-wrapper"},[n("div",{staticClass:"view-area",attrs:{onclick:"javascript:{if(event.target !== this) return;choose_upload_file.click()}"}},[n("div",{staticClass:"tool-reminder"},[t._v("提示：为保证个人信息安全，不会上传任何图片信息，水印添加完全由前端处理。")]),t._v(" "),n("div",{attrs:{id:"draw-area"}})]),t._v(" "),n("div",{staticClass:"control-area"},[n("div",{staticClass:"tool-input"},[n("div",{staticClass:"tool-input-prepend"},[t._v("水 印：")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.watermarkText,expression:"watermarkText"}],staticClass:"tool-input-inner",attrs:{type:"text",placeholder:"请输入水印内容"},domProps:{value:t.watermarkText},on:{blur:function(e){return t.handleWatermarkText(t.watermarkText)},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleWatermarkText(t.watermarkText)},input:function(e){e.target.composing||(t.watermarkText=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"tool-input m-top"},[n("div",{staticClass:"tool-input-prepend"},[t._v("间 距：")]),t._v(" "),n("div",{staticClass:"tool-input-inner"},[n("div",{staticClass:"tool-input-inner-item p-right b-right w-percent50"},[n("div",[t._v("上下")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.textSpaceY,expression:"textSpaceY",modifiers:{number:!0}}],staticClass:"tool-input-inner-item-input",attrs:{type:"text",maxlength:"4"},domProps:{value:t.textSpaceY},on:{blur:[function(e){return t.handleTextSpaceY(t.textSpaceY)},function(e){return t.$forceUpdate()}],keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleTextSpaceY(t.textSpaceY)},input:[function(e){e.target.composing||(t.textSpaceY=t._n(e.target.value))},function(e){t.textSpaceY=t.verifyInt(t.textSpaceY,0)}]}}),t._v(" "),n("div",[t._v("px")])]),t._v(" "),n("div",{staticClass:"tool-input-inner-item p-right p-left w-percent50"},[n("div",[t._v("左右")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.textSpaceX,expression:"textSpaceX",modifiers:{number:!0}}],staticClass:"tool-input-inner-item-input",attrs:{type:"text",maxlength:"4"},domProps:{value:t.textSpaceX},on:{blur:[function(e){return t.handleTextSpaceX(t.textSpaceX)},function(e){return t.$forceUpdate()}],keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleTextSpaceX(t.textSpaceX)},input:[function(e){e.target.composing||(t.textSpaceX=t._n(e.target.value))},function(e){t.textSpaceX=t.verifyInt(t.textSpaceX,0)}]}}),t._v(" "),n("div",[t._v("px")])])])]),t._v(" "),n("div",{staticClass:"tool-input m-top"},[n("div",{staticClass:"tool-input-prepend"},[t._v("字 体：")]),t._v(" "),n("div",{staticClass:"tool-input-inner"},[n("div",{staticClass:"tool-input-inner-item p-right b-right mobile-w-percent50"},[n("div",{staticClass:"color-picker"}),t._v(" "),n("div",{staticClass:"color-picker-container"})]),t._v(" "),n("div",{staticClass:"tool-input-inner-item p-right2 p-left2 b-right mobile-w-percent50 mobile-b-right"},[n("div",[t._v("大小")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.fontSize,expression:"fontSize",modifiers:{number:!0}}],staticClass:"tool-input-inner-item-input",attrs:{type:"text",maxlength:"4"},domProps:{value:t.fontSize},on:{blur:[function(e){return t.handleFontSize(t.fontSize)},function(e){return t.$forceUpdate()}],keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleFontSize(t.fontSize)},input:[function(e){e.target.composing||(t.fontSize=t._n(e.target.value))},function(e){t.fontSize=t.verifyInt(t.fontSize,1)}]}}),t._v(" "),n("div",[t._v("px")])]),t._v(" "),n("div",{staticClass:"tool-input-inner-item p-left2 mobile-font-hide"},[n("div",[t._v("字体")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.fontType,expression:"fontType"}],staticClass:"f-family",on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.fontType=e.target.multiple?n:n[0]},function(e){return t.handleFontType(t.fontType)}]}},t._l(t.supportFontTypes,(function(e){return n("option",{domProps:{value:e.value}},[t._v("\r\n                  "+t._s(e.text)+"\r\n                ")])})),0)])])]),t._v(" "),n("div",{},[n("div",{staticClass:"tool-button-area m-top"},[n("div",{staticClass:"tool-upload"},[n("button",{staticClass:"tool-button",attrs:{type:"button",onclick:"choose_upload_file.click()"}},[n("svg",{staticClass:"icon",staticStyle:{width:"1em",height:"1em",fill:"currentColor",overflow:"hidden","vertical-align":"text-top"},attrs:{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2574"}},[n("path",{attrs:{d:"M418.688 133.333333a122.666667 122.666667 0 0 1 93.013333 42.666667H785.066667a186.666667 186.666667 0 0 1 186.581333 181.162667l0.085333 5.504v17.92h-0.256c0.170667 1.429333 0.256 2.88 0.256 4.373333V789.333333a186.666667 186.666667 0 0 1-186.666666 186.666667H238.933333A186.666667 186.666667 0 0 1 52.266667 789.333333V320a186.666667 186.666667 0 0 1 186.666666-186.666667z m0 74.666667H238.933333A112 112 0 0 0 126.933333 320v469.333333c0 61.866667 50.133333 112 112 112h546.133334c61.866667 0 112-50.133333 112-112V422.272H615.04a122.666667 122.666667 0 0 1-113.834667-76.992l-1.834666-4.842667-35.413334-100.416a48 48 0 0 0-45.269333-32.021333zM448 688a37.333333 37.333333 0 0 1 3.072 74.538667L448 762.666667h-170.666667a37.333333 37.333333 0 0 1-3.072-74.538667L277.333333 688h170.666667z m337.066667-437.333333H546.88l22.912 64.917333a48 48 0 0 0 41.685333 31.914667l3.562667 0.128 281.024-0.021334a112.021333 112.021333 0 0 0-106.389333-96.853333l-4.608-0.085333z","p-id":"2575"}})]),t._v(" "),n("span",{},[t._v("选择文件")])]),t._v(" "),n("input",{staticClass:"tool-upload-input",attrs:{id:"choose_upload_file",type:"file",name:"file",accept:"image/png,image/jpeg,image/gif,image/jpg"},on:{change:function(e){return t.changeFile(e)}}})]),t._v(" "),n("button",{staticClass:"tool-button",attrs:{type:"button"},on:{click:function(e){return t.rotateImg()}}},[n("svg",{staticClass:"icon",staticStyle:{width:"1em",height:"1em","vertical-align":"text-top",fill:"currentColor",overflow:"hidden"},attrs:{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"7517"}},[n("path",{attrs:{d:"M970.229374 495.328185C963.472589 234.667019 750.210521 25.401445 487.923663 25.401445 229.709504 25.401445 18.852106 228.189651 5.92277 483.194761 18.877507 214.159586 241.080884 0 513.325109 0 789.642031 0 1014.267013 220.636954 1021.032264 495.328185L970.229374 495.328185ZM734.368486 971.825431 705.165291 912.572326C853.374258 835.707553 956.470257 682.807786 961.237262 504.10015 968.231127 242.312855 761.691974 24.43619 499.913146 17.442326 423.454795 15.401743 350.806661 31.68407 285.999107 62.123468L285.177794 60.446973C317.192082 44.63034 351.306223 31.870347 387.359341 22.844367 659.544295-45.239974 935.395525 120.208107 1003.488333 392.401528 1062.724503 629.193802 945.158147 868.695563 734.368486 971.825431ZM749.685558 959.844416C542.172684 1068.909755 293.755015 1020.011973 141.464883 856.164183 126.147811 849.788421 115.369131 834.708429 115.369131 817.079826 115.369131 793.702029 134.327077 774.744084 157.704874 774.744084 173.081215 774.744084 186.408507 783.024955 193.825729 795.285386L195.299013 794.006846C303.416031 906.628388 465.621194 962.316823 629.45205 927.042683 880.816286 872.92067 1040.709917 625.273512 986.587905 373.909276 971.152293 302.209463 939.916982 237.986142 897.394963 184.016537L900.51934 181.298583C924.18502 209.223238 945.285154 240.035192 963.02383 273.785245 1093.561858 522.152111 998.043956 829.306388 749.685558 959.844416Z","p-id":"7518"}})]),t._v(" "),n("span",{},[t._v("旋转")])]),t._v(" "),n("button",{staticClass:"tool-button",attrs:{type:"button"},on:{click:function(e){return t.save()}}},[n("svg",{staticClass:"icon",staticStyle:{width:"1em",height:"1em",fill:"currentColor",overflow:"hidden","vertical-align":"text-top"},attrs:{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3310"}},[n("path",{attrs:{d:"M925.248 356.928l-258.176-258.176a64 64 0 0 0-45.248-18.752H144a64 64 0 0 0-64 64v736a64 64 0 0 0 64 64h736a64 64 0 0 0 64-64V402.176a64 64 0 0 0-18.752-45.248zM288 144h192V256H288V144z m448 736H288V736h448v144z m144 0H800V704a32 32 0 0 0-32-32H256a32 32 0 0 0-32 32v176H144v-736H224V288a32 32 0 0 0 32 32h256a32 32 0 0 0 32-32V144h77.824l258.176 258.176V880z","p-id":"3311"}})]),t._v(" "),n("span",{},[t._v("保存")])])])])])])]),t._v(" "),n("Footer",{staticClass:"footer",attrs:{sidebar:!1}})],1)}),[],!1,null,"f22afb6c",null);e.default=s.exports}}]);