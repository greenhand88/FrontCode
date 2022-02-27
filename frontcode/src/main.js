import { createApp } from 'vue'
import App from './App.vue'
import ElementUI from './plugins/element';
import router from './router'

// 使用elementUI
//createApp(App).mount('#app');

createApp(App).use(router).use(router).use(router).mount('#app');
export default (app) => {
    app.use(ElementUI)
}