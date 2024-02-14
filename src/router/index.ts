import { createRouter, createWebHistory } from 'vue-router'
import SignInView from '@/page/SignIn.vue'
import SignUpView from '@/page/Signup.vue'
import DashboardView from '@/page/Dashboard.vue'
import HistoryView from '@/views/HistoryView.vue'
import WatchHistoryView from '@/views/WatchHistory.vue'
import LikeVideosView from '@/views/LikeVideos.vue'
import SettingView from '@/views/SettingView.vue'
import InfoView from '@/views/InfoView.vue'
// Dashboard Childrens
import ExploreView from '@/views/ExploreView.vue'
import TrendingView from '@/views/TrendingView.vue'
import SubscribeView from '@/views/SubscribeView.vue'
import VideoDetail from '@/page/VideoDetail.vue'
import SubscribedProfile from '@/page/SubscribedProfile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'sign-in',
      component: SignInView
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: SignUpView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      redirect: { name: 'explore' },
      children: [
        {
          path: '/explore',
          name: 'explore',
          component: ExploreView
        },
        {
          path: '/trending',
          name: 'trending',
          component: TrendingView
        },
        {
          path: '/subscribe',
          name: 'subscribe',
          component: SubscribeView
        },
        {
          path: '/history',
          name: 'history',
          component: HistoryView
        },
        {
          path: '/watch-history',
          name: 'watch-history',
          component: WatchHistoryView
        },
        {
          path: '/like-videos',
          name: 'like-videos',
          component: LikeVideosView
        },
        {
          path: '/settings',
          name: 'settings',
          component: SettingView
        },
        {
          path: '/info',
          name: 'info',
          component: InfoView
        },
        {
          path: '/video-detail/:id',
          name: 'video-detail',
          component: VideoDetail
        },
        {
          path: '/subscribed-profile/:id',
          name: 'subscribed-profile',
          component: SubscribedProfile
        }
      ]
    }
    // {
    // path: '/about',
    // name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
