import { createStore } from 'redux'
import reducer from './reducer'
const store = createStore(reducer)
export default store ;//将store注入到根组件 index.js