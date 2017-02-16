import React from 'react'
import Topbar from '../components/Topbar'
import { Title } from '../components/Title'

export default class User extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {        
        return (
            <div>
                <Topbar />
                {Title("用户中心")}
            </div>
        )
    }       
}