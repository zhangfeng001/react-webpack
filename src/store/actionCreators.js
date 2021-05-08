
import {
  CHANGE_INPUT_VALUE,
  ADD_ITEM, 
  DELETE_ITEM,
  GET_DATA_SUCCESS,
  SAVE_USER
} from './actionTypes'
import http from '../server/axios';
import { getArticleList } from '../server/api/list'
// 抛出方法到具体组件中去
export const changeInputValueAction = (value) => ({
    type:CHANGE_INPUT_VALUE,
    value:value
})
export const submitInputValueAction = () => ({
    type:ADD_ITEM
})
export const deleteItemAction = (index) => ({
    type:DELETE_ITEM,
    index
})
export const saveUserAction = (value) => ({
  type:SAVE_USER,
  value
})

//存用户信息





// 异步
export const setListAction = (value) => ({
  type:GET_DATA_SUCCESS,
  value
})
 // 先通过dispath发起一个异步， react-thunk 处理异步拿到 responseData 以后 发起一个同步dispath 更改state
export const getListAction = () => (dispatch) => {
  getArticleList().then(res => {
    console.log(res)
    dispatch(setListAction(res.data));
  })
}