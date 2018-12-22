
import MSite from '../pages/MSite/MSite.vue'
import search from '../pages/Search/search.vue'
import Profile from '../pages/Profile/Profile.vue'
import Orges from '../pages/Orges/Orges.vue'

export default [
  {
    path: '/meste',
    component: MSite
  },
  {
    path: '/search',
    component: search
  },
  {
    path: '/orges',
    component: Orges
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/',
    redirect: '/msite'
  }
]
