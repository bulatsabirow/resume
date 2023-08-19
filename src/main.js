import './assets/main.css'
import "bootstrap"
import "./custom_bootstrap/bootstrap.css"

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faGithub, faGitlab, faTelegram, faPython, faDocker, faJs, faVuejs} from '@fortawesome/free-brands-svg-icons'
import {faSun, faMoon} from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {library} from '@fortawesome/fontawesome-svg-core';
import {createI18n} from 'vue-i18n';

import App from './App.vue'
import {getCookie, localeCookieName} from "../utils/cookie";
import {defaultLocale, languages} from "@/i18n";

library.add(faGithub, faGitlab, faTelegram, faEnvelope, faPython, faDocker, faJs, faVuejs, faSun, faMoon)

const i18n = createI18n({
    legacy: false,
    locale: getCookie(localeCookieName) ?? defaultLocale,
    fallbackLocale: defaultLocale,
    messages: languages,
})
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
