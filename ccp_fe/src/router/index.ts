import { createRouter, createWebHistory } from 'vue-router';
import Main from '@/views/MainView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      component: Main,
      children: [
        {
          path: 'activities',
          name: 'Activities',
          component: () => import('@/components/Activities.vue'),
        },
        {
          path: 'activity/:id',
          name: 'ActivityDetail',
          component: () => import('@/components/ActivityDetail.vue'),
        },
        {
          path: 'addActivity',
          name: 'AddActivity',
          component: () => import('@/components/AddActivity.vue'),
        },
        {
          path: 'posts',
          name: 'Posts',
          component: () => import('@/components/Posts.vue'),
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
      meta: {
        title: '登录',
      },
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue'),
      meta: {
        title: '注册',
      },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/NotFound.vue'),
      meta: {
        title: '这页面不对吧??',
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  // 设置页面标题
  document.title = to.meta.title ? to.meta.title + ' | 校园交流平台' : '校园交流平台';

  next();
});

export default router;
