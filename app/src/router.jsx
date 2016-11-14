import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';

// 引入单个页面（包括嵌套的子页面）
import Login from './login/login.jsx';
import Init from './main.jsx';
import Welcome from './welcome/welcome.jsx';
import Last from './last/last.jsx';
import NotFoundPage from './nofind/nofind.jsx';

// 配置路由，并将路由注入到id为init的DOM元素中
ReactDOM.render(
    <Router history={browserHistory} >        
        <Route path="/" component={Init} >
            <IndexRoute component = {Login} />
            <Route path="home" component={Welcome}/>
            <Route path="last" component={Last} />
            {/* 404 */}
            <Route path='404' component={NotFoundPage} />                    
            {/* 其他重定向到 404 */}
            <Redirect from='*' to='404' />
        </Route>
    </Router>
    , document.querySelector('#init')
)