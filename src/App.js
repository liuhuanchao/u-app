//路由出口
import React from 'react'
//定义路由规则
import {Switch, Route,Redirect} from 'react-router-dom'
import index from './pages/index/index'
import detail from './pages/detail/detail'
import list from './pages/list/list'
import login from './pages/login/login'
import register from './pages/register/register'
import "./App.styl"
export default function App() {
  return (
    <div className='app'>
      {/* 一级路由出口 */}
      <Switch>
        <Route path='/login' component={login}></Route>
        <Route path='/register' component={register}></Route>
        <Route path='/index' component={index}></Route>
        <Route path='/detail' component={detail}></Route>
        <Route path='/list/:name/:id' component={list}></Route>
        {/* <Redirect to='/login'></Redirect> */}
      </Switch>
    </div>
  )
}
