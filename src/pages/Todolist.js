import React , { Component } from 'react'
import { connect } from 'react-redux'
import {changeInputValueAction, submitInputValueAction, deleteItemAction} from '../store/actionCreators'
import {Form, Input, Button, Checkbox, List, Typography, Divider } from 'antd';
const TodoList = (props) => {
    console.log('Todolist',props);
    const { inputValue,list, changeInputValue,submitInputValue,deleteItem} = props
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };
    const formRef = React.createRef();
    const onFinish = (e) => {
        formRef.current.setFieldsValue({
            "inputValue": "",
        })
    }
    const onFinishFailed = () => {
        
    }
    return (
        <div >
            <div className="form-wrap">
                <Form
                    className='form-todolist'
                    {...layout}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    ref={formRef}
                >
                    <Form.Item
                        label="Username"
                        name="inputValue"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input onChange={changeInputValue}/>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit" onClick={submitInputValue}>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <List
                header={''}
                footer={''}
                bordered
                dataSource={list}
                renderItem={(item,index) => (
                    <List.Item onClick={ () => {deleteItem(index)}}>
                        <Typography.Text mark>[ITEM]</Typography.Text> {item}
                    </List.Item>
                )}
            />
        </div>
    )
}

// store中的数据与组件的数据做映射
const mapStateToProps = (state) => {
    return {
        inputValue:state.inputValue,
        list:state.list
    }
}
// store.dispatch , props 派发
const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(e) {
            const action = changeInputValueAction(e.target.value)
            console.log(action)
            dispatch(action)
        },
        submitInputValue(){
            const action = submitInputValueAction()
            dispatch(action)
        },
        deleteItem(index){
            const action = deleteItemAction(index)
            dispatch(action)
        }

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoList)