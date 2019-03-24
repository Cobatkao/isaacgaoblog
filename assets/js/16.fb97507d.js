(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{181:function(t,e,r){"use strict";r.r(e);var _=r(0),s=Object(_.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._v(" "),r("p",[t._v("https就是在原http的基础上加上一层用于数据加密、解密、身份认证的安全层。")]),t._v(" "),r("p",[t._v("https本质上对于传输的数据用的是对称加密，但对于对称加密的密钥则采用非对称加密，非对称加密通过SSL协议进行再次加密，保证了公钥的安全。")]),t._v(" "),t._m(1),t._v(" "),r("p",[t._v("据记载，公元前400年，古希腊人就发明了置换密码；在第二次世界大战期间，德国军方启用了“恩尼格玛”密码机，所以密码学在社会发展中有着广泛的用途。")]),t._v(" "),t._m(2),t._v(" "),r("p",[t._v("有流式、分组两种，加密和解密都是使用的同一个密钥。")]),t._v(" "),r("p",[t._v("例如：DES、AES-GCM、ChaCha20-Poly1305等")]),t._v(" "),t._m(3),t._v(" "),r("p",[t._v("加密使用的密钥和解密使用的密钥是不相同的，分别称为：公钥、私钥，公钥和算法都是公开的，私钥是保密的。非对称加密算法性能较低，但是安全性超强，由于其加密特性，非对称加密算法能加密的数据长度也是有限的。")]),t._v(" "),r("p",[t._v("例如：RSA、DSA、ECDSA、 DH、ECDHE")]),t._v(" "),t._m(4),t._v(" "),r("p",[t._v("将任意长度的信息转换为较短的固定长度的值，通常其长度要比信息小得多，且算法不可逆。")]),t._v(" "),r("p",[t._v("例如：MD5、SHA-1、SHA-2、SHA-256 等")]),t._v(" "),t._m(5),t._v(" "),r("p",[t._v("签名就是在信息的后面再加上一段内容（信息经过hash后的值），可以证明信息没有被修改过。hash值一般都会加密后（也就是签名）再和信息一起发送，以保证这个hash值不被修改。")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),r("p",[t._v("下面我按步骤，尽可能详细的描述")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),r("p",[t._v("这里面涉及到三组密钥：")]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),r("p",[t._v("所以相比HTTP，HTTPS 传输更加安全")]),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),r("p",[t._v("综上所述，相比 HTTP 协议，HTTPS 协议增加了很多握手、加密解密等流程，虽然过程很复杂，但其可以保证数据传输的安全。所以在这个互联网膨胀的时代，其中隐藏着各种看不见的危机，为了保证数据的安全，维护网络稳定，建议大家多多推广HTTPS。")]),t._v(" "),t._m(14),t._v(" "),r("ol",[r("li",[r("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/27395037",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTPS系列干货（一）：HTTPS 原理详解\n"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/25976060",target:"_blank",rel:"noopener noreferrer"}},[t._v("看完还不懂HTTPS我直播吃翔"),r("OutboundLink")],1)])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"https"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#https","aria-hidden":"true"}},[this._v("#")]),this._v(" https")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"加密算法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#加密算法","aria-hidden":"true"}},[this._v("#")]),this._v(" 加密算法")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"对称加密"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#对称加密","aria-hidden":"true"}},[this._v("#")]),this._v(" 对称加密")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"非对称加密"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#非对称加密","aria-hidden":"true"}},[this._v("#")]),this._v(" 非对称加密")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"哈希算法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#哈希算法","aria-hidden":"true"}},[this._v("#")]),this._v(" 哈希算法")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"数字签名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数字签名","aria-hidden":"true"}},[this._v("#")]),this._v(" 数字签名")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"https原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#https原理","aria-hidden":"true"}},[this._v("#")]),this._v(" https原理")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://i.loli.net/2018/12/26/5c2390c7e3e47.png",alt:"Screen Shot 2018-12-26 at 10.30.34 PM.png"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ol",[r("li",[r("p",[t._v("client向server索要一个"),r("strong",[t._v("非对称加密的公钥")]),t._v("，用处是加密对称加密的密钥（也就是真正要用来加密内容的密钥）")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("服务端靠CA来保证用于加密对称加密密钥的安全")])]),t._v(" "),r("p",[t._v("server并不直接把公钥给client，而是给它"),r("strong",[t._v("CA证书")]),t._v("，证书内含有client需要的"),r("strong",[t._v("公钥")]),t._v("，但是它被CA的私钥加密过了，需要用"),r("strong",[t._v("CA的公钥")]),t._v("解密（是的，数字证书中的非对称加密的公钥的加密方式也是非对称加密，只不过这里是使用只有权威机构自己才有的私钥加密的），才能获取用于对称加密的公钥（server提供）")]),t._v(" "),r("blockquote",[r("p",[t._v("SSL证书一般包含以下内容：\n1. 证书的发布机构CA\n2. 证书的有效期\n3. 公钥\n4. 证书所有者\n5. "),r("strong",[t._v("签名")]),t._v("：证书内容的签名，先通过Hash函数计算得到证书数字摘要，然后用权威机构私钥加密数字摘要得到数字签名。用于client收到证书后，使用权威机构的公钥解密数字证书，得到证书内容（服务器的公钥）以及证书的数字签名，然后根据证书上描述的计算证书签名的方法计算一下当前证书的签名，与收到的签名作对比，如果一样，表示证书一定是服务器下发的，没有被中间人篡改过。因为中间人虽然有权威机构的公钥，能够解析证书内容并篡改，但是篡改完成之后中间人需要将证书重新加密，但是中间人没有权威机构的私钥，无法加密，强行加密只会导致客户端无法解密，如果中间人强行乱修改证书，就会导致证书内容和证书签名不匹配。所以证书签名就能判断证书是否被篡改")])])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("客户端拿到证书后不会傻傻的直接用，而是验证证书真假")])]),t._v(" "),r("p",[t._v("client在接受到server发来的SSL证书时，会对证书的"),r("strong",[t._v("真伪进行校验")]),t._v("，校验成功后才会用CA的公钥（CA公钥内置在浏览器或操作系统环境中）解密，正确解密server提供的公钥。它是这样验真伪的：")]),t._v(" "),r("blockquote",[r("p",[t._v("对照证书所有者/有效期 ---\x3e 对照CA机构 ---\x3e 取出CA公钥，对签名进行解密 ---\x3e 比对hash计算出hash值与证书签名 ---\x3e 受信任的证书，成功取出公钥")])]),t._v(" "),r("ol",[r("li",[t._v("首先浏览器读取证书中的证书所有者、有效期等信息进行一一校验")]),t._v(" "),r("li",[t._v("浏览器开始"),r("strong",[t._v("查找")]),t._v("操作系统中已内置的受信任的证书发布机构CA，与服务器发来的证书中的颁发者CA比对，用于校验证书是否为合法机构颁发")]),t._v(" "),r("li",[r("strong",[t._v("如果找不到")]),t._v("，浏览器就会报错，说明服务器发来的证书是不可信任的")]),t._v(" "),r("li",[r("strong",[t._v("如果找到")]),t._v("，那么浏览器就会从操作系统中取出颁发者CA的公钥，然后对服务器发来的证书里面的签名"),r("strong",[t._v("进行解密")])]),t._v(" "),r("li",[r("strong",[t._v("浏览器使用相同的hash算法计算出服务器发来的证书的hash值，将这个计算的hash值与证书中签名做对比")])]),t._v(" "),r("li",[t._v("对比结果一致，则证明服务器发来的证书合法，没有被冒充")]),t._v(" "),r("li",[t._v("此时浏览器就可以读取证书中的公钥，用于后续加密对称加密密钥了")])]),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("所以通过发送SSL证书的形式，既解决了公钥获取问题，又解决了黑客冒充问题，一箭双雕，HTTPS加密过程也就此形成")])])])]),t._v(" "),r("li",[r("p",[t._v("client生成一个随机数，也就是对成加密的密钥，然后用上一步获取到的server公钥加密随机数，发送回server")])]),t._v(" "),r("li",[r("p",[t._v("server用自己此前生成的非对称加密的私钥解密得到的随机数，获取真正的对称加密密钥，以后client和server通信都可以愉快的用这个密钥了！")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("细节")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("对称加密的密钥：最后用于真正加密的密钥")]),this._v(" "),e("li",[this._v("CA证书内的非对称加密密钥：用来加密client生成的随机数，私钥服务器自己保存着，等client加密完发回来解密用")]),this._v(" "),e("li",[this._v("CA的密钥：私钥CA自己保存，公钥内置在各个操作系统中，主要用来加密server要传给client的公钥")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"对比http"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#对比http","aria-hidden":"true"}},[this._v("#")]),this._v(" 对比http")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ol",[r("li",[t._v("所有信息都是加密传播，黑客无法"),r("strong",[t._v("窃听")]),t._v("；")]),t._v(" "),r("li",[t._v("具有校验机制，一旦被"),r("strong",[t._v("篡改")]),t._v("，通信双方会立刻发现；")]),t._v(" "),r("li",[t._v("配备身份证书，防止身份被"),r("strong",[t._v("冒充")]),t._v("；")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[this._v("#")]),this._v(" 总结")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"参考与拓展"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考与拓展","aria-hidden":"true"}},[this._v("#")]),this._v(" 参考与拓展")])}],!1,null,null,null);s.options.__file="HTTPS通信机制.md";e.default=s.exports}}]);