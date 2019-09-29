
const routes = [
  {
    path: '/campanhas',
    component: () => import('layouts/Default.vue'),
    children: [
      { path: '', component: () => import(/* webpackChunkname: "progresso" */ 'pages/Campanhas.vue'), name: 'campanhas' }
    ]
  },
  {
    path: '/progresso',
    component: () => import('layouts/Default.vue'),
    children: [
      { path: '', component: () => import(/* webpackChunkname: "index" */ 'pages/Progresso.vue'), name: 'progresso' }
    ]
  },
  {
    path: '/perfil',
    component: () => import('layouts/Default.vue'),
    children: [
      { path: '', component: () => import(/* webpackChunkname: "index" */ 'pages/Perfil.vue'), name: 'perfil' }
    ]
<<<<<<< HEAD
  },
  {
    path: '/campanha_embalagem',
    component: () => import('layouts/Default.vue'),
    children: [
      { path: '', component: () => import(/* webpackChunkname: "index" */ 'pages/campanha_embalagem.vue'), name: 'perfil' }
    ]
=======
>>>>>>> 4bc180916ec9dcf495b91ecee035095142b87c69
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
