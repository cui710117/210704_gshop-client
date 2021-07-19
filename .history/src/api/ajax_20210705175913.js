/* 
能发送ajax请求的函数模块
函数的返回值位promis对象

*/
import axios from "axios"

export default function ajax(url,data={},method="GET"){
    return new Promise((resolve,reject) =>{
        let promise;
        if(method==="GET"){
            //指定所有的query参数
            promise=axios.get(url,{params:data})
        }else{
            axios.post(url,data)
        }
    })
    
}


//请求登录
ajax('/login',)