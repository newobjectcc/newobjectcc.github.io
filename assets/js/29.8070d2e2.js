(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{380:function(t,a,s){"use strict";s.r(a);var n=s(0),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"进制和位运算简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进制和位运算简介"}},[t._v("#")]),t._v(" 进制和位运算简介")]),t._v(" "),s("p",[t._v("进制也叫进位制，是一种记数方法，也称进位计数法，利用这种记数法可以使用有限的数字符号来表示所有的数值。")]),t._v(" "),s("p",[t._v("一种进制中可以使用的数字符号的数目称为这种进位制的基数，若一个进制的基数为 N，则可称之为 N 进制，即表示数值时满 N 进一。")]),t._v(" "),s("p",[t._v("在生活中最常用的是十进制，使用 10 个阿拉伯数字 0 到 9 进行记数。而在电子计算机领域，内部使用的是二进制，电路的状态通过 0 和 1 表示来实现记数。八进制和十六进制计算机领域也较为常用，尤其十六进制。")]),t._v(" "),s("p",[t._v("位运算则是在程序中对二进制数的一元和二元运算操作。")]),t._v(" "),s("p",[t._v("在 JDK 以及框架源码中都存在进制转换和位运算的身影，作为开发人员应该熟悉基本的进制转换和位运算（最起码得能看懂吧）。")]),t._v(" "),s("h2",{attrs:{id:"进制转换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进制转换"}},[t._v("#")]),t._v(" 进制转换")]),t._v(" "),s("p",[t._v("例如，十进数的 13，二进制的 1101，他们表示相同的数值，只是不同的表现形式而已，那么不同进制之间如何相互转换呢？")]),t._v(" "),s("p",[t._v("十进制转换 N 进制，可以通过“短除法”求余数然后倒序得到转换结果，一个十进制数转换为 N 进制就除以 N，例如：")]),t._v(" "),s("ol",[s("li",[t._v("将十进制数 123 转换为二进制。")])]),t._v(" "),s("p",{staticClass:"image-wrap"},[s("img",{attrs:{"data-src":"/assets/article/javabase/21/02/bit-operation/01.png",alt:"十进制 123 转二进制"}})]),t._v(" "),s("p",[t._v("结果：1111011")]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("将十进制数 123 转换为十六进制。")])]),t._v(" "),s("p",{staticClass:"image-wrap"},[s("img",{attrs:{"data-src":"/assets/article/javabase/21/02/bit-operation/02.png",alt:"十进制 123 转十六进制"}})]),t._v(" "),s("p",[t._v("结果：7b")]),t._v(" "),s("p",[t._v("N 进制转为十进制可以通过“按位权展开法”来转换，即在 N 进制中，每个位置的数字乘以进制的基数为底的所处位置序号(从 0 开始)为指数的整数次幂，然后相加。例如：")]),t._v(" "),s("ol",[s("li",[t._v("将二进制数 1111011 转换为十进制。")])]),t._v(" "),s("p",[t._v("1 * 2^6 + 1 * 2^5 + 1 * 2^4 + 1 * 2^3 + 0 * 2^2 + 1 * 2^1 + 1 * 2^0\n= 1 * 64  + 1 * 32  + 1 * 16  + 1 * 8   + 0 * 4   + 1 * 2   + 1 * 1\n= 123")]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("将十六进制数 7b 转换为十进制")])]),t._v(" "),s("p",[t._v("7 * 16^1 + b * 16^0\n= 7 * 16   + 11 * 1\n= 123")]),t._v(" "),s("p",[s("strong",[t._v("二进制与十六进制互转")])]),t._v(" "),s("p",[t._v("四位二进制数表示的范围是 0 - 15，用四位二进制数可以表示十六进制的一位数，反之亦然。即二进制转十六进制可以通过四(位)合一(位)，十六进制转二进制可以通过一(位)拆四(位)来转换。例如：\n二进制 1111011 转换为十六进制，0111(7) - 1011(b) 即转换结果为7b。\n十六进制 7b 转为二进制，7(0111) - b(十进制 11，二进制 1011) 即转换结果为 1111011。")]),t._v(" "),s("p",[s("strong",[t._v("二进制与八进制互转")])]),t._v(" "),s("p",[t._v("三位二进制数表示的范围是 0 - 7，用三位二进制数可以表示八进制的一位数，反之亦然。即二进制转八进制可以通过三(位)合一(位)，八进制转二进制可以通过一(位)拆三(位)来转换。例如：\n二进制 1111011 转换为八进制，001(1) - 111(7) - 011(3) 即转换结果为173。\n八进制 173 转为二进制，1(001) - 7(111) - 3(011) 即转换结果为 1111011。")]),t._v(" "),s("h3",{attrs:{id:"负数的二进制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#负数的二进制"}},[t._v("#")]),t._v(" 负数的二进制")]),t._v(" "),s("p",[t._v("前面介绍的都是正数的二进制转换，那么负数的二进制如何表示和转换的？")]),t._v(" "),s("p",[t._v("首先，我们先了解一下原码、反码、补码，一个数在计算机中的二进制表示形式叫做这个数的机器数，机器数的最高位称为符号位，正数符号位为 0，负数符号位为 1，而符号位之外部分称为机器数的真值(表示真正的数值部分)，原码、反码、补码是机器数的表示方法。")]),t._v(" "),s("p",[s("strong",[t._v("原码：")]),t._v(" 原码的表示方法，最高位是符号位，其余部分表示数值(真值)。正数符号位为 0，负数符号位为 1，0 的符号位可以为 0 或 1(+0 和 -0)。")]),t._v(" "),s("p",[t._v("例如，我们用 8 位二进制表示一个数，则 +11 的原码为 00001011，-11 的原码就是  10001011。")]),t._v(" "),s("p",[t._v("在数学中 1 + (-1) = 0，如果使用原码直接参与数学运算，00000001 + 10000001 = 10000010(换算成十进制为 -2)，显然不对。所以原码的符号位不能直接参与运算，必须和其他位分开，这就增加了硬件的开销和复杂性。为了便于 ALU (算术逻辑单元，实现多组算术运算和逻辑运算的组合逻辑电路)的设计，又发展出反码、补码。")]),t._v(" "),s("p",[s("strong",[t._v("反码：")]),t._v(" 反码的表示方法，正数的反码等于其原码，而负数的反码通过保留其符号位，将其原码的数值位(真值)取反。")]),t._v(" "),s("p",[t._v("例如，同样用 8 位二进制表示一个数，11 = 00001011(原码) = 00001011(反码)，\n-11 = 10001011(原码) = 11110100(反码)。")]),t._v(" "),s("p",[t._v("虽然，反码可以消除原码存在的计算问题，由于反码存在多余的负零等问题，此方式并未被广泛应用。")]),t._v(" "),s("p",[s("strong",[t._v("补码：")]),t._v(" 补码的表示方式，正数和 0 的补码等于其原码，且补码的 0 只有一个表示方式，不分 +0 和 -0。负数是将他的反码加 1 得到补码。")]),t._v(" "),s("p",[t._v("例如，11 = 00001011(原码) = 00001011(反码) = 00001011(补码)，-11 = 10001011(原码) = 11110100(反码) = 11110101(补码)。")]),t._v(" "),s("h3",{attrs:{id:"一种简单方式算出补码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一种简单方式算出补码"}},[t._v("#")]),t._v(" 一种简单方式算出补码")]),t._v(" "),s("p",[t._v("负数的补码一般情况下通过负数的原码得到反码，在将反码加 1 获得补码。这里有一种简单的计算补码方法。")]),t._v(" "),s("ol",[s("li",[t._v("将对应的正数原码从最低比特位向高比特位查找。")]),t._v(" "),s("li",[t._v("若该比特位为 0，补码对应比特位填 0，继续向高比特位查找。")]),t._v(" "),s("li",[t._v("若找到第一个为 1 的比特位，将补码对应比特位填 1。")]),t._v(" "),s("li",[t._v("然后，将其余未转换的比特位全部取反。")])]),t._v(" "),s("p",[t._v("例如：计算 -20 的补码。")]),t._v(" "),s("p",{staticClass:"image-wrap"},[s("img",{attrs:{"data-src":"/assets/article/javabase/21/02/bit-operation/03.gif",alt:"计算 -20 的补码"}})]),t._v(" "),s("h3",{attrs:{id:"计算机为什么使用补码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#计算机为什么使用补码"}},[t._v("#")]),t._v(" 计算机为什么使用补码")]),t._v(" "),s("p",[t._v("为了简化 ALU 设计，减法转换为加法来计算，例如，1 - 1 可以转换为 1 + (-1) = 00000001 + 11111111 = 100000000 (由于加数和被加数都是 8 位，因此运算结果也限制在 8 位，前面溢出的比特位 1 忽略，所以结果为 00000000 = 0)，即一个数加上另一个数的补码来表示。")]),t._v(" "),s("p",[t._v("这样只要有加法电路即可完成各种有号数加减法，对于乘除法，乘法在计算机中其实就是不断的做加法，除法就是相减，本质也是加法，所以四则运算的基础都是由加法而来，电路设计得到了很大简化。补码解决了原码和反码出现的问题，因此计算机中数值使用补码方式来计算和存储的。")]),t._v(" "),s("h3",{attrs:{id:"java-内置的进制转换-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java-内置的进制转换-api"}},[t._v("#")]),t._v(" Java 内置的进制转换 API")]),t._v(" "),s("p",[t._v("JDK 的 Integer 和 Long 类提供了常用的进制相互转换方法。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("进制转换")]),t._v(" "),s("th",[t._v("java.lang.Integer")]),t._v(" "),s("th",[t._v("java.lang.Long")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("10进制 → 2进制")]),t._v(" "),s("td",[t._v("toBinaryString(int i)")]),t._v(" "),s("td",[t._v("toBinaryString(long i)")])]),t._v(" "),s("tr",[s("td",[t._v("10进制 → 8进制")]),t._v(" "),s("td",[t._v("toOctalString(int i)")]),t._v(" "),s("td",[t._v("toOctalString(long i)")])]),t._v(" "),s("tr",[s("td",[t._v("10进制 → 16进制")]),t._v(" "),s("td",[t._v("toHexString(int i)")]),t._v(" "),s("td",[t._v("toHexString(long i)")])]),t._v(" "),s("tr",[s("td",[t._v("10进制 → n 进制")]),t._v(" "),s("td",[t._v("toString(int i, int radix)")]),t._v(" "),s("td",[t._v("toString(long i, int radix)")])]),t._v(" "),s("tr",[s("td",[t._v("n 进制 → 10进制")]),t._v(" "),s("td",[t._v("valueOf(String s, int radix) "),s("br"),t._v(" parseInt(String s, int radix)")]),t._v(" "),s("td",[t._v("valueOf(String s, int radix) "),s("br"),t._v(" parseLong(String s, int radix)")])])])]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toBinaryString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 十转二，结果为 1101")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toOctalString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 十转八，结果为 15")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toHexString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 十转十六，结果为 d")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 十转五，结果为 23")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("valueOf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"23"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 五转十，结果为 13")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[s("strong",[t._v("位数补齐")])]),t._v(" "),s("p",[t._v("如 int 类型数据长度是 32 位，输出时前面的“0”会被省略，想补齐可以使用 "),s("code",[t._v("commons-lang3-*.jar")]),t._v(" 的 StringUtils 工具类对输出的字符串位数补齐。示例：")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" fullStr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StringUtils")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("leftPad")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1010"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对二进制 1010 位数补齐")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fullStr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 输出结果：00000000000000000000000000001010")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h3",{attrs:{id:"java-中进制前缀"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java-中进制前缀"}},[t._v("#")]),t._v(" Java 中进制前缀")]),t._v(" "),s("p",[t._v("Java 对二进制、八进制、十六进制提供了字面量前缀的表现形式，可以直接使用这几种进制形式计算或赋值，例如：")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 都表示十进制的 10")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \t "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 十进制，没有前缀")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0b1010")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 二进制，前缀   0b(Java 7 或更高版本)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i3 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("012")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \t "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 八进制，前缀   0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i4 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0xA")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \t "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 十六进制，前缀 0x")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i3 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i4 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("h2",{attrs:{id:"位运算"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#位运算"}},[t._v("#")]),t._v(" 位运算")]),t._v(" "),s("p",[t._v("位运算是在程序中对二进制数的一元和二元运算操作，其运算符有 & ，| ，~ ，^ ，<<， >>， >>> ，接下来我们来逐个说明：")]),t._v(" "),s("h3",{attrs:{id:"按位与"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#按位与"}},[t._v("#")]),t._v(" & (按位与)")]),t._v(" "),s("p",[t._v("按位“与”操作处理两个长度相同的二进制数，两个相应的二进位都为 1，该位的结果值才为 1，否则为 0。\n如图：10 & 3 (int 类型长度 32 位，下图补位的 0 已被省略)。")]),t._v(" "),s("p",{staticClass:"image-wrap"},[s("img",{attrs:{"data-src":"/assets/article/javabase/21/02/bit-operation/04.gif",alt:"10 & 3"}})]),t._v(" "),s("h3",{attrs:{id:"按位或"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#按位或"}},[t._v("#")]),t._v(" | (按位或)")]),t._v(" "),s("p",[t._v("按位“或”操作处理两个长度相同的二进制数，两个相应的二进位只要有一个为 1，该位的结果值就为 1。\n例如：10 | 3 (int 类型长度 32 位，下图补位的 0 已被省略)。")]),t._v(" "),s("p",{staticClass:"image-wrap"},[s("img",{attrs:{"data-src":"/assets/article/javabase/21/02/bit-operation/05.gif",alt:"10 | 3"}})]),t._v(" "),s("h3",{attrs:{id:"按位非"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#按位非"}},[t._v("#")]),t._v(" ~ (按位非)")]),t._v(" "),s("p",[t._v("该操作符是一元运算符，对一个二进制数的每一位执行逻辑反操作，使相应的位 1 变为 0，0变为 1。\n例如：~ 3")]),t._v(" "),s("p",{staticClass:"image-wrap"},[s("img",{attrs:{"data-src":"/assets/article/javabase/21/02/bit-operation/06.gif",alt:"~ 3"}})]),t._v(" "),s("h3",{attrs:{id:"按位异或"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#按位异或"}},[t._v("#")]),t._v(" ^ (按位异或)")]),t._v(" "),s("p",[t._v("按位“异或”操作处理两个等长的二进制数，如果某对应位值不同则结果值为 1，否则为 0。\n例如：10 ^ 3 (int 类型长度 32 位，下图补位的 0 已被省略)。")]),t._v(" "),s("p",{staticClass:"image-wrap"},[s("img",{attrs:{"data-src":"/assets/article/javabase/21/02/bit-operation/07.gif",alt:"10 ^ 3"}})]),t._v(" "),s("h3",{attrs:{id:"左移"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#左移"}},[t._v("#")]),t._v(" << (左移)")]),t._v(" "),s("p",[t._v("向左进行移位操作，高位丢弃，移位后空缺的低位补 0。\n例如：10 << 2")]),t._v(" "),s("p",{staticClass:"image-wrap"},[s("img",{attrs:{"data-src":"/assets/article/javabase/21/02/bit-operation/08.gif",alt:"10 << 2"}})]),t._v(" "),s("h3",{attrs:{id:"右移"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#右移"}},[t._v("#")]),t._v(" >> (右移)")]),t._v(" "),s("p",[t._v("向右移位，移位后空缺高位补 0，若为负数，高补 1。\n例如：10 >> 2 和 -10 >> 2")]),t._v(" "),s("p",{staticClass:"image-wrap"},[s("img",{attrs:{"data-src":"/assets/article/javabase/21/02/bit-operation/09-1.gif",alt:"10 >> 2"}})]),t._v(" "),s("p",{staticClass:"image-wrap"},[s("img",{attrs:{"data-src":"/assets/article/javabase/21/02/bit-operation/09-2.gif",alt:"-10 >> 2"}})]),t._v(" "),s("h3",{attrs:{id:"无符号右移"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#无符号右移"}},[t._v("#")]),t._v(" >>> (无符号右移)")]),t._v(" "),s("p",[t._v("向右移位，无论正负，高位空缺部分补 0。\n例如：10 >>> 2 和 -10 >>> 2")]),t._v(" "),s("p",{staticClass:"image-wrap"},[s("img",{attrs:{"data-src":"/assets/article/javabase/21/02/bit-operation/10-1.gif",alt:"10 >>> 2"}})]),t._v(" "),s("p",{staticClass:"image-wrap"},[s("img",{attrs:{"data-src":"/assets/article/javabase/21/02/bit-operation/10-2.gif",alt:"-10 >>> 2"}})]),t._v(" "),s("h3",{attrs:{id:"应用示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#应用示例"}},[t._v("#")]),t._v(" 应用示例")]),t._v(" "),s("ol",[s("li",[t._v("m * 2^n 或 m / 2^n")])]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2 * 2^1 = 4 ，相当于乘以 2^1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3 / 2^1 = 1 , 相当于除以 2^1 向下取整")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("奇数偶数判断")])]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"奇数"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"偶数"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("随机概率")])]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// lr = 随机数;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 有 1/4 的概率执行该代码块")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("br"),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("参考：\n维基百科 - https://zh.wikipedia.org")])])}),[],!1,null,null,null);a.default=r.exports}}]);