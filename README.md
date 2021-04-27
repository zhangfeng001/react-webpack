## 项目地址
```
git clone https://github.com/zhangfeng001/react-webpack.git
```

## 安装依赖
```
npm install 
```

## 启动本地服务器
```
npm run start
```

## 打包发布

```
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

  
  
