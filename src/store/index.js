import { createStore , applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
// 创建store的时候，第二个参数是中间件，redux-thunk提供了一个thunk中间件，用于处理异步的action
const store = createStore(reducer,applyMiddleware(thunk));
export default store ;//将store注入到根组件 index.js