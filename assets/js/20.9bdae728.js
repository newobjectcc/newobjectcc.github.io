(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{365:function(s,a,t){"use strict";t.r(a);var n=t(0),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"什么是-base64-编码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是-base64-编码"}},[s._v("#")]),s._v(" 什么是 Base64 编码")]),s._v(" "),t("p",[s._v("Base64 编码是最常见的编码方式，基于 64 个可打印字符来表示任意二进制数据的方法，是从二进制转换到可见字符的过程。")]),s._v(" "),t("h2",{attrs:{id:"使用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用场景"}},[s._v("#")]),s._v(" 使用场景")]),s._v(" "),t("p",[s._v("数据加密或签名通过 Base64 转换为字符串存储或传输。\n不能传输文件的网络环境可以转换 Base64 进行网络传输。\n在文本资源(如 HTML 和 CSS文件)中嵌入图片文件或其他二进制资源。\n在 URL、网页中传输少量二进制数据等等。")]),s._v(" "),t("h2",{attrs:{id:"base64-编码原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#base64-编码原理"}},[s._v("#")]),s._v(" Base64 编码原理")]),s._v(" "),t("p",[s._v("原理是把每 3 个字节（每个字节为 8 位, 3 个字节为 24 位）重新划为 4 组（每组为 6位，高位补两个 0 为 8 位后作为一个新字节，划分后的每个字节数值的范围是 00000000 - 00111111 即十进制的 0 - 63），然后将划分后的字节的数值作为索引查编码表，获得相应的字符，从而得到编码后的字符串。通过 64 个字符来对任意数据进行编码，因此称为 Base64。")]),s._v(" "),t("p",[s._v("Base64 标准编码表：\n"),t("img",{attrs:{"data-src":"/assets/article/javabase/21/02/base64/01.png",alt:"Base64标准编码表"}})]),s._v(" "),t("p",[s._v("以字符串 “NEW” 为例，对其 Base64 编码：\n"),t("img",{attrs:{"data-src":"/assets/article/javabase/21/02/base64/02.jpg",alt:"Base64"}})]),s._v(" "),t("p",[s._v("如果要编码的字节数不能被 3 整除，最后会多出 1 个或 2 有效的字节。将这样处理，将其用 0 补充至 6 的最小倍数位后，剩余的空位将使用 “=” 填充处理。例如：\n"),t("img",{attrs:{"data-src":"/assets/article/javabase/21/02/base64/03.jpg",alt:"Base64"}})]),s._v(" "),t("p",{staticClass:"image-wrap"},[t("img",{attrs:{"data-src":"/assets/article/javabase/21/02/base64/04.jpg",alt:"Base64"}})]),s._v(" "),t("p",[s._v("经过 Base64 编码后数据会增大，数据经过 Base64 处理后，由原来每 3 个字节，变为为 4 个字节，数据大小会变为原来的 4/3, 因此数据增大 1/3。")]),s._v(" "),t("p",[s._v("对于字符内容，相同字符串不同的字符编码(如 utf-8 与 gbk)的 Base64 编码结果会不一样。Base64 是一种通过查表的编码方法，不能用于加密，即使是自定义编码表也不行。")]),s._v(" "),t("h2",{attrs:{id:"jdk-内置的-base64-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jdk-内置的-base64-api"}},[s._v("#")]),s._v(" JDK 内置的 Base64 API")]),s._v(" "),t("p",[s._v("在 JDK 7 之前可以使用 sun.misc.BASE64Encoder 和 sun.misc.BASE64Decoder 来 Base64 编码解码，但 com.sun 开头的包不是公开的，属于 sun 的内部方法，不建议使用。所以可以使用 Apache 提供的工具包（commons-codec-1.11.jar）来进行 Base64 编码解码。")]),s._v(" "),t("p",[s._v("从 JDK 7 开始 Oracle 发表了声明，不希望 Java 程序调用 JDK 系统包中以 sun 开头的类（https://www.oracle.com/technetwork/java/faq-sun-packages-142232.html）。")]),s._v(" "),t("p",[s._v("从 JKD 8 开始，Oracle 已经把 Base64 进行优化并放到 JDK 的 java.util 包，所以推荐直接使用 java.util.Base64 进行 Base64 编码和解码。")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Base64 编码")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" encoder "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Base64")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getEncoder")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("encodeToString")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"但愿人长久 千里共婵娟"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getBytes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("err"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("encoder"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\t\t\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Base64 解码")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" decoder "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Base64")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getDecoder")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("decode")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("encoder"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("err"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("decoder"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 结果")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 5L2G5oS/5Lq66ZW/5LmFIOWNg+mHjOWFseWpteWonw==")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 但愿人长久 千里共婵娟")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("标准的 Base64 编码中可能出现字符 + 和 / 字符，不能直接用在 URL 中，需要对其进行处理，把字符 + 和 / 分别变成 - 和 _ ，JDK 也提供了对应的方法。")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// URL安全的 Base64 编码")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" safeEncoder "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Base64")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getUrlEncoder")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("encodeToString")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"但愿人长久 千里共婵娟"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getBytes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("err"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("safeEncoder"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\t\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// URL安全的 Base64 解码")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" safeDecoder "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Base64")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getUrlDecoder")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("decode")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("safeEncoder"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("err"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("safeDecoder"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 结果")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 5L2G5oS_5Lq66ZW_5LmFIOWNg-mHjOWFseWpteWonw==")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 但愿人长久 千里共婵娟")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("h2",{attrs:{id:"小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[s._v("#")]),s._v(" 小结")]),s._v(" "),t("p",[s._v("Base64 是基于 64 个可打印字符来表示任意二进制数据的方法。")]),s._v(" "),t("p",[s._v("Base64 通常用于数据加密或签名后转换为可见字符串，文本资源(如 HTML 和 CSS 中)中嵌入图片文件等等。")]),s._v(" "),t("p",[s._v("原理是把二进制数据每 3 个字节重新划为 4 组(每三个 8 位字节,即总共24位,可以由四个 6 位 Base64 数值表示)，然后作为索引查编码表，获得相应的字符，从而得到编码后的字符串。")]),s._v(" "),t("p",[s._v("经过 Base64 编码后数据会增大，因为每 3 个字节，重新划分为 4 个字节，数据大小会变为原来的 4/3, 因此数据增大 1/3。")]),s._v(" "),t("p",[s._v("Base64 是一种通过索引查表的编码方法，不能用于加密。")]),s._v(" "),t("hr"),s._v(" "),t("p",[s._v("参考：\nhttps://en.wikipedia.org/wiki/Base64\nhttps://www.ietf.org/rfc/rfc4648.txt\nhttps://www.liaoxuefeng.com/wiki/897692888725344/949441536192576")])])}),[],!1,null,null,null);a.default=e.exports}}]);