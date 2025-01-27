import './index.scss'
import { Link } from "react-router"

const HeadNav = () => {


  const navTag = [
    {
      id: 'mall',
      title: '商城',
      path: '/',
    },
    {
      id: 'community',
      title: '社区',
      path: '/community',
    },
  ]

  return (
    <div>
      {/* 顶部导航栏 */}
      <div className="nav">

        {/* 导航标签 */}
        <div className="nav-list">
          <ul className='nav-Items'>
            {navTag.map(item => (
              <li key={item.id}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 右边部分：购物车 / 登录 / 注册 */}
        <div className='nav-right'>
          <Link className='nav-right-item' to={'/cart'}>
            购物车
            <span className='shoppingCount'>（1）</span></Link>
          <Link className='nav-right-item' to={'/login?1'}>登录</Link>
          <Link className='nav-right-item' to={'/login?2'}>注册</Link>
        </div>
      </div>
    </div>
  )
}

export default HeadNav