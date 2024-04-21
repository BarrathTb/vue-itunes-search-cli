/** @format */

// import 'bootstrap/dist/css/bootstrap.min.css';
import '@/scss/app.scss'
import 'bootstrap/dist/js/bootstrap.js'

import { createApp } from 'vue'
import App from './App.vue'

// only add global stuff here (like bootstrap, routers, ui)

createApp(App).mount('#app')
