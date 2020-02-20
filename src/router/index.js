import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/index/index.vue'),
    meta: {
      showFooter: true
    }
  },
  {
    path: '/toplist',
    name: 'toplist',
    component: () => import('@/views/toplist/TopList.vue'),
    meta: {
      showFooter: true
    },
  },
  {
    path: '/artist',
    name: 'artist',
    component: () => import('@/views/artist/Artist.vue'),
    meta: {
      showFooter: true
    }
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('@/views/search/Search.vue')
  },
  {
    path: '/artistdetail',
    name: 'artistdetail',
    component: () => import('@/views/artistDetail/ArtistDetail.vue')
  },
  {
    path: '/toplistdetail',
    name: 'toplistdetail',
    component: () => import('@/views/toplistDetail/ToplistDetail.vue')
  },
  {
    path: "/play",
    name: 'play',
    component: () => import('@/views/play/Play.vue')
  },
  {
    path:'/newsong',
    name:'newsong',
    component:()=>import('@/views/newsong/NewSong.vue')
  },
  {
    path:"/featureplaylist",
    name:'featureplaylist',
    component:()=>import('@/views/featuredplaylists/FeaturedPlaylists.vue')
  },
  {
    path:"/playlist",
    name:'playlist',
    component:()=>import('@/views/playlist/Playlist.vue')
  },
  {
    path:"/radiolist",
    name:'radiolist',
    component:()=>import('@/views/radiolist/Radiolist.vue')
  },
  {
    path:'/recommendmv',
    name:'recommendmv',
    component:()=>import('@/views/recommendMv/RecommendMv.vue')
  },
  {
    path:'/mv',
    name:'mv',
    component:()=>import("@/views/mvplay/Mvplay.vue")
  },
  {
    path:'/recommendradio',
    name:'recommendradio',
    component:()=>import('@/views/recommendRadios/RecommendRadios.vue')
  },
  {
    path:'/newalbum',
    name:'newalbum',
    component:()=>import('@/views/newAlbum/NewAlbum.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
