import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

import home from './pages/home/home'
Vue.component('home', home)
import user from './pages/user/user'
Vue.component('user', user)

const app = new Vue({
	...App
})
app.$mount()
