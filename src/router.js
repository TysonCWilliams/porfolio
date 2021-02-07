import { createRouter, createWebHashHistory } from 'vue-router'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },
  {
    path: '/about',
    name: 'About',
    component: loadPage('AboutPage')
  },
  {
    path: '/resume',
    name: 'Resume',
    component: loadPage('ResumePage')
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: loadPage('PortfolioPage')
  },
  {
    path: '/projects/bugreport',
    name: 'BugReport',
    component: loadPage('BugReportPage')
  },
  {
    path: '/projects/moonminer',
    name: 'MoonMiner',
    component: loadPage('MoonMinerPage')
  },
  {
    path: '/projects/capstone',
    name: 'Capstone',
    component: loadPage('CapstonePage')
  },
  {
    path: '/projects/taskmaster',
    name: 'TaskMaster',
    component: loadPage('TaskMasterPage')
  },
  {
    path: '/projects/inspire',
    name: 'Inspire',
    component: loadPage('InspirePage')
  },
  {
    path: '/projects/keepr',
    name: 'Keepr',
    component: loadPage('KeeprPage')
  }
]

const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})

export default router
