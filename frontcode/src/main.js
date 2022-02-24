/*import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')*/
import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router' //引入路由配置

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router, //使用路由配置
}).$mount('#app')