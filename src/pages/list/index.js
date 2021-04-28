import React,{Fragment} from 'react'
import { connect } from 'react-redux'
import { Table, Tag, Space } from 'antd';
import { getListAction } from '../../store/actionCreators'
import store from "../../store";

class List extends React.Component {
    constructor(props){
        super(props)
        this.state={
            content:'this is list page',
        }
        
    }
    componentDidMount(){
      this.props.getMenuTreeFn();
    }
    //  我们应该在组件销毁的时候将异步方法撤销
     componentWillUnmount(){
      this.setState = (state, callback) => {
        return;
      };
     }
 
    render(){
        const columns = [
            {
              title: '姓名',
              dataIndex: 'acName',
              key: 'acName',
              render: text => <a>{text}</a>,
            },
            {
              title: 'ID',
              dataIndex: 'acId',
              key: 'acId',
            },
            {
              title: '时间',
              dataIndex: 'updateTime',
              key: 'updateTime',
            },
            {
              title: 'enabled',
              key: 'enabled',
              dataIndex: 'enabled',
            },
            {
              title: 'Action',
              key: 'action',
              render: (text, record) => (
                <Space size="middle">
                  <a>Invite {record.name}</a>
                  <a>Delete</a>
                </Space>
              ),
            },
          ];
        return(
            <Fragment>
                {
                  this.props.tableList ? <Table rowKey={recode => recode.acName} columns={columns} dataSource={this.props.tableList} /> : ''
                }
                
            </Fragment>
        )
    }
} 

// store中的数据与组件的数据做映射
const mapStateToProps = (state) => {
  return {
    tableList:state.tableList
  }
}
// store.dispatch , props 派发
const mapDispatchToProps = (dispatch) => {
  return {
    getMenuTreeFn: () => dispatch(getListAction()) 
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(List)