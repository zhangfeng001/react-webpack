import React from 'react'
import { Route,Switch,withRouer,Link } from 'react-router-dom';

class Page3 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            content:'this is page3'
        }
    }
    render(){
        return(
            <div>
                <div>{this.state.content}</div>
            </div>
        )
    }
} 
export default Page3;