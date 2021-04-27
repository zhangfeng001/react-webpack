import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index';// 引入store
import { hot } from 'react-hot-loader/root';//修改热更新
import Routes from '@router/router';
import 'antd/dist/antd.css';
const HotRoutes = hot(Routes)
const AppView = (
    <Provider store={store}>
        <HotRoutes />
    </Provider>
)
ReactDOM.render(AppView, document.getElementById("root"))