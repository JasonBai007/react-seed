import React from 'react'
import Topbar from '../components/Topbar'
import { Title } from '../components/Title'
import { Poem } from '../components/Poem'

export default class Setting extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {        
        return (
            <div>
                <Topbar />
                { Title("系统配置") }
                { Poem() }
            </div>
        )
    }       
}