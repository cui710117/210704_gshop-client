/* 
包含n个间接更新状态数据方法的对象
*/
import {
    reqAddress,
    reqCategorys,
    reqShops
} from '../api'
import {
    RECEIVE_ADDRESS,
    RECEIVE_SHOPS,
    RECEIVE_CATEGORYS
} from './mutations-types'
export default{

    //异步获取地址
    async getAddress({commit,state}){
        //发ajax请求
        debugger
        const {latitude,longitude} =state
        const result = await reqAddress({latitude,longitude})
        console.log(result);
        //成功后,提交mutations
        if(result.code===0){
            commit(RECEIVE_ADDRESS,result.data)
            console.log('RECEIVE_ADDRESS',RECEIVE_ADDRESS);
            console.log('result.data',result.data);
        }
    },
    //异步获取分类列表的action
    async getCategorys({commit}){
        //发ajax请求
        const result = await reqCategorys()
        //成功后,提交mutations
        if(result.code===0){
            commit(RECEIVE_CATEGORYS,result.data)
        }
    },
    //异步获取商家列表的action
    async getShops(){
         //发ajax请求
         const {latitude,longitude} =state
         const result = await reqShops({latitude,longitude})
         //成功后,提交mutations
         if(result.code===0){
             commit(RECEIVE_SHOPS,result.data)
         }
    },
}