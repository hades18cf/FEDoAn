import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
// import 'Template bootstrap'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import 'Permission router'
import '@/utils/permission'
// import 'Template element UI'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import 'Icon material'
import 'material-icons/iconfont/material-icons.css';



const forumApp = createApp(App)
forumApp.use(router)
forumApp.use(store)
forumApp.use(ElementPlus)

forumApp.mount('#app')
