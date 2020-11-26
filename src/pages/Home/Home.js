import React, { Component } from 'react'
import Banner from './components/banner/banner'
import Header from '../../components/Header/Header'
import Info from './components/Info/Info'
import Nav from './components/Nav/Nav'
import List from './components/List/List'
import { reqHomeGoods,reqHomeBanner} from '../../utils/http'
export default class Home extends Component {
    constructor(){
        super()
        this.state={
            goods:[],
            banner:[]
        }
    }
    componentDidMount(){
        reqHomeGoods().then(res=>{
            this.setState({
                goods:res.data.list[0].content
            })
        })
        reqHomeBanner().then(res=>{
            this.setState({
                banner:res.data.list
            })
        })
    }
    render() {
        let {goods,banner}=this.state
        return (
            <div>
                {/* <Header title='首页'></Header> */}
                {/* 信息 */}
                <Info></Info>
                {/* 轮播图 */}
                <Banner banner={banner}></Banner>
                 {/* 导航 */}
                 <Nav></Nav>
                 <List goods={goods}></List>
            </div>
        )
    }
}
