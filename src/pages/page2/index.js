import React from 'react'
import {  Route,Switch,withRouer,Link } from 'react-router-dom';
import UseEffect from '@pages/hook/useEffect/test.js'
class Page2 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            content:'this is page2'
        }
    }
    render(){
        return(
            <div>
                <div>{this.state.content}</div>
                <UseEffect/>
            </div>
        )
    }
} 
export default Page2;