import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import RepliesView from '@/views/RepliesView.vue';
import TrashView from '@/views/TrashView.vue';
import HighPriority from '@/views/HighPriority.vue';
import ContactsView from '@/views/ContactsView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/replies',
      name: 'replies',
      component: RepliesView,
    },
    {
      path: '/trash',
      name: 'trash',
      component: TrashView,
    },
    {
      path: '/high-priority',
      name: 'prio',
      component: HighPriority,
    },
    {
      path: '/contacts',
      name: 'contacs',
      component: ContactsView,
    },
  ],
});

export default router;
