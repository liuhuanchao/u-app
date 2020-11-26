import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import List from '../Home/components/List/List'
import { reqCateGoods} from '../../utils/http'
import './List.styl'
export default class Blist extends Component {
    constructor(){
        super()
        this.state={
            list:[]
        }
    }
    componentDidMount(){
        reqCateGoods(this.props.match.params.id).then(res=>{
            this.setState({
                list:res.data.list
            })
        })
    }
    render() {
        let{list}=this.state
        return (
            <div>
                <Header back title={this.props.match.params.name}></Header>
                <List goods={this.state.list}></List>
                
            </div>
        )
    }
}
