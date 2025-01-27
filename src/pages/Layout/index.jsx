import './index.scss'
import Search from '@/components/Search'
import HeadNav from '@/components/HeadNav'
import { Outlet, useLocation, } from "react-router"

const Layout = () => {
  // 获取地址栏
  const { pathname } = useLocation()


  return (
    <div className='layout'>
      {/* 顶部导航栏 */}
      <HeadNav />

      {/* 搜索框 */}
      {pathname === '/goods' && <div className='search-input'>
        <Search />
      </div>}


      {/* 内容展示区域 */}
      <div className='content'>
        {/* 配置二级路由出口 */}
        <Outlet />
      </div>



    </div>
  )
}

export default Layout