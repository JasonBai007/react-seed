import React from 'react'
import Topbar from '../components/Topbar'
import Title from '../components/Title'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'Recharts'

import '../less/chart.less'
import {lineData} from '../data/data'

export default class Chart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }        
    }

    render() {        
        return (
            <div>
                <Topbar />
                <Title name="图表" />
                <div id="chartWrap">
                    <LineChart height={300} data={lineData.line} width={1047}
                        margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                        <XAxis dataKey="name"/>
                        <YAxis/>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <Tooltip/>
                        <Legend />
                        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                    </LineChart>                    
                </div>
            </div>
        )
    }       
}