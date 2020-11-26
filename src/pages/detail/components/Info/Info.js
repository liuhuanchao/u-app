import React from 'react'
import{ filterPrice} from '../../../../filters/index'
import './Info.styl'
export default function Info(props) {
    let {detail} =props
    return (
        <div>
            <p className='gn'>{detail.goodsname}</p>
            <div className='yj'>原价：{filterPrice(detail.market_price)}</div>
            <div className='label'>
            {detail.isnew === 1 ? <div className='new'>新品</div> : null}
            {detail.ishot === 1 ? <div className='hot'>热卖</div> : null}
            </div><br/>
            <div className='xj'>现价：{filterPrice(detail.price)}</div>
            
        </div>
    )
}
