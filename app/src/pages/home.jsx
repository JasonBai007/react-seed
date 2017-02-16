import React from 'react'
import Mock from 'mockjs';
import Topbar from '../components/Topbar'
import { Title } from '../components/Title'
import { Card,Row,Col } from 'antd'
import { lineData } from '../data/data.js';
import { LineReact } from '../components/charts/LineReact'

import '../less/home.less'

let debug = 1;
if (debug) {
    Mock.mock(/getProfile/,{
        "idx|4":[{
            "key|1":['紫外线指数','穿衣指数','感冒指数','洗车指数'],
            "value|1-7":"★"
        }]        
    })    
}

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idx: []            
        }       
    }

    componentDidMount() {
        $.ajax({
            url:'getProfile'
        })
        .done(function(res) {
            let data = JSON.parse(res);
            // 需要绑定this
            this.setState({idx:data.idx})
        }.bind(this))
    }
    
    render() {        
        return (
            <div>
                <Topbar />
                { Title("首页") }
                <Card title="今日生活指数">
                    <Row gutter={16}>
                        {/*Each child in an array or iterator should have a unique "key" prop*/}
                        {this.state.idx.map((item,index) => {
                            return  (
                                <Col span="6" key={index}>
                                    <Card>{item.key}： <span className="stars">{item.value}</span></Card>
                                </Col>
                            ) 
                        })}                        
                    </Row>
                </Card>
                <LineReact data={lineData.line} />                
            </div>
        )
    }       
}