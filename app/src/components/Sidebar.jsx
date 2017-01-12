import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

// 引入Antd组件
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current:document.cookie.split(";")[0].split("=")[1]
        }
    }    
    changeCookie = (v) => {
        document.cookie = "nowKey=" + v;
    }    
    handleClick = (e) => {
        this.setState({ current: e.key });
        this.changeCookie(e.key);
        if(e.key == "home"){
            browserHistory.push('/');
        }else if(e.key == 'list'){
            browserHistory.push('list');
        }else if(e.key == 'report'){
            browserHistory.push('report');
        }else if(e.key == 'user'){
            browserHistory.push('user');
        }else if(e.key == 'setting'){
            browserHistory.push('setting');
        }
    }
    componentDidMount() {
        var now = window.location.pathname.substring(1);
        now = now === '' ? 'home' : now;
        this.changeCookie(now);
        this.setState({ current: now });
    }
    render() {
        return (
            <div id="leftMenu"> 
                <img src={require('../images/logo.png')} width="50" id="logo"/>                 
                <Menu 
                    onClick={this.handleClick}
                    theme="light"
                    mode="vertical"
                    selectedKeys={[this.state.current]}
                    style={{ width: 146 }}                    
                >
                    <Menu.Item key="home"><Icon type="home" />首页</Menu.Item> 
                    <SubMenu key="sub1" title={<span><Icon type="bar-chart" /><span>导航一</span></span>}>
                        <Menu.Item key="list">子导航一</Menu.Item>
                        <Menu.Item key="report">子导航二</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="user"><Icon type="user" />用户中心</Menu.Item>
                    <Menu.Item key="setting"><Icon type="setting" />系统配置</Menu.Item>                    
                </Menu>
                <div id="copyright">Copyright © Jason</div>                    
            </div>                
        )
    }
}