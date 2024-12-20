import{_ as n,c as a,a2 as e,o as p}from"./chunks/framework.D1T-GOrs.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"doc/eslint.md","filePath":"doc/eslint.md"}'),t={name:"doc/eslint.md"};function l(i,s,r,o,c,u){return p(),a("div",null,s[0]||(s[0]=[e(`<h3 id="概述" tabindex="-1">概述 <a class="header-anchor" href="#概述" aria-label="Permalink to &quot;概述&quot;">​</a></h3><p>在开发大型项目时，代码风格规范化很重要，统一项目组成员中所有人员的代码格式，一方面方便开发时进行代码评审，另外一方面可以一定程度上减少因为写法带来的代码 bug；</p><h3 id="主要工具" tabindex="-1">主要工具 <a class="header-anchor" href="#主要工具" aria-label="Permalink to &quot;主要工具&quot;">​</a></h3><p>首先在 vscode 中当前的代码检测中主要用到以下几种代码格式： 1、volar，主要用于代码高亮提示，开发时提供 vue3 代码的智能提示 2、Prettier ，主要用于代码的格式化以及代码风格的统一，在代码保存时自动格式化代码 3、eslint，用于代码规则的校验。与 prettier 相比更倾向于代码质量与语法错误检测 4、vetur，主要用于 vue2 代码格式化与语法提示</p><h3 id="vscode-统一配置" tabindex="-1">vscode 统一配置 <a class="header-anchor" href="#vscode-统一配置" aria-label="Permalink to &quot;vscode 统一配置&quot;">​</a></h3><p>如果所有的项目都倾向于一种风格，或者团队完全统一了所有的编码风格，则可以统一配置在 vscode 的&quot;设置&quot;中，则每个项目中无需安装。 如配置如下： volar： 1、安装 volar 插件 2、进入项目 vue 文件，右键“使用……格式化代码”，然后再选择“配置默认格式化程序”，选择 volar，则后续自动按照 volar 进行代码格式化，但是 volar 只有最基本的缩进、对齐等功能，包括单双引号自动切换等稍微复杂一些的就不支持了。</p><p>Prettier： 1、全局安装 Prettier 插件 2、与 volar 操作流程相同，但可以在 setting 中配置代码格式：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/ &quot;prettier.useEditorConfig&quot;: false,  // 是否使用editorConfig配置文件中的设置</span></span>
<span class="line"><span>  &quot;prettier.semi&quot;: true, // 句尾是否填加分号</span></span>
<span class="line"><span>  &quot;prettier.singleQuote&quot;: false, //是否使用单引号</span></span>
<span class="line"><span>  &quot;prettier.trailingComma&quot;: &quot;none&quot;, //禁止随时添加逗号</span></span>
<span class="line"><span>  &quot;prettier.printWidth&quot;: 200, //每行代码的限制长度</span></span>
<span class="line"><span>  &quot;prettier.proseWrap&quot;: &quot;never&quot;, // 文本换行</span></span>
<span class="line"><span>  &quot;prettier.bracketSpacing&quot;: true, //</span></span>
<span class="line"><span>  &quot;prettier.tabWidth&quot;:true,  //配置缩进宽度</span></span>
<span class="line"><span>  在对象字面量的花括号内侧使用空格作为间隔</span></span></code></pre></div><p>参照以上格式直接在 setting.json 中配置即可</p><p>eslint： 1、全局安装 eslint 插件 2、在 setting.json 中配置全局的 eslint 规则： 如果需要开启自动修复可以如下配置：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;editor.codeActionsOnSave&quot;: {</span></span>
<span class="line"><span>    &quot;source.fixAll.eslint&quot;: true,</span></span>
<span class="line"><span>    &quot;source.organizeImports&quot;: true // 这个属性能够在保存时，自动调整 import 语句相关顺序，能够让你的 import 语句按照字母顺序进行排列</span></span>
<span class="line"><span>  },</span></span></code></pre></div><p>这样在每次保存时就会自动进行修复。</p><h3 id="单独的项目中配置" tabindex="-1">单独的项目中配置 <a class="header-anchor" href="#单独的项目中配置" aria-label="Permalink to &quot;单独的项目中配置&quot;">​</a></h3><p>由于不同的项目开发成员可能代码风格不一致，所以在项目中我们可以单独安装 Prettier 与 eslint，保证每个项目成员代码风格的一致性。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm install prettier eslint</span></span></code></pre></div><p>安装成功之后我们可以执行 <code>npx eslint --init</code> 来进行 eslint 项目的初始化，执行时会通过指令对话设定当前是否时 ts 或者 eslint 配置文件单独配置。配置完成之后，系统会自动帮我们安装库：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@typescript-eslint/eslint-plugin  // 在ts项目中支持eslint</span></span>
<span class="line"><span>@typescript-eslint/parser  // 使eslint可以对ts进行分析</span></span>
<span class="line"><span>eslint-plugin-vue  //专门用于检查 Vue 单文件组件的 ESLint 规则</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 以下是需要单独安装的</span></span>
<span class="line"><span>eslint-config-prettier  //解决prettie与eslint之间的冲突</span></span>
<span class="line"><span>eslint-plugin-prettier  //将 ESLint 的规则和 Prettier 的代码格式化功能结合起来</span></span>
<span class="line"><span>@babel/eslint-parser  // 用来是eslint对es语法等进行检测</span></span>
<span class="line"><span>@babel/core  //用于解析前面一个，作为依赖</span></span></code></pre></div><p>*<a href="https://juejin.cn/post/7262588168800305210?searchId=20230812160132AADE3B8AE2FAFEA9D874" target="_blank" rel="noreferrer">具体可参考</a></p><h4 id="eslintrc-cjs-配置" tabindex="-1">.eslintrc.cjs 配置 <a class="header-anchor" href="#eslintrc-cjs-配置" aria-label="Permalink to &quot;.eslintrc.cjs 配置&quot;">​</a></h4><p>在项目中安装依赖项之后就可以在项目中配置 eslint 相关</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  extends: &#39;eslint:recommended&#39;,</span></span>
<span class="line"><span>  parserOptions: {</span></span>
<span class="line"><span>    ecmaVersion: 2021,</span></span>
<span class="line"><span>    sourceType: &#39;module&#39;,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  env: {</span></span>
<span class="line"><span>    browser: true,</span></span>
<span class="line"><span>    node: true,</span></span>
<span class="line"><span>    es2021: true,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  rules: {</span></span>
<span class="line"><span>    &#39;no-console&#39;: &#39;off&#39;,</span></span>
<span class="line"><span>    &#39;no-unused-vars&#39;: &#39;warn&#39;,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>};</span></span></code></pre></div><ul><li>extends: 继承了 ESLint 推荐的规则集，这里使用的是 &#39;eslint:recommended&#39; 规则集，它包含了一组常见的 JavaScript 规则。</li><li>parserOptions: 用于指定 JavaScript 解析选项，这里设置了 ECMAScript 版本为 2021，并指定源代码类型为模块化（&#39;module&#39;）。</li><li>env: 指定代码执行环境，这里设置了浏览器、Node.js 和 ECMAScript 2021 的环境。</li><li>rules: 设置具体的规则配置，这里禁用了 no-console 规则（不允许使用 console）并将 no-unused-vars 规则设为警告级别（未使用的变量会产生警告）。</li></ul><h4 id="prettierrc-cjs-配置" tabindex="-1">.prettierrc.cjs 配置 <a class="header-anchor" href="#prettierrc-cjs-配置" aria-label="Permalink to &quot;.prettierrc.cjs 配置&quot;">​</a></h4><p>可以在项目中单独为 prettier 进行配置，在根目录下配置.prettierrc.cjs 文件，然后就可以进行具体配置规则的设置</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  eslintIntegration: true,</span></span>
<span class="line"><span>  printWidth: 120, // 一行最多 120 字符(默认80)</span></span>
<span class="line"><span>  tabWidth: 4, // 每个tab相当于多少个空格（默认2）</span></span>
<span class="line"><span>  useTabs: false, // 是否使用tab进行缩进（默认false）</span></span>
<span class="line"><span>  semi: true, // 行尾需要有分号(默认true)</span></span>
<span class="line"><span>  singleQuote: true, // 使用单引号（默认false）</span></span>
<span class="line"><span>  quoteProps: &#39;as-needed&#39;, // 对象的 key 仅在必要时用引号</span></span>
<span class="line"><span>  jsxSingleQuote: false, // jsx 不使用单引号，而使用双引号</span></span>
<span class="line"><span>  trailingComma: &#39;none&#39;, // 多行使用拖尾逗号（默认none）</span></span>
<span class="line"><span>  bracketSpacing: true, // 在对象，数组括号与文字之间加空格 &quot;{ foo: bar }&quot;（默认true）</span></span>
<span class="line"><span>  jsxBracketSameLine: false, // 多行JSX中的&gt;放置在最后一行的结尾，而不是另起一行（默认false）</span></span>
<span class="line"><span>  htmlWhitespaceSensitivity: &#39;css&#39;, // 根据显示样式决定 html 要不要折行</span></span>
<span class="line"><span>  arrowParens: &#39;avoid&#39;, // 只有一个参数的箭头函数的参数是否带圆括号（默认avoid:添加括号）</span></span>
<span class="line"><span>  endOfLine: &#39;auto&#39; // 行尾换行符</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>如果更新了之后没生效，则可以重启 vscode</p><h4 id="将-prettierrc-cjs-整合到-eslintrc-中" tabindex="-1">将.prettierrc.cjs 整合到.eslintrc 中 <a class="header-anchor" href="#将-prettierrc-cjs-整合到-eslintrc-中" aria-label="Permalink to &quot;将.prettierrc.cjs 整合到.eslintrc 中&quot;">​</a></h4><p>为了保证 prettier 的格式化与 eslint 不冲突，可以将两者整合起来，主要是步骤是：</p><p>1、安装 eslint-config-prettier</p><p>2、在.eslintrc 中配置：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>extends: [</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>    &#39;plugin:prettier/recommended&#39;</span></span>
<span class="line"><span>],</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>rules: {</span></span>
<span class="line"><span>    &#39;prettier/prettier&#39;: [</span></span>
<span class="line"><span>        &#39;error&#39;,</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            eslintIntegration: true,</span></span>
<span class="line"><span>            printWidth: 120, // 一行最多 120 字符(默认80)</span></span>
<span class="line"><span>            tabWidth: 4, // 每个tab相当于多少个空格（默认2）</span></span>
<span class="line"><span>            useTabs: false, // 是否使用tab进行缩进（默认false）</span></span>
<span class="line"><span>            semi: true, // 行尾需要有分号(默认true)</span></span>
<span class="line"><span>            singleQuote: true, // 使用单引号（默认false）</span></span>
<span class="line"><span>            quoteProps: &#39;as-needed&#39;, // 对象的 key 仅在必要时用引号</span></span>
<span class="line"><span>            jsxSingleQuote: false, // jsx 不使用单引号，而使用双引号</span></span>
<span class="line"><span>            trailingComma: &#39;none&#39;, // 多行使用拖尾逗号（默认none）</span></span>
<span class="line"><span>            bracketSpacing: true, // 在对象，数组括号与文字之间加空格 &quot;{ foo: bar }&quot;（默认true）</span></span>
<span class="line"><span>            jsxBracketSameLine: false, // 多行JSX中的&gt;放置在最后一行的结尾，而不是另起一行（默认false）</span></span>
<span class="line"><span>            htmlWhitespaceSensitivity: &#39;css&#39;, // 根据显示样式决定 html 要不要折行</span></span>
<span class="line"><span>            arrowParens: &#39;avoid&#39;, // 只有一个参数的箭头函数的参数是否带圆括号（默认avoid:添加括号）</span></span>
<span class="line"><span>            endOfLine: &#39;auto&#39; // 行尾换行符</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    &#39;no-multi-spaces&#39;: &#39;error&#39;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>等之后 eslint 的修复将采用 prettier 中的设置规则进行匹配。之后将不会报出冲突</p><h4 id="extends-与-plugins-的区别" tabindex="-1">extends 与 plugins 的区别 <a class="header-anchor" href="#extends-与-plugins-的区别" aria-label="Permalink to &quot;extends 与 plugins 的区别&quot;">​</a></h4><p>extends 与 plugins 似乎都是用来指定规则集的，但是还有区别的，plugins 一般用来扩展规则，比如让规则集在 vue、ts 等环境下生效，extends 则是指定使用的语法规则，比如 vue 中 （1）首先在 plugins 中指定： <code>plugins: [&quot;vue&quot;, &quot;@typescript-eslint&quot;, &quot;prettier&quot;],</code> 告诉 eslints 需要在 vue 环境下生效 （2）则在 extends 中引入对应的风格的约束。如使用：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>extends: [&quot;plugin:prettier/recommended&quot;, &quot;plugin:vue/vue3-strongly-recommended&quot;, &quot;plugin:vue/vue3-recommended&quot;, &quot;plugin:vue/vue3-essential&quot;],</span></span></code></pre></div><p>其中 recommended、essential 表示提供的不同的代码风格。</p><h4 id="关闭系统自动格式化" tabindex="-1">关闭系统自动格式化 <a class="header-anchor" href="#关闭系统自动格式化" aria-label="Permalink to &quot;关闭系统自动格式化&quot;">​</a></h4><p>如果我们在项目里面设置了 eslint 与 prettier，则无需在在系统的 setting.json 文件中另外配置，：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;[javascript]&quot;: {</span></span>
<span class="line"><span>    &quot;editor.defaultFormatter&quot;;</span></span>
<span class="line"><span>    &quot;esbenp.prettier-vscode&quot;</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span>&quot;[vue]&quot;: {</span></span>
<span class="line"><span>    &quot;editor.defaultFormatter&quot;:</span></span>
<span class="line"><span>    &quot;esbenp.prettier-vscode&quot;,</span></span>
<span class="line"><span>},</span></span></code></pre></div><p>等配置可以注释掉。若不注释掉，则系统还是会按照默认的配置进行。</p><h4 id="配置文档" tabindex="-1">配置文档 <a class="header-anchor" href="#配置文档" aria-label="Permalink to &quot;配置文档&quot;">​</a></h4><p>eslint rules：<a href="https://eslint.nodejs.cn/docs/latest/rules/" target="_blank" rel="noreferrer">https://eslint.nodejs.cn/docs/latest/rules/</a></p><p>vue-eslint rules：<a href="https://eslint.vuejs.org/rules/" target="_blank" rel="noreferrer">https://eslint.vuejs.org/rules/</a></p><p>typescript rules：<a href="https://github.com/typescript-eslint/typescript-eslint/blob/main/.eslintrc.js" target="_blank" rel="noreferrer">https://github.com/typescript-eslint/typescript-eslint/blob/main/.eslintrc.js</a></p><p>prettier rules：<a href="https://blog.csdn.net/yhl521112/article/details/128326492" target="_blank" rel="noreferrer">https://blog.csdn.net/yhl521112/article/details/128326492</a></p><h4 id="可以采用其他既定的风格" tabindex="-1">可以采用其他既定的风格 <a class="header-anchor" href="#可以采用其他既定的风格" aria-label="Permalink to &quot;可以采用其他既定的风格&quot;">​</a></h4><p>处理我们自定义的风格外还可以使用其他较为成熟的风格，比如谷歌风格：eslint-config-google</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm i eslint-config-google</span></span></code></pre></div><blockquote><p>11</p></blockquote><p>123</p>`,50)]))}const g=n(t,[["render",l]]);export{h as __pageData,g as default};
