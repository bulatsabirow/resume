import './assets/main.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faGithub, faGitlab, faTelegram} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {library} from '@fortawesome/fontawesome-svg-core';

import App from './App.vue'

library.add(faGithub, faGitlab, faTelegram, faEnvelope)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
