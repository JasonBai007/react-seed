import React from 'react'
import Mock from 'mockjs';
import Topbar from '../components/Topbar'
import Title from '../components/Title'
import {Card,Row,Col} from 'antd'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'Recharts'

import '../less/home.less'
import {lineData} from '../data/data'

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
                <Card title="今日生活指数">
                    <Row gutter={16}>
                        <Col span="6">
                          <Card>紫外线指数： <span className="stars">{this.state.v1}</span></Card>
                        </Col>
                        <Col span="6">
                          <Card>穿衣指数： <span className="stars">{this.state.v2}</span></Card>
                        </Col>
                        <Col span="6">
                          <Card>感冒指数： <span className="stars">{this.state.v3}</span></Card>
                        </Col>
                        <Col span="6">
                          <Card>洗车指数： <span className="stars">{this.state.v4}</span></Card>
                        </Col>
                    </Row>
                </Card>
                <div id="chartWrap">
                    <LineChart height={300} data={lineData.line} width={1171}
                        margin={{top: 5, right: 0, left: -30, bottom: 0}}>
                        <XAxis dataKey="name"/>
                        <YAxis/>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <Tooltip/>
                        <Legend />
                        <Line type="monotone" dataKey="maxTemp" stroke="#8884d8" activeDot={{r: 8}}/>
                        <Line type="monotone" dataKey="minTemp" stroke="#82ca9d" />
                    </LineChart>                    
                </div>
            </div>
        )
    }       
}