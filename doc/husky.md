### 概述

在代码提交时难免有为修改到的地方没有进行格式化或者规范化操作，如果直接更新上去可能会为代码逻辑埋下隐患，所以可以在项目中使用 husky 进行代码格式规范化。

### 基本使用

（1）安装 可以使用官方包工具进行初始化操作，首先可以使用： 安装 husky `npm i husky` `npx husky-init` 初始化完成后，会自动在项目的 package.json 文件中生成相关指令 ` "prepare": "husky"`

然后在根目录下生成.husky 文件夹，里面会生成 husky 提交过程中的各项钩子，如 pre-commit，就是在 git commit 提交时触发，所以可以在 pre-commit 文件中定义格式验证指令：

```
#!/usr/bin/env sh

npm run lint-staged
```

\*一般用到的钩子就是 pre-commit、 commit-msg

（2）lint-staged，暂存区格式验证 但是在代码提交时我们不一定需要对所有的文件格式都进行验证，可能只需要对提交的内容进行格式验证，所以需要借助 lint-staged `npm intsall lint-staged ` 在 package.json 文件中配置：

```
"scripts": {
    ...
    "lint-staged": "lint-staged"
},
"lint-staged": {
    "src/**": [
        "echo 'begin to lint staged ts or tsx file'",
        "eslint --fix .ts,.vue src"
    ]
}
```

安装后，在执行 git commit 提交前，会先对暂存区的代码进行格式检测。

（3）commitizen，git msg 格式验证 安装依赖

```
npm i @commitlint/config-conventional@12.1.4 @commitlint/cli@12.1.4 -D
```

### ![](https://qn-kms.yolanda.hk/uploads/c6abc268-89e3-4d56-9ff0-d8c8f66e58a3/630183e4-261e-4c30-93c0-403c00251d85/image.png " =257x344")
