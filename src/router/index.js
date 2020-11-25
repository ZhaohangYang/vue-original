/*
 * 路由对象模块
 * */
import Vue from "vue";
import VueRouter from "vue-router";

const VueQuillEditor = () => import("@/view/VueQuillEditor");
const HelloWorld = () => import("@/components/HelloWorld");

//申明使用插件
Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/hello-world",
      component: HelloWorld,
      meta: {
        showFooter: true,
      },
    },
    {
      path: "/vue-quill-editor",
      component: VueQuillEditor,
      meta: {
        showFooter: true,
      },
    },
    {
      path: "/",
      redirect: "/hello-world", //系统默认页
    },
  ],
});
