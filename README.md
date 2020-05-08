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

#### dist文件夹 ---> 生产发布后的静态网站文件，放在服务器里
##### css文件夹：存放css样式
##### img文件夹：存放图片资源
##### js文件夹：存放JavaScript文件
##### index.html：网站首页HTML文件
##### logo.png：网站LOGO图标

#### public文件夹 ---> 静态资源文件
---> 任何放置在 public 文件夹的静态资源都会被简单的复制，而不经过 webpack。你需要通过绝对路径来引用它们     
>├── favicon.ico    // 标签图标  
 └── index.html     // 当前项目唯一的页面  
---->推荐：[vue-cli 3.0静态资源路径问题：何时使用 public 文件夹](https://blog.csdn.net/qappleh/article/details/103005111?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-3&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-3)
 

### src文件夹 ---> 开发源代码目录
#### asset文件夹
>  存放静态资源img、css、js  
   ├── img目录     // 图片文件夹  
   ├── css目录          // 样式css文件夹  
   ├── js目录         // 脚本JavaScript文件夹  
---> asset 目录下的会经过 webpack 的 解析，好处是
> 脚本和样式表会被压缩且打包在一起，从而避免额外的网络请求。     
> 文件丢失会直接在编译时报错，而不是到了用户端才产生 404 错误。    
> 最终生成的文件名包含了内容哈希，因此你不必担心浏览器会缓存它们的老版本。    
> public 目录提供的是一个应急手段，当你通过绝对路径引用它时，留意应用将会部署到哪里。   
#### common文件夹：存放公共JS文件  
   ├── const.js     // 抽取出来的常量  
   ├── mixin.js          // 混入文件  
   ├── utils.js          // 工具类文件  
#### views目录：存放页面(视图)组件  
#####   ├── cart目录     // 购物车视图目录   
###### |    |    ├── childComps目录         // 子视图目录  
|    |    |    ├── BottomBar.vue     
|    |    |    ├── CartList.vue          
|    |    |    ├── CartListItem.vue        
|    |    |    └── CheckButton.vue        
|    |    └── Cart.vue         
#####   ├── category目录          // 分类视图目录    
###### |    |    ├── childComps目录         // 子视图目录  
|    |    |    ├── TabContent.vue     
|    |    |    ├── TabContentCategory.vue          
|    |    |    ├── TabContentDetail.vue       
|    |    |    └── TabMenu.vue        
|    |    └── Category.vue          
#####   ├── detail目录          // 详情视图目录     
###### |    |    ├── childComps目录         // 子视图目录  
|    |    |    ├── DetailBaseInfo.vue     
|    |    |    ├── DetailBottomBar.vue          
|    |    |    ├── DetailCommentInfo.vue       
|    |    |    ├── DetailGoodsInfo.vue     
|    |    |    ├── DetailNavBar.vue          
|    |    |    ├── DetailParamInfo.vue        
|    |    |    ├── DetailRecommendInfo.vue                  
|    |    |    ├── DetailShopInfo.vue                 
|    |    |    └── DetailSwiper.vue           
|    |    └── Detail.vue         
#####   ├── home目录          // 主页视图目录       
###### |    |    ├── childComps目录         // 子视图目录    
|    |    |    ├── FeatureView.vue          
|    |    |    ├── GoodsList.vue        
|    |    |    ├── GoodsListItem.vue                  
|    |    |    ├── HomeSwiper.vue                 
|    |    |    └── RecommendView.vue           
|    |    └── Home.vue         
   └── profile目录          // 用户档案视图目录         
###### |    |    ├── childComps目录         // 子视图目录                    
|    |    |    ├── ListView.vue                 
|    |    |    └── UserInfo.vue           
|    |    └── Profile.vue         
#### components目录：存放公共可复用组件文件  
#####   ├── common目录     // 可在其他项目复用的组件        
###### |    |    ├── gridView目录         // 网格视图组件目录         
|    |    |    └── GridView.vue                  
###### |    |    ├── navbar目录         // 导航栏目组件录          
|    |    |    └── NavBar.vue                     
###### |    |    ├── scroll目录         // 滚动组件目录           
|    |    |    └── Scroll.vue                    
###### |    |    ├── swiper目录         // 组件目录      
|    |    |    ├── index.js          // 脚本文件（入口）           
|    |    |    ├── Swiper.vue                       
|    |    |    └── SwiperItem.vue                     
###### |    |    └── tabbar目录         // 可复用的标签栏组件目录       
|    |    |    ├── TabBar.vue    // 可复用的标签组件目录              
|    |    |    └── TabBarItem.vue  // 可复用的标签子组件目录             
#####   └── content目录     // 本项目可复用组件        
###### |    |    ├── backTop目录         // 返回顶部组件目录          
|    |    |    └── BackTop.vue                    
###### |    |    ├── Icon目录         // 图标组件目录            
|    |    |    ├── Icon.vue                 
|    |    |    └── svg.vue                         
###### |    |    ├── mainTabbar目录         // 主标签栏组件目录            
|    |    |    └── MainTabBar.vue   // 主标签栏组件，使用了common目录/tabbar目录的标签组件               
###### |    |    └── tabControl目录         // 标签控制组件目录           
|    |    |    └── TabControl.vue             
#### network目录：存放JavaScript文件  
   ├── axios.js     // axios模块封装的网络请求脚本文件  
   ├── category.js          // 分类信息网络请求文件  
   ├── detail.js          // 详情信息网络请求文件  
   └── home.js          // 主页信息网络请求文件  
#### router目录：存放路由脚本文件（配置路由 url链接 与 页面组件的映射关系）   
   └── index.js          // Vue-router脚本文件（Vue-router的入口）  
#### store目录：存放Vuex状态文件  
   ├── actions.js     // 异步操作状态脚本文件  
   ├── getters.js          // 状态处理脚本文件  
   ├── index.js          // Vuex脚本文件（Vuex的入口）  
   └── mutations.js          // 同步操作状态脚本文件   
#### App.vue：网站根组件
#### main.js：网站全局脚本文件（项目的入口）
-----------------
