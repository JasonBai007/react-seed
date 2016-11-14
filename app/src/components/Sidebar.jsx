import React from 'react';
import ReactDOM from 'react-dom';
import { Link, IndexLink } from 'react-router';

// 引入Antd组件
import { Icon } from 'antd';

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    } 
    render() {
        return (
            <div id="leftMenu"> 
                <img src={require('../images/logo.png')} width="50" id="logo"/> 
                <Link to="/home" activeClassName="active"><Icon type="home" /><span>首页</span></Link>
                <Link to="/last" activeClassName="active"><Icon type="mail" /><span>结尾页</span></Link>
                <Link to="/404" activeClassName="active"><Icon type="mail" /><span>404页</span></Link>                    
                <div id="copyright">Copyright © 白延云</div>                    
            </div>                
        )
    }
}