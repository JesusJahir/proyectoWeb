import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import login from '@/components/login'
import loggedIndex from '@/components/loggedIndex'
import creaCuenta from '@/components/creaCuenta'
import catalogo from '@/components/catalogo'
import product from '@/components/product'
import carrito from '@/components/carrito'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/home',
      name: 'index',
      component: index
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/loggedIndex',
      name: 'loggedIndex',
      component: loggedIndex
    },
    {
      path: '/creaCuenta',
      name: 'creaCuenta',
      component: creaCuenta
    },
    {
      path: '/catalogo',
      name: 'catalogo',
      component: catalogo
    },
    {
      path: '/product',
      name: 'product',
      component: product
    },
    {
      path: '/carrito',
      name: 'carrito',
      component: carrito
    }
  ]
})
