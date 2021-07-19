/* 
能发送ajax请求的函数模块
函数的返回值位promis对象
1.异步得到的不再是reponse，data数据(result)
*/
import axios from "axios"

export default function ajax(url,data={},method="GET"){
    return new Promise((resolve,reject) =>{
        let promise;
        if(method==="GET"){
            //指定所有的query参数
            promise=axios.get(url,{params:data})
        }else{
            promise=axios.post(url,data)
        }
        promise.then(response =>{
            //请求成功，调用resolve
            resolve(response.data)
        }).catch(error =>{
            //请求失败调用reject
            //reject(error)
            //统一处理请求错误,外面使用async/await 不用使用try来处理错误
            alert('请求错误',error.message)
        })
    })
    
}
//请求登录
async function login(){
    const result = await ajax('/login',{name:'Tom',pwd:'123'},'POST')
}

