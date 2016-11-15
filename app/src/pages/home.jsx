import React from 'react'
import Topbar from '../components/Topbar'
import Title from '../components/Title'

export default class Home extends React.Component {
    
    render() {
        let colorStyle = {
            textAlign: 'center',
            fontSize: 70,
            width: 200,
            margin: '16% auto',
        }
        return (
            <div>
                <Topbar />
                <Title name="首页" />
                <h1 className="animated rotateIn" id="welcome" style={colorStyle}>你&nbsp;好</h1>
            </div>
        )
    }       
}