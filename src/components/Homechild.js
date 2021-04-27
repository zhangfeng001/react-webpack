import React from 'react'

class Homechild extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
        name:'this is child data'
    };
  }

  render() {
    return (
      <div style={{background:"#ccc"}}>
        <h1>Hello, world!</h1>
        <h1>{this.props.pdata}</h1>
        <h1>{this.props.num}</h1>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
  componentWillMount(){
    console.log('子componentWillMount')
  }
  componentDidMount(){
    console.log('子componentDidMount')
  }
  
  shouldComponentUpdate(nextProps, nextState){
    console.log('子shouldComponentUpdate')
    return true;
  }
  componentDidUpdate(){
    console.log('子componentDidUpdate')
  }
}
export default Homechild;