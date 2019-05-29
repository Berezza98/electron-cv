import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/pages/Home.vue';
import BaseInfo from '../components/pages/BaseInfo.vue';
import Education from '../components/pages/Education.vue';
import Experience from '../components/pages/Experience.vue';
import Courses from '../components/pages/Courses.vue';
import Languages from '../components/pages/Languages.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/baseinfo',
      component: BaseInfo
    },
    {
      path: '/education',
      component: Education
    },
    {
      path: '/experience',
      component: Experience
    },
    {
      path: '/courses',
      component: Courses
    },
    {
      path: '/languages',
      component: Languages
    },
  ]
})
