import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Child from '@/components/Child'
import Parent from '@/components/Parent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Child',
      name: 'Child',
      component: Child
    },
    {
      path: '/Parent',
      name: 'Parent',
      component: Parent
    }
  ]
})
