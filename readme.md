### 微前端

#### 特性：
将单个独立大型应用拆分成多个聚合在一起的小型应用，这些应用具备独立开发，独立运行，独立部署的功能

* 微应用可以采用不同的技术栈，支持独立开发；
* 微应用可以单独部署到不同的服务器上，支持独立部署；
* 微应用的运行可以不依赖其他微应用，支持独立运行。
  
#### 实现要点
* 微应用
    - 应用注册 发现
    - 应用挂载 卸载
* 隔离
  - js
  - css
  - 元素
* 共享
  - 资源
  - 信息
* 独立部署 独立运行 独立开发  
  
#### 方案
* NPM 将微应用打包成独立的 NPM 包，然后在主应用中安装和使用
* web Components 将微应用封装成自定义组件，在主应用中注册使用
* Module Federation 借助 Webpack 5 的 Module Federation 实现微前端
* 动态Script 在主应用中动态切换微应用的 Script 脚本来实现微前端
* iframe: 在主应用中使用 iframe 标签来加载不同的微应用
* 框架: single-spa qiankun