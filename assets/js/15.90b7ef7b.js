(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{180:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("p",[t._v("本篇博文关注事件循环，任务队列等知识点XD。")]),t._v(" "),a("h1",{attrs:{id:"碎碎念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#碎碎念","aria-hidden":"true"}},[t._v("#")]),t._v(" 碎碎念")]),t._v(" "),a("p",[t._v("听多了javascript线程，异步，v8等等概念，便会很想知道javascript到底是如何利用单线程来实现异步的？在网络上逛了一阵子，感觉大多数都说的不清楚，或者说有些文章年代久远，跟不上最新的规范（es66），所以我写这篇博文，来简短的梳理下"),a("strong",[t._v("事件循环与任务队列")]),t._v("的思路！")]),t._v(" "),a("p",[t._v("在开始正文前，有一点很重要：")]),t._v(" "),a("blockquote",[a("p",[t._v("事件循环与任务队列是"),a("code",[t._v("JS")]),t._v("实现异步无阻塞极为重要的概念。这两个概念在ES5与ES6两个规范中的实现各位不同。尤其在ES6标准中，清楚的区分"),a("strong",[t._v("宏观任务队列")]),t._v("和"),a("strong",[t._v("微观任务队列")]),t._v("才能解释Promise一些看似奇怪的表现。")])]),t._v(" "),a("p",[t._v("好，认清这一点后我们开始XD。")]),t._v(" "),a("h1",{attrs:{id:"事件循环"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件循环","aria-hidden":"true"}},[t._v("#")]),t._v(" 事件循环")]),t._v(" "),a("p",[t._v("事件循环是什么？为什么要有事件循环？我们都知道V8引擎遍历脚本中每一行代码，自上而下一次执行，但是像"),a("code",[t._v("AJAX")]),t._v("请求数据这样很耗时的任务，就需要异步执行。否则主线程干等着造成浏览器假死，用户体验极差。\n"),t._v("\n而"),a("code",[t._v("JS")]),t._v("的设计者提出的方法就是事件循环，一个线程中，事件循环是唯一的，而任务队列可以拥有多个。")]),t._v(" "),a("h1",{attrs:{id:"任务队列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#任务队列","aria-hidden":"true"}},[t._v("#")]),t._v(" 任务队列")]),t._v(" "),a("p",[t._v("队列是什么？一种"),a("strong",[t._v("先进先出")]),t._v("的数据结构。队头的一项总是最先处理。任务是什么？"),a("code",[t._v("Web API")]),t._v("返回的一个个回调函数，它的存在使得"),a("code",[t._v("JS")]),t._v("主线程在空闲时抽取任务队列排在队头的任务时，知道该回调所对应的异步任务完成了，下一步就要执行该回调函数。")]),t._v(" "),a("p",[t._v("主线程可以拥有"),a("strong",[t._v("多个任务队列")]),t._v("，在ES6规范中，根据来源的不同分为"),a("code",[t._v("macro-task")]),t._v("（宏任务）与"),a("code",[t._v("micro-task")]),t._v("（微任务），在最新标准中，它们被分别称为"),a("code",[t._v("task")]),t._v("与"),a("code",[t._v("jobs")]),t._v("。任务源是什么？诸如定时器，事件，Promise，ajax等都是任务源。")]),t._v(" "),a("p",[t._v("后面我们再讨论"),a("code",[t._v("macro-task")]),t._v("（宏任务）与"),a("code",[t._v("micro-task")]),t._v("（微任务）。")]),t._v(" "),a("h1",{attrs:{id:"演示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#演示","aria-hidden":"true"}},[t._v("#")]),t._v(" 演示")]),t._v(" "),a("p",[t._v("下面我们来看事件循环到底是怎么进行的。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://camo.githubusercontent.com/054bbbb893fb49821fc1331d42e07bdd17abef81/68747470733a2f2f706963322e7a68696d672e636f6d2f38302f76322d64613037386661336561646633646234626634353539303461653036663834625f68642e6a7067",alt:"pic"}})]),t._v(" "),a("ol",[a("li",[t._v("函数调用栈：主线程运行的时候，产生堆（heap）和栈（stack）；")]),t._v(" "),a("li",[t._v("Web APIs：浏览器接口，调用栈中的代码调用各种外部API，如"),a("code",[t._v("onclick")]),t._v("由浏览器内核的"),a("code",[t._v("DOM Binding")]),t._v("模块来处理，当事件触发的时候，回调函数会排进任务队列。类似的，"),a("code",[t._v("ajax")]),t._v("则会由浏览器内核的"),a("code",[t._v("network")]),t._v("模块来处理，在网络请求完成后，将回调排进任务队列后。")]),t._v(" "),a("li",[t._v("任务队列：如上，任务队列中加入各种事件（click，load，done），且按照来源归属在各自队列中。")])]),t._v(" "),a("p",[t._v("一个具体点的栗子。比如现在打开了一个页面，里边有一段"),a("code",[t._v("<script>")]),t._v("，其中有Ajax，DOM操作等等。这段JS是在浏览器提供的全局环境（浏览器中是window）里执行的，执行中遇到函数调用时会压入执行栈。")]),t._v(" "),a("ol",[a("li",[t._v("主线程在遇到"),a("code",[t._v("Ajax")]),t._v("或是"),a("code",[t._v("setTimeout")]),t._v("这种异步操作时会交给浏览器的"),a("code",[t._v("WebAPIs")]),t._v("，然后继续执行后边的代码，直到最后执行栈为空。")]),t._v(" "),a("li",[t._v("浏览器会在异步任务完成后，排到相应的任务队列后。")]),t._v(" "),a("li",[t._v("等到主线程执行栈为空后，主线程会去异步队列抽取最先被推入的异步事件，放入执行栈中，执行其中的回调同步代码。任务队列是具有优先级的，按照优先级决定访问的先后顺序。而优先级在不同的环境中会有所不同，所以不能给出一个固定的优先级。")]),t._v(" "),a("li",[t._v("每访问一个队列，执行栈会执行完这个任务队列的所有的代码，然后再取下一个任务队列需要执行的的代码。如果在执行中遇到了当前属于任务队列的异步任务时。此次任务的返回不会直接排到当前任务队列之后。因为这属于两次不同的事件循环，会被区分开来。")])]),t._v(" "),a("p",[t._v("就这样循环执行，直到三大块全为空，这称为事件循环。")]),t._v(" "),a("h1",{attrs:{id:"宏任务与微任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#宏任务与微任务","aria-hidden":"true"}},[t._v("#")]),t._v(" 宏任务与微任务")]),t._v(" "),a("p",[t._v("看一道题：")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resolve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("reject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//2、3、1")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])]),a("p",[t._v("第一次看到上面的代码，其实会很纠结到底会按照什么顺序执行。这就涉及到ES6规范中的任务队列类别。")]),t._v(" "),a("p",[t._v("一般因为异步任务之间并不相同，因此他们的执行优先级也有区别。不同的异步任务被分为两类：微任务（micro task）和宏任务（macro task）。")]),t._v(" "),a("p",[t._v("以下事件属于宏任务：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("MessageChannel")])]),t._v(" "),a("li",[a("code",[t._v("postMessage")])]),t._v(" "),a("li",[a("code",[t._v("setImmediate")])]),t._v(" "),a("li",[t._v("网络请求"),a("code",[t._v("Ajax")])]),t._v(" "),a("li",[a("code",[t._v("setTimeout")])])]),t._v(" "),a("p",[t._v("以下事件属于微任务：")]),t._v(" "),a("ul",[a("li",[t._v("Promise()")]),t._v(" "),a("li",[t._v("nextTick队列")])]),t._v(" "),a("p",[t._v("添加了微观任务队列之后事件循环有什么变化呢？在执行栈执行的过程中会把属于微观任务队列的任务分配到相应的微观任务队列中去。而在调用栈执行空之后，主线程读取任务队列时，会"),a("strong",[t._v("先读取所有微观任务队列")]),t._v("，然后读取"),a("strong",[t._v("一个宏观任务队列")]),t._v("，"),a("strong",[t._v("再读取所有的微观任务队列")]),t._v("。如图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://kongchenglc.github.io/imgs/rwdl.png",alt:"pic"}})]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resolve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\ti"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9999")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\tconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("ul",[a("li",[t._v("脚本开始执行，最先遇到setTimeout，交给浏览器去计时，达到setTimeout限制最短计时之后，把这个任务推入setTimeout队列。")]),t._v(" "),a("li",[t._v("遇到Promise构造函数，构造函数参数执行，输出1，调用resolve改变Promise对象的状态，然后输出2。")]),t._v(" "),a("li",[t._v("Promise对象调用then方法，将这个任务推入Promise任务队列。")]),t._v(" "),a("li",[t._v("执行console.log(3)，输出3。")]),t._v(" "),a("li",[t._v("同步任务执行完可，调用栈为空读，取任务队列，按照：抽取，执行微观任务 ---\x3e 抽取，执行宏观任务 ---\x3e 抽取执行微观任务队列 .... 依次循环。\n"),a("ul",[a("li",[t._v("读取所有微观任务队列中的任务，执行这些任务指定的回调函数。执行then指定的回调函数，输出5（微观任务队列具有优先级）。")]),t._v(" "),a("li",[t._v("最后读取到setTimeout的任务，执行回调函数，输出4。")])])]),t._v(" "),a("li",[t._v("所以最后的输出顺序是1,2,3,5,4，而不是1,2,3,4,5。如果不清楚微观任务队列的执行机制，很容易将两个异步任务归为一类，将执行顺序判断错误。")])]),t._v(" "),a("h1",{attrs:{id:"小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小结","aria-hidden":"true"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),a("p",[t._v("我们只需记住当当前执行栈执行完毕时会立刻先处理所有微任务队列中的事件，然后再去宏任务队列中取出一个事件。")]),t._v(" "),a("p",[t._v("同一次事件循环中，微任务永远在宏任务之前执行。\n所以我们就很好解释上面的那段代码了。")])])}],!1,null,null,null);e.options.__file="Event_Loop和任务队列.md";s.default=e.exports}}]);