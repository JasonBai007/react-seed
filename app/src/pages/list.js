import React from 'react'
// import Mock from 'mockjs';
import Topbar from '../components/Topbar'
import { Title } from '../components/Title'
import { Table, Icon, Tooltip } from 'antd'


import { connect } from "react-redux";
import { createSelector } from "reselect";
import { 
    action_list_requestList,
    action_list_destoryList
} from '../reduxAction/actionList';

import '../less/list.less';

// let debug = 1;
// if (debug) {
//     Mock.mock(/getTableData/,{
//         "data|121-140": [{
//             "key|+1":1,
//             "name":"@name",
//             "sex|1":["男","女"],
//             "age":"@integer(22, 60)",
//             "email":"@email"
//         }]
//     })    
// }

class Chart extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         tData: []
    //     }        
    // }
    componentDidMount() {
        console.log('List 的 this.props:',this.props);
        // 数据初始化
        const {getListData} = this.props;
        getListData();   
        // $.ajax({
        //     url:'getTableData'            
        // })
        // .done(function(res) {
        //     let data = JSON.parse(res);
        //     // 需要绑定this
        //     this.setState({
        //         tData:data.data
        //     })
        // }.bind(this))
    }
    componentWillUnmount(){
        const {destoryList} = this.props;
        destoryList();
    }
    render() {   
        const { listData } = this.props;
        // 设置列
        const columns = [{
          title: '姓名',
          dataIndex: 'name',
          key: 'name',
        }, {
          title: '性别',
          dataIndex: 'sex',
          key: 'sex',
        }, {
          title: '年龄',
          dataIndex: 'age',
          key: 'age',
        }, {
          title: '邮箱',
          dataIndex: 'email',
          key: 'email',
          render: (text) => ( <a href={text} target="_blank">{text}</a> )
        }, {
          title: '操作',
          dataIndex: 'handle',
          key: 'handle',
          // 生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引
          render: 
            (t,r,i) => (
                <span>
                    <Tooltip title="编辑"><Icon type="edit" style={{color:'#3dbd7d'}} /></Tooltip>&nbsp;&nbsp;
                    <Tooltip title="切换性别"><Icon type="retweet" style={{color:'#49a9ee'}} /></Tooltip>&nbsp;&nbsp;
                    <Tooltip title="删除"><Icon type="delete" style={{color:'#FD5B5B'}}/></Tooltip>
                </span>
            )
        }];

        // 设置行选择
        const rowSelection = {
          onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
          },
          onSelect: (record, selected, selectedRows) => {
            console.log(record, selected, selectedRows);
          },
          onSelectAll: (selected, selectedRows, changeRows) => {
            console.log(selected, selectedRows, changeRows);
          },
          getCheckboxProps: record => ({
            disabled: record.name === 'Disabled User'
          }),
        };

        // 设置分页
        const pagination = {
          size:"default",
          showQuickJumper:true,
          // total: this.state.tData.length,
          total: listData.tData.length,
          showSizeChanger: true,
          onShowSizeChange: (current, pageSize) => {
            console.log('Current: ', current, '; PageSize: ', pageSize);
          },
          onChange: (current) => {
            console.log('Current: ', current);
          },
        };     
        return (
            <div>
                <Topbar />
                { Title("子导航一(表格)") }
                <Table 
                    size="small"
                    rowSelection={rowSelection}
                    /*dataSource={this.state.tData} */
                    dataSource={listData.tData}
                    columns={columns}
                    pagination={pagination} 
                />
            </div>
        )
    }       
}

// 使用 reselect 库优化 redux 
const reSelect = state => createSelector(
    state => state,
    state => {
        return {
            listData:state.reducerList
        }
    }
)

const mapDispatchToProps = dispatch => {
    return {
        getListData:(...args) => dispatch(action_list_requestList(...args)),
        destoryList:(...args) => dispatch(action_list_destoryList(...args))
    }
}

export default connect(
    // mapStatesToProps,
    reSelect,
    mapDispatchToProps
)(Chart);