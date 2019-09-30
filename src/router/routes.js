
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
  },
  {
    path: '/campanha_embalagem',
    component: () => import('layouts/Default.vue'),
    children: [
      { path: '', component: () => import(/* webpackChunkname: "index" */ 'pages/campanha_embalagem.vue'), name: 'camapanh' }
    ]
  },
  {
    path: '/campanha_pet',
    component: () => import('layouts/Default.vue'),
    children: [
      { path: '', component: () => import(/* webpackChunkname: "index" */ 'pages/campanha_acao_marketing.vue'), name: 'pet' }
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
