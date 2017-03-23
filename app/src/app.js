import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {Router,browserHistory} from 'react-router';
import { syncHistoryWithStore } from "react-router-redux";
import store from "./reduxConfig";
import routerConfig from "./router";

const history = syncHistoryWithStore(browserHistory, store);

// 利用 react-router-redux 封装好的方法进行 地址监听
history.listen(location => {
    console.log('监听到地址变化了：',location.pathname);
    let add = location.pathname.split('/')[1];
    console.log(add);
    store.dispatch({
        type:"ADDRESS_CHANGE",
        payload:add
    });
});

ReactDOM.render(
    <Provider store={store}>
        <Router history={ history } routes={routerConfig} />
    </Provider>
    , document.getElementById('init')
)