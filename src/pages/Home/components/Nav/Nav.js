import React from 'react'
import './Nav.styl'
import pic from '../../../../assets/img/1.jpg'
export default function Nav() {
    return (
        <div  >
            <div className='Nav'>
                <div className='nav'>
                    <div className='imgNav'>
                    <img src={pic} alt=""/>
                          <div className='imgNav1'>限时抢购</div>
                    </div>
                  
                </div >
                <div className='nav'>
                    <div className='imgNav'>
                        <img src={pic} alt=""/>
                        <div className='imgNav1'>积分商城</div>
                    </div>
                    
                </div>
                <div className='nav'>
                    <div className='imgNav'>
                    <img src={pic} alt=""/>
                        <div className='imgNav1'>联系我们</div>
                    </div>
                   
                </div>
                <div className='nav'>
                    <div className='imgNav'>
                    <img src={pic} alt=""/>
                        <div className='imgNav1'>商品分类</div>
                    </div>
                    
                </div>
           </div>
           
           <div>

           </div>
        </div>
    )
}
