import { createRouter, createWebHistory } from 'vue-router';
import RepliesView from '@/views/RepliesView.vue';
import TrashView from '@/views/TrashView.vue';
import HighPriority from '@/views/HighPriority.vue';
import ContactsView from '@/views/ContactsView.vue';
import ContactDetailView from '@/views/ContactDetailView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ContactsView,
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
      name: 'contacts',
      component: ContactsView,
    },
    {
      path: '/contact/:id',
      name: 'contact',
      component: ContactDetailView,
    },
  ],
});

export default router;
