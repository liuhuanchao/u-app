import React from 'react'
import logo from '../../../../assets/img/logo.jpg'
import('./Info.styl')
export default function Info() {
    return (
        <div className='top'>
             <img src={logo} alt="" className='img1'/>
             <div className='find'>
                 寻找商品
             </div>
        </div>
    )
}
