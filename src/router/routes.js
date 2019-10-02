
const routes = [
  {
    path: '/',
    component: () => import('layouts/Default.vue'),
    children: [
      { path: '', component: () => import(/* webpackChunkname: "progresso" */ 'pages/Progresso.vue'), name: 'progresso' }
    ]
  },
  {
    path: '/campanhas',
    component: () => import('layouts/Default.vue'),
    children: [
      { path: '', component: () => import(/* webpackChunkname: "progresso" */ 'pages/Campanhas.vue'), name: 'campanhas' },
      { path: 'vitrine', component: () => import(/* webpackChunkname: "progresso" */ 'pages/Vitrine.vue'), name: 'vitrine' }
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
  },
  {
    path: '/campanha_pet',
    component: () => import('layouts/Default.vue'),
    children: [
      { path: '', component: () => import(/* webpackChunkname: "index" */ 'pages/campanha_acao_marketing.vue'), name: 'pet' }

    ]
  },
  {
    path: '/campanha_lista',
    component: () => import('layouts/Default.vue'),
    children: [
      { path: '', component: () => import(/* webpackChunkname: "index" */ 'pages/items_campanhas.vue'), name: 'lista' }

    ]
  },
  {
    path: '/interna',
    component: () => import('layouts/Default.vue'),
    children: [
      { path: '', component: () => import(/* webpackChunkname: "index" */ 'pages/campanha_interna.vue'), name: 'interna' }

    ]
  },
  {
    path: '/acoes',
    component: () => import('layouts/Default.vue'),
    children: [
      { path: '', component: () => import(/* webpackChunkname: "index" */ 'pages/acoes_marketing.vue'), name: 'interna' }

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
