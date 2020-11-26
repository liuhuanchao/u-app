import axios from 'axios'
import qs from 'qs'
import { successAlert} from '../utils/Alert'
axios.interceptors.response.use(res=>{
    console.log("本次请求地址:"+res.config.url);
    console.log(res);
     //统一处理失败
     if (res.data.code !== 200) {
        successAlert(res.data.msg)
    }
    return res
})
//首页商品数据
export const reqHomeGoods = () => {
    return axios({
        url: "/api/getindexgoods",
        method: "get"
    })
}
//注册
export const reqRegister = (user) => {
    return axios({
        url: "/api/register",
        method: "post",
        data: qs.stringify(user)
    })
}
//登录
export const reqLogin=(user)=>{
    return axios({
        url:'/api/login',
        method:'post',
        data:qs.stringify(user)
    })
}

//首页商品banner
export const reqHomeBanner = () => {
    return axios({
        url: "/api/getbanner",
        method: "get"
    })
}
//商品详情
export const reqDetail = (id) => {
    return axios({
        url: "/api/getgoodsinfo",
        method: "get",
        params:{
            id:id
        }
    })
}
//分类
export const reqCate=()=>{
    return axios({
        url:"/api/getcatetree",
        method:"get"
    })
}
//分类商品
export const reqCateGoods=(id)=>{
    return axios({
        url:"/api/getgoods",
        method:'get',
        params:{
            fid:id
        }
    })
}
