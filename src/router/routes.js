
const routes = [
  {
    path: '/campanhas',
    component: () => import('layouts/Default.vue'),
    children: [
      { path: '', component: () => import(/* webpackChunkname: "progresso" */ 'pages/Campanhas.vue'), name: 'campanhas' },
      { path: 'vitrine', component: () => import(/* webpackChunkname: "progresso" */ 'pages/Vitrine.vue'), name: 'vitrine' }
    ]
  },
  {
    path: '/progresso',
    component: () => import('layouts/Default.vue'),
    children: [
      { path: '', component: () => import(/* webpackChunkname: "progresso" */ 'pages/Progresso.vue'), name: 'progresso' }
    ]
  },
  {
    path: '/perfil',
    component: () => import('layouts/Default.vue'),
    children: [
      { path: '', component: () => import(/* webpackChunkname: "perfil" */ 'pages/Perfil.vue'), name: 'perfil' }
    ]
  },
  {
    path: '/campanha_embalagem',
    component: () => import('layouts/Default.vue'),
    children: [
      { path: '', component: () => import(/* webpackChunkname: "index" */ 'pages/CampanhaEmbalagem.vue'), name: 'embalagem' }
    ]
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
