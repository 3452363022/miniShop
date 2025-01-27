import { createBrowserRouter } from "react-router";
import { lazy, Suspense } from "react";

// 路由组件
// import Home from "@/pages/Home";
// import Goods from "@/pages/Goods";
// import Community from "@/pages/Community";
import Login from "@/pages/Login";
import Layout from "@/pages/Layout";
// Fast refresh only works when a file only exports components. Move your component(s) to a separate file.

// 路由懒加载
const Goods = lazy(() => import('@/pages/Goods'))
const Community = lazy(() => import('@/pages/Community'))
const GoodsDetail = lazy(() => import('@/components/GoodsDetail'))
const Cart = lazy(() => import('@/pages/Cart'))

// 创建路由
const router = createBrowserRouter([
  {
    path: '/',   // 一级
    element: <Layout />,
    children: [
      {
        // path: '/goods',
        index: true,
        element: <Suspense fallback={'加载中...'}><Goods /></Suspense>,
      },
      {
        path: '/community',
        element: <Suspense fallback={'加载中...'}><Community /></Suspense>
      },
    ]
  },

  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/goodsDetail',
    element: <Suspense><GoodsDetail /></Suspense>
  },
  {
    path: '/cart',
    element: <Suspense><Cart /></Suspense>
  }
])

export default router