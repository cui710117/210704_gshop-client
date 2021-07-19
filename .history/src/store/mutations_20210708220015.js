/* 
包含n个直接更新状态数据方法的对象
*/
import {
    RECEIVE_SHOPS,
    RECEIVE_CATEGORYS,
    RECEIVE_ADDRESS
} from './mutations-types'
export default{
    [RECEIVE_ADDRESS](state,address){
        state.address=address
        console.log(state.address.name);
    },
    [RECEIVE_CATEGORYS](state,categorys){
        state.categorys=categorys
    },
    [RECEIVE_SHOPS](state,shops){
        state.shops=shops
    }
}