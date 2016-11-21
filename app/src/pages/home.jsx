import React from 'react'
import Topbar from '../components/Topbar'
import Title from '../components/Title'
import {Card,Row,Col} from 'antd'

import '../less/home.less'

import Mock from 'mockjs';
let debug = 1;
if (debug) {
    Mock.mock(/getProfile/,{
        "v1|1-7": "★",
        "v2|1-7": "★",
        "v3|1-7": "★",
        "v4|1-7": "★"   
    })    
}

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            v1: '0%',
            v2: '0%',
            v3: '0%',
            v4: '0%'
        }       
    }

    componentDidMount() {
        $.ajax({
            url:'getProfile'
        })
        .done(function(res) {
            let data = JSON.parse(res);
            // 需要绑定this
            this.setState({
                v1:data.v1,
                v2:data.v2,
                v3:data.v3,
                v4:data.v4
            })
        }.bind(this))
    }
    
    render() {        
        return (
            <div>
                <Topbar />
                <Title name="首页" />
                <Card title="今日概况">
                   <Row gutter={16}>
                        <Col span="6">
                          <Card>指标一 <span className="stars">{this.state.v1}</span></Card>
                        </Col>
                        <Col span="6">
                          <Card>指标二 <span className="stars">{this.state.v2}</span></Card>
                        </Col>
                        <Col span="6">
                          <Card>指标三 <span className="stars">{this.state.v3}</span></Card>
                        </Col>
                        <Col span="6">
                          <Card>指标四 <span className="stars">{this.state.v4}</span></Card>
                        </Col>
                    </Row>
                </Card>
            </div>
        )
    }       
}