import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import querystring from 'querystring'
import { reqDetail} from '../../utils/http'
import Info from './components/Info/Info'
export default class detail extends Component {
    constructor(){
        super()
        this.state={
            detail:{},
            isshow:false
        }
        this.des=React.createRef()
    }
    componentDidMount(){
         let str=this.props.location.search;
         let result=querystring.parse(str.slice(1))
         reqDetail(result.id).then(res=>{
             let list=res.data.list[0]
             list.specsattr=JSON.parse(list.specsattr)
             this.setState({
                 detail:list
             },()=>{
                 this.des.current.innerHTML=this.state.detail.description
             })
         })
         
    }
    show(){
        this.setState({
            isshow:true
        })
    }
    render() {
        let {detail}=this.state;
        return (
            <div>
                <Header back title='商品详情'></Header>
                <img src={detail.img} alt=""/>
                  {/* 商品信息 */}
                {detail.goodsname?<Info detail={detail}></Info>:null}

                  {/* 商品描述 */}
                <div ref={this.des}></div>
                <div className='btn' onClick={()=>this.show()}>加入购物车</div>
            </div>
        )
    }
}

