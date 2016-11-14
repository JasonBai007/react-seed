import React from 'react';
import './last.less';
import Sidebar from '../components/Sidebar.jsx'

/*结尾组件*/
export default class Last extends React.Component {
    constructor(props) {
        super(props);    
    }
    render() {
        return (            
            <div>
                <Sidebar />
                <div id="rightWrap">
                    <h1 className="animated flipInX" id="ege">没有彩蛋</h1>
                    <img src={require('../images/last.jpg')} width="100" id="lastPic" className="animated fadeInUp" />
                </div>
            </div>
        )
    }       
}