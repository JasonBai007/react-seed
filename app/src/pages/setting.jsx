import React from 'react'
import Topbar from '../components/Topbar'
import Title from '../components/Title'

export default class Setting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }        
    }

    render() {        
        return (
            <div>
                <Topbar />
                <Title name="系统配置" />
            </div>
        )
    }       
}