import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'antd-mobile/dist/antd-mobile.css'

import './config'
import reducers from './reducers'
import Login from './container/login/login'
import Register from './container/register/register'
import AuthRoute from './component/authroute/authroute'
import BossInfo from './container/boss/bossinfo'
import GeniusInfo from './container/genius/geniusInfo'
import Dashboard from './component/dashboard/dashboard'
import './index.css'


const reduxDevtools = window.devToolsExtension?window.devToolsExtension():()=>{};
export const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  reduxDevtools
));

ReactDom.render(
  (<Provider store={store}>
    <BrowserRouter>
      <div>
      <AuthRoute></AuthRoute>
        <Switch>
          {/* 只渲染命中的第一个Router */}
          <Route path='/geniusinfo' component={GeniusInfo}></Route>
          <Route path='/bossinfo' component={BossInfo}></Route>
          <Route path='/login' component={Login}></Route>
          <Route path='/register' component={Register}></Route>
          <Route component={Dashboard}></Route>
          {/* <Redirect to='/login'></Redirect> */}
        </Switch>
      </div>
       
    </BrowserRouter>
  </Provider>),
  document.getElementById('root')
);


