import Vue from 'vue'
import Router from 'vue-router'
import Mine from 'components/mine/mine'
import Question from 'components/question/question'
import Safe from 'components/safe/safe'
import Recommend from 'components/recommend/recommend'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/safe',
      component: Safe
    },
    {
      path: '/question',
      component: Question
    },
    {
      path: '/',
      component: Recommend
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    }
  ]
})
