
import {CHANGE_INPUT_VALUE, ADD_ITEM, DELETE_ITEM} from './actionTypes'
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