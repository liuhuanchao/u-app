import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import "./assets/css/reset.css"
import "./assets/js/rem"

//配置路由模式 HashRouter：hash模式 BrowserRouter：history模式
import { HashRouter,BrowserRouter} from 'react-router-dom'
ReactDOM.render(
 <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);


