### 概述

在开发大型项目时，代码风格规范化很重要，统一项目组成员中所有人员的代码格式，一方面方便开发时进行代码评审，另外一方面可以一定程度上减少因为写法带来的代码 bug；

### 主要工具

首先在 vscode 中当前的代码检测中主要用到以下几种代码格式： 1、volar，主要用于代码高亮提示，开发时提供 vue3 代码的智能提示 2、Prettier ，主要用于代码的格式化以及代码风格的统一，在代码保存时自动格式化代码 3、eslint，用于代码规则的校验。与 prettier 相比更倾向于代码质量与语法错误检测 4、vetur，主要用于 vue2 代码格式化与语法提示

### vscode 统一配置

如果所有的项目都倾向于一种风格，或者团队完全统一了所有的编码风格，则可以统一配置在 vscode 的"设置"中，则每个项目中无需安装。 如配置如下： volar： 1、安装 volar 插件 2、进入项目 vue 文件，右键“使用……格式化代码”，然后再选择“配置默认格式化程序”，选择 volar，则后续自动按照 volar 进行代码格式化，但是 volar 只有最基本的缩进、对齐等功能，包括单双引号自动切换等稍微复杂一些的就不支持了。

Prettier： 1、全局安装 Prettier 插件 2、与 volar 操作流程相同，但可以在 setting 中配置代码格式：

```
/ "prettier.useEditorConfig": false,  // 是否使用editorConfig配置文件中的设置
  "prettier.semi": true, // 句尾是否填加分号
  "prettier.singleQuote": false, //是否使用单引号
  "prettier.trailingComma": "none", //禁止随时添加逗号
  "prettier.printWidth": 200, //每行代码的限制长度
  "prettier.proseWrap": "never", // 文本换行
  "prettier.bracketSpacing": true, //
  "prettier.tabWidth":true,  //配置缩进宽度
  在对象字面量的花括号内侧使用空格作为间隔
```

参照以上格式直接在 setting.json 中配置即可

eslint： 1、全局安装 eslint 插件 2、在 setting.json 中配置全局的 eslint 规则： 如果需要开启自动修复可以如下配置：

```
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.organizeImports": true // 这个属性能够在保存时，自动调整 import 语句相关顺序，能够让你的 import 语句按照字母顺序进行排列
  },
```

这样在每次保存时就会自动进行修复。

### 单独的项目中配置

由于不同的项目开发成员可能代码风格不一致，所以在项目中我们可以单独安装 Prettier 与 eslint，保证每个项目成员代码风格的一致性。

```
npm install prettier eslint
```

安装成功之后我们可以执行 `npx eslint --init` 来进行 eslint 项目的初始化，执行时会通过指令对话设定当前是否时 ts 或者 eslint 配置文件单独配置。配置完成之后，系统会自动帮我们安装库：

```
@typescript-eslint/eslint-plugin  // 在ts项目中支持eslint
@typescript-eslint/parser  // 使eslint可以对ts进行分析
eslint-plugin-vue  //专门用于检查 Vue 单文件组件的 ESLint 规则

// 以下是需要单独安装的
eslint-config-prettier  //解决prettie与eslint之间的冲突
eslint-plugin-prettier  //将 ESLint 的规则和 Prettier 的代码格式化功能结合起来
@babel/eslint-parser  // 用来是eslint对es语法等进行检测
@babel/core  //用于解析前面一个，作为依赖
```

