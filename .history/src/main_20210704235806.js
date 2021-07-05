/*
 * 入口js
 */
import Vue from 'vue'
import App from './App.vue'

new Vue({
    /* el:'#app',
    components:{
        App
    },
    template:'<App/>' */
    /* render:function(createElement){
        return createElement(App)
    } */

    render: h =>h(App)
})
