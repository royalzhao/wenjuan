import Vue from 'vue'
import ElementUI from 'element-ui'

// 全部引用，此时需要在nuxt.config.js中设置css
Vue.use(ElementUI)

// 按需引用
// import { Button } from 'element-ui'
// Vue.component(Button.name, Button)