/* 
包含n个间接更新状态数据方法的对象
*/
import {
    reqAddress,
    reqCategory,
    reqShops
} from '../api'
export default{

    //异步获取地址
    getAddress({commit},state){
        //发ajax请求
        const {latitude,longitude} =state
        reqAddress()
        //成功后,提交mutations
    },
    //异步获取分类列表的action
    getCategorys(){

    },
    //异步获取商家列表的action
    getShops(){

    },
}