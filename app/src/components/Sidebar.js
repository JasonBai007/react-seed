import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Link } from 'react-router';

import { connect } from "react-redux";
import { createSelector } from "reselect";
import { 
    // action_home_requestList,
    // action_home_destoryList
} from '../reduxAction/actionHome';

// 引入Antd组件
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;



class Sidebar extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         current:document.cookie.split(";")[0].split("=")[1]
    //     }
    // }    
    changeCookie = (v) => {
        // document.cookie = "nowKey=" + v;
    }    
    handleClick = (e) => {
        // console.log("dianjile ");
        // this.setState({ current: e.key });
        // this.changeCookie(e.key);
        // if(e.key == "home"){
        //     browserHistory.push('/');
        // }else if(e.key == 'list'){
        //     browserHistory.push('list');
        // }else if(e.key == 'report'){
        //     browserHistory.push('report');
        // }else if(e.key == 'user'){
        //     browserHistory.push('user');
        // }else if(e.key == 'setting'){
        //     browserHistory.push('setting');
        // }
    }
    componentDidMount() {
        console.log('Sidebar 的 this.props:',this.props);
        // var now = window.location.pathname.substring(1);
        // now = now === '' ? 'home' : now;
        // this.changeCookie(now);
        // this.setState({ current: now });
    }
    render() {
        const { listData } = this.props;
        return (
            <div id="leftMenu"> 
                <img src={require('../images/logo.png')} width="50" id="logo"/>                 
                <Menu 
                    // onClick={this.handleClick}
                    theme="light"
                    mode="vertical"
                    selectedKeys={[listData.address]}
                    style={{ width: 146 }}                    
                >
                    <Menu.Item key="home">
                        <Link to="/">
                            <Icon type="home"></Icon>
                            <span>首页</span>
                        </Link>
                    </Menu.Item> 
                    <SubMenu key="sub1" title={<span><Icon type="bar-chart" /><span>导航一</span></span>}>
                        <Menu.Item key="list">
                            <Link to="/list">
                                <Icon type="apple"></Icon>
                                <span>子导航一</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="report">
                            <Link to="/report">
                                <Icon type="smile"></Icon>
                                <span>子导航二</span>
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                    <Menu.Item key="user">
                        <Link to="/user">
                            <Icon type="user" />
                            <span>用户中心</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="setting">
                        <Link to="/setting">
                            <Icon type="setting" />
                            <span>系统配置</span>
                        </Link>
                    </Menu.Item>                    
                </Menu>
                <div id="copyright">Copyright © Jason</div>                    
            </div>                
        )
    }
}

// 使用 reselect 库优化 redux 
const reSelect = state => createSelector(
    state => state,
    state => {
        return {
            listData:state.reducerAddress
        }
    }
)

const mapDispatchToProps = dispatch => {
    return {
        // getListData:(...args) => dispatch(action_home_requestList(...args)),
    }
}

export default connect(
    // mapStatesToProps,
    reSelect,
    mapDispatchToProps
)(Sidebar);