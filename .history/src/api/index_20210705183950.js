/* 包含N个接口请求函数的对象模块 
函数返回promise对象
*/
//import ajax from "./ajax";
// [1、根据经纬度获取位置详情](#1根据经纬度获取位置详情)<br/>
export function reqAddress(latitude,longitude){
    return ajax(`/position/${latitude},${longitude}`)
}

// // [2、获取食品分类列表](#2获取食品分类列表)<br/>
// export const rqeCategory=() =>ajax('/index_category')

// // [3、根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)<br/>
// export const rqeShops=({latitude,longitude}) =>ajax('/shops',{latitude,longitude})