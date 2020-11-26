import React, { Component } from 'react'
import Header from "../../components/Header/Header"
import './register.styl'
import { reqRegister} from '../../utils/http'
import { successAlert} from '../../utils/Alert'
export default class Register extends Component {
    constructor(){
        super()
        this.state={
            user:{
                phone:'',
                nickname:'',
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
    submit(){
        reqRegister(this.state.user).then(res=>{
            if(res.data.code===200){
                successAlert(res.data.msg)
                this.props.history.push("/login")
            }
        })
    }
    render() {
        return (
            <div className='register'>
                <Header title="注册" back></Header>
                <div className='phone'>手机号：<br/><input type="text" className='se'
                    onChange={(e)=>this.changeUser(e,'phone')}
                /></div>
                <div className='nc'>昵称 &ensp;：<br/><input type="text" className='se'
                    onChange={(e)=>this.changeUser(e,'nickname')}
                /></div>
                <div className='mima'>密码  &ensp;：<br/><input type="text" className='se'
                    onChange={(e)=>this.changeUser(e,'password')}
                /></div>
                <div className="btn" onClick={()=>this.submit()}>注册</div>
            </div>
        )
    }
}