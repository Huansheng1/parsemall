# 解析项目

### 项目初始化，安装nodeJs相应模块
```
npm install
```

### 在线调试运行服务，本地开发测试专用
```
npm run serve
```

### 编译发布生产环境代码--->dist文件夹
```
npm run build
```

## 目录结构解析
![Image text](https://img-blog.csdnimg.cn/201911110928223.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FhcHBsZWg=,size_16,color_FFFFFF,t_70)
#### .browserslistrc文件
--->浏览器兼容配置

#### .editorconfig文件
--->代码编辑风格配置

#### .gitignore文件
--->git上传忽略文件配置

#### babel.config.js文件
--->babel配置

#### package-lock.json文件
--->锁定安装时的包的版本号，需要上传到git，保证大家的依赖包一致。锁定在你安装的这个版本，确保所有库包与你上次安装的完全一样。

#### package.json文件
--->标明自己所需要库包的版本：package.json文件只能锁定大版本，也就是版本号的第一位，并不能锁定后面的小版本

#### postcss.config.js文件
--->postcss 是帮我们后处理css ，css已经编译完成了，在stylus-loader编译成css之后，在通过postcss优化css，通过一系列组件去优化，比如以下，通过autoprefixer 添加css前缀

#### vue.config.js文件
--->vue项目的配置文件，比如定义路径别名之类的配置

#### node_modules文件夹
--->node模块和环境，不需要上传，npm install可自动根据 根目录的配置文件：package.json ，自动下载相关模块

#### dist文件夹
##### css文件夹：存放css样式
##### img文件夹：存放图片资源
##### js文件夹：存放JavaScript文件
##### index.html：网站首页HTML文件
##### logo.png：网站LOGO图标
---> 生产发布后的静态网站文件，放在服务器里

#### public文件夹
---> 任何放置在 public 文件夹的静态资源都会被简单的复制，而不经过 webpack。你需要通过绝对路径来引用它们    
---->推荐：[vue-cli 3.0静态资源路径问题：何时使用 public 文件夹](https://blog.csdn.net/qappleh/article/details/103005111?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-3&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-3)

#### asset文件夹
---> asset 目录下的会经过 webpack 的 解析，好处是
> 脚本和样式表会被压缩且打包在一起，从而避免额外的网络请求。
> 文件丢失会直接在编译时报错，而不是到了用户端才产生 404 错误。
> 最终生成的文件名包含了内容哈希，因此你不必担心浏览器会缓存它们的老版本。
public 目录提供的是一个应急手段，当你通过绝对路径引用它时，留意应用将会部署到哪里。

### src文件夹
