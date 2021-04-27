import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Button } from 'antd';
import '../../style/main.css'
import HomeChild from '../../components/Homechild'
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      pdata:'父组件传过来的数据',
      num:0
    }
    this.changePdata = this.changePdata.bind(this)
  }
  changePdata(){
    this.state.num ++ 
    this.setState({
      num:this.state.num
    })
  }
  render() {
    return (
        <div className="Home">
            <Button onClick={this.changePdata}>add</Button>
            <div>{this.state.num}</div>
            <HomeChild pdata={this.state.pdata} num={this.state.num}/>
            <div><Button className="btnLink" type="primary"><Link to='/page1'>去页面1</Link></Button></div>
            <div><Button className="btnLink" type="primary"><Link to='/page2'>去页面2</Link></Button></div>
            <div><Button className="btnLink" type="primary"><Link to='/list'>去列表</Link></Button></div>
            <div><Button className="btnLink" type="primary"><Link to='/todolist'>去todolist</Link></Button></div>
        </div>
    );
  }
  componentWillMount(){
    console.log('父componentWillMount')
  }
  componentDidMount(){
    console.log('父componentDidMount')
  }
  
  shouldComponentUpdate(){
    console.log('父shouldComponentUpdate')
    return true
  }
  componentDidUpdate(){
    console.log('父componentDidUpdate')
  }
}
 
export default App;