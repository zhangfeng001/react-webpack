
import React, { Component } from 'react'
import { HashRouter, Route,Switch,withRouer } from 'react-router-dom';
import { Form, Input, Button, Checkbox,Spin } from 'antd';
import md5 from 'md5'
import './login.css'
import { login } from "../../server/api/user";



const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

class Login extends Component {
  // 初始化页面常量 绑定事件方法
  constructor(props, context) {
    super(props)
    this.state = {
      username: '',
      password: '',
      remember:true,
      showLoading:false
    }
  }
  render() {
    const onFinish = (values) => {
      console.log('Success:', values);
      this.setState({
        username: values.username,
        password: values.password,
        remember:values.remember,
        showLoading:true
      })
      login(values).then(
        (res) => {
          // if(res.success){
            this.setState({
              showLoading:false
            })
            this.props.history.push('/Home')
          // }
        },
        (error) => {
          console.log(error)
        }
      )
    };
  
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };
    return (
      <div className="login-container">
        <div className='mask'></div>

        <div className="login-main">
          <Form
              {...layout}
              name="basic"
              initialValues={{
                username: 'admin',
                password:'123456',
                remember:true
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item>
                <div className="formTitle">某某汽车管理系统</div>
              </Form.Item>
              <Form.Item
                label="Username"
                name="username"
                value={this.state.userName}
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                value={this.state.psd}
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                <Checkbox>记住密码</Checkbox>
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">登录</Button>
              </Form.Item>
            </Form>
            <div className="showLoading">
              {this.state.showLoading ? (<Spin tip="登录中...."></Spin>) : ''}
            </div>
        </div>
        }
        
      </div>
    )
  }
}
export default Login;