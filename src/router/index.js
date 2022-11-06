import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InscriptionView from '../views/Auth/InscriptionView.vue'
import ConnexionView from '../views/Auth/ConnexionView.vue'
import DashboardView from '../views/DashboardView.vue'
import SaveMemoryBook from '../views/SaveMemoryBook.vue'
import store from '../store'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: InscriptionView,
      meta: {isGuest: true}
    },
    {
      path: '/connexion',
      name: 'connexion',
      component: ConnexionView,
      meta: {isGuest: true}
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      meta: {requireAuth: true}
    },
    {
      path: '/savememorybook',
      name: 'savememorybook',
      component : SaveMemoryBook,
      meta: {requireAuth: true}
    }
  ]
})

router.beforeEach((to,from,next) =>{
   if(to.meta.requireAuth && !store.state.user.token){
      next({name: 'connexion'});
   }else if(store.state.user.token && to.meta.isGuest){
      next({name: 'dashboard'});
   }else{
     next();
   }
});

export default router
