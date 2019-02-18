import Vue from 'vue'
import Router from 'vue-router'
import rank from '@/components/rank/rank'
import recommend from '@/components/recommend/recommend'
import search from '@/components/search/search'
import singer from '@/components/singer/singer'
import SingerDetails from '@/components/singer-detail/singer-detail'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: 'recommend'
    },
    {
      path: '/singer',
      component: singer,
      children: [
        {
          path: ':id',
          component: SingerDetails
        }
      ]
    },
    {
      path: '/rank',
      component: rank
    },
    {
      path: '/search',
      component: search
    },
    {
      path: '/recommend',
      component: recommend
    }
  ]
})
