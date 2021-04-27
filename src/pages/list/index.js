import React,{Fragment} from 'react'
import { Table, Tag, Space } from 'antd';
import { getArticleList } from "../../server/api/list";
class List extends React.Component {
    constructor(props){
        super(props)
        this.state={
            content:'this is list page',
            tableData:[]
        }
    }
    componentDidMount() {
        getArticleList('123').then(
           (res) => {
               console.log("get article response:", res);
               this.setState({
                    tableData:res.data
               })
           },
          (error) => {
               console.log("get response failed!");
           }
        );
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
                  this.state.tableData ? <Table rowKey={recode => recode.acName} columns={columns} dataSource={this.state.tableData} /> : ''
                }
                
            </Fragment>
        )
    }
} 
export default List;