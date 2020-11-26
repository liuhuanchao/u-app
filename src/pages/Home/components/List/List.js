import React from 'react'
import {Link} from 'react-router-dom'
import './List.styl'
export default function list(props) {
    let {goods}=props
    return (
        <div>
            <div className='nav-body'>
               
               <div >
                   {
                       goods.map(item=>{
                           return(
                             
                               <Link to={"/detail?id="+item.id} className='list-item' key={item.id}>
                                     <div className='left'>
                                         <img src={item.img} alt=""/>
                                     </div>
                                     <div className='right'>
                                         <h3>{item.goodsname}</h3>
                                         <h2>&yen;{item.price}</h2>
                                         <div className='btn1'>立即抢购</div>
                                     </div>
                                    
                               </Link> 
                           )
                       })
                   }
               </div>
           </div>
        </div>
    )
}

