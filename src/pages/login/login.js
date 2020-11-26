import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import{ Link,NavLink} from "react-router-dom"
import './login.styl'
import { successAlert} from '../../utils/Alert'
import { reqLogin} from '../../utils/http'
export default class login extends Component {
    constructor(){
        super()
        this.state={
            user:{
                phone:'',
                password:''
            }
        }
    }
    changeUser(e,key){
        this.setState({
            user:{
                ...this.state.user,
                [key]:e.target.value
            }
        })
    }
    login(){
        reqLogin(this.state.user).then(res=>{
            if(res.data.code===200){
                successAlert(res.data.msg)
                //存用户信息
                sessionStorage.setItem("userInfo",JSON.stringify(res.data.list))
                this.props.history.push("/index")
            }
        })
    }
    render() {
        return (
            <div className='login'>
                <Header title='登录' register></Header>
                <div >
                    账号：<br/>
                    <input type="text" className='zh' onChange={(e)=>this.changeUser(e,"phone")} />
                </div>
                <div className='mima'>
                   密码：<br/>
                   <input type="text" className='se' onChange={(e)=>this.changeUser(e,"password")}/>
                </div>
                <div className='forget'>忘记密码？</div>
                <div className='btn' onClick={()=>this.login()}>登录</div>
                <Link to="/index">大首页</Link>
                <NavLink to="/index">大首页</NavLink>
            </div>
        )
    }
}

