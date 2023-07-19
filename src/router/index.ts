import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const views = import.meta.glob('@/views/*/*')

const routes = Object.entries(views).map(v=>{
  const [key,value] = v
  const name = key.split('/')[3]
  return {
    path:`/${name}`,
    name:name,
    component:value
  }
})


// console.log(routes);


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
