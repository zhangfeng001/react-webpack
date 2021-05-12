import React from 'react'
import { HashRouter, Route,Link,Redirect,Switch } from 'react-router-dom';
import Login from '../login/index'
import TestUseState from '@pages/hook/useState/test.js'
class Page1 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            content:'this is page1'
        }
        this.handleLogin = this.handleLogin.bind(this)
    }
    handleLogin(){
        console.log('dianji')
        this.props.history.push('/')
    }
    render(){
        return(
            <div>
                <div>{this.state.content}</div>
                <div>
                    <Link to='/Page2'>去page2</Link>
                </div>
                <TestUseState/>
            </div>
        )
    }
} 
export default Page1;


