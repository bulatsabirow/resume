import './assets/css/main.css'
import 'bootstrap'
import './custom_bootstrap/bootstrap.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faGithub,
  faGitlab,
  faTelegram,
  faPython,
  faDocker,
  faJs,
  faVuejs
} from '@fortawesome/free-brands-svg-icons'
import {
  faSun,
  faMoon,
  faEnvelope,
  faArrowUpRightFromSquare
} from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { createI18n, useI18n } from 'vue-i18n'

import App from './App.vue'
import { defaultLocale, languages } from '@/i18n'
import { defineEnglishWordEnding, defineRussianWordEnding } from '@/utils/wordEnding'

library.add(
  faGithub,
  faGitlab,
  faTelegram,
  faEnvelope,
  faPython,
  faDocker,
  faJs,
  faVuejs,
  faSun,
  faMoon,
  faArrowUpRightFromSquare
)

export const i18n = createI18n({
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: defaultLocale,
  messages: languages,
  pluralRules: {
    ru: defineRussianWordEnding,
    en: defineEnglishWordEnding
  }
})
const app = createApp(App, {
  setup() {
    const { t } = useI18n()
    return { t }
  }
})

app.use(createPinia())
app.use(router)
app.use(i18n)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
