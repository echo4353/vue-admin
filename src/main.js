import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './config'
import i18n from '@/i18n'
// ElementPlusIconsVue注册
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 导入全局样式
import './styles/index.scss'
// 导入 svgIcon
import installIcons from '@/icons'
// filter
import installFilter from '@/filter'
// 导入路由鉴权
import './permission'
// 指令
import installDirective from '@/directives'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
installIcons(app)
installFilter(app)
installDirective(app)

app.use(ElementPlus)
app.use(i18n)
app.use(store).use(router).mount('#app')
