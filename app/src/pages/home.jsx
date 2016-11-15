import React from 'react'
import Topbar from '../components/Topbar'
import Title from '../components/Title'
import {Card} from 'antd'

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }       
    }

    componentDidMount() {
        this.setState({
            isLoading: false
        })
    }
    
    render() {        
        return (
            <div>
                <Topbar />
                <Title name="首页" />
                <Card loading = {this.state.isLoading} title="今日概况">
                   <p>blablabla</p>
                </Card>
            </div>
        )
    }       
}