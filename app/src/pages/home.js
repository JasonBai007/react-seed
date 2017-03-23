import React from 'react';
// import Mock from 'mockjs';
import Topbar from '../components/Topbar'
import { Title } from '../components/Title'
import { Card,Row,Col } from 'antd'
// import { lineData } from '../data/data.js';
import { LineReact } from '../components/charts/LineReact';

import { connect } from "react-redux";
import { createSelector } from "reselect";
import { 
    action_home_requestList,
    action_home_destoryList
} from '../reduxAction/actionHome';

import '../less/home.less'

// let debug = 1;
// if (debug) {
//     Mock.mock(/getProfile/,{
//         "idx|4":[{
//             "key|1":['紫外线指数','穿衣指数','感冒指数','洗车指数'],
//             "value|1-7":"★"
//         }]        
//     })    
// }

class Home extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         idx: []            
    //     }       
    // }
    componentDidMount() {
        console.log('Home 的 this.props:',this.props);
        // 数据初始化
        const {getListData} = this.props;
        getListData();
        // $.ajax({
        //     url:'getProfile'
        // })
        // .done(function(res) {
        //     let data = JSON.parse(res);
        //     // 需要绑定this
        //     this.setState({idx:data.idx})
        // }.bind(this))
    }
    componentWillUnmount(){
        const {destoryList} = this.props;
        destoryList();
    }
    render() { 
        const { listData } = this.props;     
        return (
            <div>
                <Topbar />
                { Title("首页") }
                <Card title="今日生活指数">
                    <Row gutter={16}>
                        {/*Each child in an array or iterator should have a unique "key" prop*/}
                        {listData.idx.map((item,index) => {
                            return  (
                                <Col span="6" key={index}>
                                    <Card>{item.key}： <span className="stars">{item.value}</span></Card>
                                </Col>
                            ) 
                        })}                        
                    </Row>
                </Card>
                <LineReact data={listData.lineData} />                
            </div>
        )
    }       
}


// const mapStatesToProps = state => {
//     return {
//         listData:state.reducerHome
//     }
// }

// 使用 reselect 库优化 redux 
const reSelect = state => createSelector(
    state => state,
    state => {
        return {
            listData:state.reducerHome
        }
    }
)

const mapDispatchToProps = dispatch => {
    return {
        getListData:(...args) => dispatch(action_home_requestList(...args)),
        destoryList:(...args) => dispatch(action_home_destoryList(...args))
    }
}

export default connect(
    // mapStatesToProps,
    reSelect,
    mapDispatchToProps
)(Home);