import { createRouter, createWebHashHistory } from 'vue-router'
import home from "@/views/mainIndex.vue";

const routes = [
  {path:"/" , component :home }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
