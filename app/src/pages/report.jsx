import React from 'react'
import Topbar from '../components/Topbar'
import { Title } from '../components/Title'

export default class Report extends React.Component {
    constructor(props) {
        super(props);
    }    

    render() {        
        return (
            <div>
                <Topbar />
                { Title("子导航二") }
            </div>
        )
    }       
}