# Test-UI

掘金[《手摸手带你封装 Vue 组件库以及组件开发》](https://juejin.cn/column/7397431074744057891)专栏示例源码

## 代码结构

```
|-- test-ui
    |-- docs // 组件库文档
        |-- .vitepress
            |-- theme  // 主题相关（全局组件注册也在这）
            |-- config.ts  // vitepress配置文件
        |-- components // 所有组件文档
        |-- public // 静态资源
        |-- index.md // 主页
    |-- examples // 开发时用于测试的Vue示例项目
    |-- packages
        |-- components // 所有组件代码
        |-- theme-chalk // 所有组件样式、全局样式、font文件等
        |-- utils // 公共方法
    |-- typings // 全局声明
    |-- README.md
    |-- .npmrc // npm运行时配置文件
    |-- pnpm-workspace.yaml // 工作空间
    |-- package.json
    |-- pnpm-lock.yaml
```

## 代码运行

### 安装依赖

```bash
pnpm install
```

### 测试示例启动

```bash
npm run dev
```

### 文档启动

```bash
npm run docs:dev
```

### 文档打包

```bash
npm run docs:build
```
