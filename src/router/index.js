// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
    ],
    
  },
  {
    path: '/home',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
    ],
    
  },
  {
    path: '/login',
    component: () => import('@/components/Login.vue'),
  },
  {
    path: '/signup',
    component: () => import('@/components/Signup.vue'),
  },
  {
    path: '/newbackpack',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'New',
        component: () => import('@/components/NewBackPack.vue'),
      },
    ],
  },
  { path: "/:pathMatch(.*)*", name: 'NotFound', component: () => import('@/components/NotFound.vue') },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {

  console.log(to);
  const token = localStorage.getItem('MochilApptoken');
  if (token || to.path === "/login" || to.path === "/signup") {
    // User is authenticated, proceed to the route
    next();
  } else {
    // User is not authenticated, redirect to login
    next('/login');
  }

});

export default router
