import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import PetsView from '@/views/PetsView.vue'
import PetView from '@/views/PetView.vue'
import AddPetView from '@/views/AddPetView.vue'
import EditPetView from '@/views/EditPetView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/pets',
      name: 'pets',
      component: PetsView
    },
    {
      path: '/pets/:id',
      name: 'pet',
      component: PetView
    },
    {
      path: '/pets/add',
      name: 'add-pet',
      component: AddPetView
    },
    {
      path: '/pets/edit/:id',
      name: 'edit-pet',
      component: EditPetView
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView
    },
  ],
})

export default router