\*[具体可参考](https://juejin.cn/post/7262588168800305210?searchId=20230812160132AADE3B8AE2FAFEA9D874)

#### .eslintrc.cjs 配置

在项目中安装依赖项之后就可以在项目中配置 eslint 相关

```
module.exports = {
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  rules: {
    'no-console': 'off',
    'no-unused-vars': 'warn',
  },
};
```

- extends: 继承了 ESLint 推荐的规则集，这里使用的是 'eslint:recommended' 规则集，它包含了一组常见的 JavaScript 规则。
- parserOptions: 用于指定 JavaScript 解析选项，这里设置了 ECMAScript 版本为 2021，并指定源代码类型为模块化（'module'）。
- env: 指定代码执行环境，这里设置了浏览器、Node.js 和 ECMAScript 2021 的环境。
- rules: 设置具体的规则配置，这里禁用了 no-console 规则（不允许使用 console）并将 no-unused-vars 规则设为警告级别（未使用的变量会产生警告）。

#### .prettierrc.cjs 配置

可以在项目中单独为 prettier 进行配置，在根目录下配置.prettierrc.cjs 文件，然后就可以进行具体配置规则的设置

```
module.exports = {
  eslintIntegration: true,
  printWidth: 120, // 一行最多 120 字符(默认80)
  tabWidth: 4, // 每个tab相当于多少个空格（默认2）
  useTabs: false, // 是否使用tab进行缩进（默认false）
  semi: true, // 行尾需要有分号(默认true)
  singleQuote: true, // 使用单引号（默认false）
  quoteProps: 'as-needed', // 对象的 key 仅在必要时用引号
  jsxSingleQuote: false, // jsx 不使用单引号，而使用双引号
  trailingComma: 'none', // 多行使用拖尾逗号（默认none）
  bracketSpacing: true, // 在对象，数组括号与文字之间加空格 "{ foo: bar }"（默认true）
  jsxBracketSameLine: false, // 多行JSX中的>放置在最后一行的结尾，而不是另起一行（默认false）
  htmlWhitespaceSensitivity: 'css', // 根据显示样式决定 html 要不要折行
  arrowParens: 'avoid', // 只有一个参数的箭头函数的参数是否带圆括号（默认avoid:添加括号）
  endOfLine: 'auto' // 行尾换行符
}
```

如果更新了之后没生效，则可以重启 vscode

#### 将.prettierrc.cjs 整合到.eslintrc 中

为了保证 prettier 的格式化与 eslint 不冲突，可以将两者整合起来，主要是步骤是：

1、安装 eslint-config-prettier

2、在.eslintrc 中配置：

```
extends: [
    ...
    'plugin:prettier/recommended'
],
...
rules: {
    'prettier/prettier': [
        'error',
        {
            eslintIntegration: true,
            printWidth: 120, // 一行最多 120 字符(默认80)
            tabWidth: 4, // 每个tab相当于多少个空格（默认2）
            useTabs: false, // 是否使用tab进行缩进（默认false）
            semi: true, // 行尾需要有分号(默认true)
            singleQuote: true, // 使用单引号（默认false）
            quoteProps: 'as-needed', // 对象的 key 仅在必要时用引号
            jsxSingleQuote: false, // jsx 不使用单引号，而使用双引号
            trailingComma: 'none', // 多行使用拖尾逗号（默认none）
            bracketSpacing: true, // 在对象，数组括号与文字之间加空格 "{ foo: bar }"（默认true）
            jsxBracketSameLine: false, // 多行JSX中的>放置在最后一行的结尾，而不是另起一行（默认false）
            htmlWhitespaceSensitivity: 'css', // 根据显示样式决定 html 要不要折行
            arrowParens: 'avoid', // 只有一个参数的箭头函数的参数是否带圆括号（默认avoid:添加括号）
            endOfLine: 'auto' // 行尾换行符
        }
    ],
    'no-multi-spaces': 'error'
}
```

等之后 eslint 的修复将采用 prettier 中的设置规则进行匹配。之后将不会报出冲突

#### extends 与 plugins 的区别

extends 与 plugins 似乎都是用来指定规则集的，但是还有区别的，plugins 一般用来扩展规则，比如让规则集在 vue、ts 等环境下生效，extends 则是指定使用的语法规则，比如 vue 中 （1）首先在 plugins 中指定： `plugins: ["vue", "@typescript-eslint", "prettier"],` 告诉 eslints 需要在 vue 环境下生效 （2）则在 extends 中引入对应的风格的约束。如使用：

```
extends: ["plugin:prettier/recommended", "plugin:vue/vue3-strongly-recommended", "plugin:vue/vue3-recommended", "plugin:vue/vue3-essential"],
```

其中 recommended、essential 表示提供的不同的代码风格。

#### 关闭系统自动格式化

如果我们在项目里面设置了 eslint 与 prettier，则无需在在系统的 setting.json 文件中另外配置，：

```
"[javascript]": {
    "editor.defaultFormatter";
    "esbenp.prettier-vscode"
},
"[vue]": {
    "editor.defaultFormatter":
    "esbenp.prettier-vscode",
},
```

等配置可以注释掉。若不注释掉，则系统还是会按照默认的配置进行。

#### 配置文档

eslint rules：<https://eslint.nodejs.cn/docs/latest/rules/>

vue-eslint rules：<https://eslint.vuejs.org/rules/>

typescript rules：<https://github.com/typescript-eslint/typescript-eslint/blob/main/.eslintrc.js>

prettier rules：<https://blog.csdn.net/yhl521112/article/details/128326492>

#### 可以采用其他既定的风格

处理我们自定义的风格外还可以使用其他较为成熟的风格，比如谷歌风格：eslint-config-google

```
npm i eslint-config-google
```

> 11

123
