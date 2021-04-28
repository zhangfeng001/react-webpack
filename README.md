## 项目地址
```
git clone https://github.com/zhangfeng001/react-webpack.git
```

## 安装依赖
```
npm install 
```

## 命令
```
npm run start 
npm run build
```

## 项目搭建

- 使用webpack搭建，非脚手架，
- 参考 https://www.cnblogs.com/Jacob98/p/14458896.html
  
## 主要功能
-  [x]  react-router全局路由管理
-  [x]  react-redux全局状态管理
-  [x]  axios请求封装
-  [x]  react热更新
-  [x]  webpack打包配置
-  [x]  antd-UI组件
-  [x]  开发与正式环境配置
-  [x]  左侧折叠菜单实现

## 生命周期新旧
- 16版本之前生命周期
![16版本之前生命周期](https://upload-images.jianshu.io/upload_images/5287253-315eac1c26082f08.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp "16版本之前生命周期")

   - init constructor(){super()}
   - componentWillMount
   - render()
   - componentDidMount()
   - componentWillReceiveProps()
   - shouldComponentUpdate()
   - componentWillUpdate()
   - render()
   - componentDidUpdate()
   - componentWillUnMount()

- React v16.4+ 的生命周期图
![16.4版本之前生命周期](https://upload-images.jianshu.io/upload_images/5287253-19b835e6e7802233.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp "16.4版本之前生命周期")
- 除了shouldComponentUpdate，其他在render函数之前的所有函数（componentWillMount，componentWillReceiveProps，componentWillUpdate）都被getDerivedStateFromProps替代。
   - getDerivedStateFromProps前面要加上static保留字，声明为静态方法，不然会被react忽略掉
   - this 为 undefined
- getSnapshotBeforeUpdate() 被调用于render之后，可以读取但无法使用DOM的时候
 - 参考 https://www.jianshu.com/p/514fe21b9914


## 项目目录

    |-- .gitignore                    //忽略git上传
    |-- package-lock.json
    |-- package.json                  //依赖包
    |-- README.md                     //说明文档
    |-- webpack.config.js             //webpack配置文件
    |-- yarn.lock
    |-- public                        //入口html
    |   |-- index.html
    |-- src     
    |    |-- index.js                 //入口js
    |    |-- components               //公共组件
    |    |   |-- Homechild.js         
    |    |   |-- menu.js              
    |    |-- images                   //图片资源
    |    |   |-- img                  
    |    |       |-- bmw.jpg
    |    |       |-- star-sky.jpg
    |    |-- mock                     //模拟数据
    |    |   |-- menuTree.js
    |    |-- pages                    //功能页面
    |    |   |-- Todolist.js
    |    |   |-- home
    |    |   |   |-- Home.js
    |    |   |   |-- Home.scss
    |    |   |-- list
    |    |   |   |-- index.js
    |    |   |-- login
    |    |   |   |-- index.js
    |    |   |   |-- login.css
    |    |   |-- page1
    |    |   |   |-- index.js
    |    |   |-- page2
    |    |   |   |-- index.js
    |    |   |-- page3
    |    |   |   |-- index.js
    |    |   |-- test
    |    |       |-- Home.js
    |    |-- router                    //路由管理
    |    |   |-- router.js
    |    |-- server                    //异步请求API
    |    |   |-- axios.js
    |    |   |-- baseUrl.js
    |    |   |-- api
    |    |       |-- list.js
    |    |       |-- user.js
    |    |-- static                    //静态资源
    |    |   |-- 1.text
    |    |-- store                     //状态管理目录
    |    |   |-- actionCreators.js
    |    |   |-- actionTypes.js
    |    |   |-- index.js
    |    |   |-- reducer.js
    |    |-- style                     //样式目录
    |    |   |-- main.css
    |    |-- utils                     //公共js
    |        |-- auth.js

  
  
