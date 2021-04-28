const defaultState = {
    inputValue:'',
    todoList:[],
    tableList:[],
}
export default (state = defaultState,action) => {
    if( action.type === 'change_input_value' ){
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if( action.type === 'add_item' ){
        const newState = JSON.parse(JSON.stringify(state))
        if(newState.inputValue != ''){
            newState.todoList.push(newState.inputValue)
            newState.inputValue = ''
            return newState
        }
       
    }
    if( action.type === 'delete_item' ){
        const newState = JSON.parse(JSON.stringify(state))
        newState.todoList.splice(action.index,1)
        return newState
    }
    // 储存list
    if( action.type === 'get_data_success' ){
        console.log('2-1')
        console.log(action)
        const newState = JSON.parse(JSON.stringify(state))
        newState.tableList = action.value;
        console.log('newState.tableList',newState.tableList)
        return newState
    }
    return state 
}