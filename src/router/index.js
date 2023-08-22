import { createRouter, createWebHistory } from 'vue-router'
import { defaultLocale } from '@/i18n'
import { i18n } from '@/main'
import { darkLightModeCookieName, getCookie } from '@/utils/cookie'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'About',
      component: () => import('../views/ResumeView.vue')
    }
  ]
})

router.beforeEach((to, from) => {
  document.body.setAttribute('data-bs-theme', getCookie(darkLightModeCookieName) ?? 'dark')
  if (to.name === 'About') {
    if (!to.query.hasOwnProperty('lang')) {
      router.replace({ name: 'About', query: { lang: defaultLocale } })
    }
    i18n.global.locale.value = to.query.lang ?? defaultLocale
    document.documentElement.lang = String(i18n.global.locale.value);
  }
})

export default router
