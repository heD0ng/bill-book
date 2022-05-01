import { createApp } from 'vue'
import App from './App.vue';
import router from './router';
import './util/rem';
import Vant from 'vant';
import 'vant/lib/index.css'; // 全局引入样式

createApp(App)
.use(router)
.use(Vant)
.mount('#app')
