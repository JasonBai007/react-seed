import React from 'react';
import {  Route, IndexRoute, Redirect , IndexRedirect} from 'react-router';

// 引入单个页面（包括嵌套的子页面）
import Main from './main';
import Login from './pages/login';
import Home from './pages/home';
import User from './pages/user';
import Setting from './pages/setting';
import List from './pages/list';
import Report from './pages/report';
import NotFoundPage from './pages/nofind';



// 配置路由，并将路由注入到id为init的DOM元素中
export default (
    <div>      
        <Route path="/login" component = {Login} />
        <Route path="/" component={Main} >
            <IndexRedirect  to='home' />
            <Route path="home" component={Home}/>
            <Route path="user" component={User}/>
            <Route path="setting" component={Setting}/>
            <Route path="list" component={List}/>
            <Route path="report" component={Report} />          
            {/* 404 */}
            <Route path='404' component={NotFoundPage} />                    
            {/* 其他重定向到 404 */}
            <Redirect from='*' to='404' />
        </Route>
    </div>   
)