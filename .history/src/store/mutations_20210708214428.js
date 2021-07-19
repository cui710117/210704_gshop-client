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
    },
    [RECEIVE_ADDRESS](state,address){
        state.address=address
    },
    [RECEIVE_ADDRESS](state,address){
        state.address=address
    }
}