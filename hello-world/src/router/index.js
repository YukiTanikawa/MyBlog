import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/page/Home.vue'
import About from '@/components/page/About.vue'
import Language from '@/components/page/Language.vue'
import Made from '@/components/page/Made.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/About',
      component: About
    },
    {
      path: '/Language',
      component: Language
    },
    {
      path: '/Made',
      component: Made
    }
  ]
})

