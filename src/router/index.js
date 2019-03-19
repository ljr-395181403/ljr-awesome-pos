import Vue from 'vue';
import Router from 'vue-router';
import pos from '@/components/page/pos';
import dianpu from '@/components/page/dianpu';
import huiyuan from '@/components/page/huiyuan';
import tongji from '@/components/page/tongji';
import shezhi from '@/components/page/shezhi';
import vuex from '@/components/page/vuex';
import weishi from '@/components/page/weishi';




Vue.use(Router);





// --------------------------------------------------------------------------------------------

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'pos',
      component: pos
    },
    {
      path: '/pos',
      name: 'pos',
      component: pos
    },
    {
      path: '/dianpu',
      name: 'dianpu',
      component: dianpu
    },
    {
      path: '/huiyuan',
      name: 'huiyuan',
      component: huiyuan
    },
    {
      path: '/tongji',
      name: 'tongji',
      component: tongji
    },
    {
      path: '/shezhi',
      name: 'shezhi',
      component: shezhi
    },
    {
      path: '/vuex',
      name: 'vuex',
      component: vuex
    },
    {
      path: '/weishi',
      name: 'weishi',
      component: weishi
    }
  ]
});

import store from "@/vuex/store";

// 全局路由守卫
router.beforeEach((to, from, next) => {
  // 如果要进入的路由是路由卫士，就判断登录状态 
  if (to.name === 'weishi') {
    if (store.state.loginState == 0) {
      router.push({ name: 'vuex' });
      next(false);
      return;
    }
  }
  next();
});
export default router;

