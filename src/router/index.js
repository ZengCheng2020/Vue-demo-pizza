import Vue from 'vue'
import Router from 'vue-router'
import Page404 from '@/components/Page404'

// 在router文件夹中的index.js中引入各个组件，使用如下方式
const Header = () => import('@/components/Header');
const Home = () => import('@/components/Home');
const Login = () => import('@/components/Login');
const Menu = () => import('@/components/Menu');
const Register = () => import('@/components/Register');
const Admin = () => import('@/components/Admin');
const About = () => import('@/components/about/About');

//二级路由
const Contact = () => import('@/components/about/Contact');
const Delivery = () => import('@/components/about/Delivery');
const History = () => import('@/components/about/History');
const OrdingGuide = () => import('@/components/about/OrdingGuide');

//三级路由
const personName = () => import('@/components/about/contact/personName');
const personNumber = () => import('@/components/about/contact/personNumber');

//让vue使用该路由
Vue.use(Router)

// 注册组件，设置其路径
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'homeLink',
      //如果想在默认页面里面加载更多组件，那么此处要变成components，给一个对象，引入其他组件
      components: {
        default: Home,
        'ordingGuide': OrdingGuide,
        'delivery': Delivery,
        'history': History
      }
    },
    {
      path: '/header',
      name: 'headerLink',
      component: Header
    },
    {
      path: '/login',
      name: 'loginLink',
      component: Login
    },
    {
      path: '/menu',
      name: 'menuLink',
      component: Menu
    },
    {
      path: '/register',
      name: 'registerLink',
      component: Register
    },
    {
      path: '/admin',
      name: 'adminLink',
      component: Admin,
      // //路由独享守卫，只有当你点击了该组件以后，才能提示你转到登录界面
      // //beforeEnter和beforeEach是一样的使用方法
      // beforeEnter: ((to, from, next) => {
      //   if (to.path == '/login' || to.path == '/register') {
      //     next();
      //   } else {
      //     alert("还没有登录，请先登录！");
      //     next('/login');
      //   }
      // })
    },
    {
      path: '/about',
      name: 'aboutLink',
      component: About,
      redirect: '/history',
      children: [
        { path: '/contact', name: 'contactLink', component: Contact, redirect: '/personName', children: [{ path: '/personName', name: 'personNameLink', component: personName }, { path: '/personNumber', name: 'personNumberLink', component: personNumber }] },
        { path: '/delivery', name: 'deliveryLink', component: Delivery },
        { path: '/history', name: 'historyLink', component: History },
        { path: '/ordingGuide', name: 'ordingGuideLink', component: OrdingGuide },
      ]
    },
    {
      path: '*',
      name: 'page404',
      component: Page404
    },
  ],
  mode: 'history'
});


//让main.js中可以引入index.js中的路由配置信息
//将router暴露给main.js
export default router;

// //全局守卫,能够让用户
// router.beforeEach((to,from,next) =>{
//   //alert("还没有登录，请先登录！");
//   //next();
//   //to.path就是获取到你点击的页面的path，然后进行判断，是不是登录和注册页面
//   //如果是，可以进行next()，如果不是，进行友好提示并跳转到login页面
//   if(to.path == '/login' || to.path == '/register'){
//     next();
//   }else{
//     alert("还没有登录，请先登录！");
//     next('/login');
//   }
// })

// 后置钩子,进入组件里面后就会弹出来的提示
// router.afterEach((to,from) =>{
//   alert("after each");
// })

