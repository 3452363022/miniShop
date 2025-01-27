import { Link, Outlet } from "react-router"
import Navigation from "./components/Navigation"

function App() {

  return (
    <div>
      {/* 导航栏 */}
      {/* <div>
        <Navigation />
      </div> */}

      {/* 内容展示
      <div className="content">
        <Link to={'/'}></Link>
        <Link to={'/goods'}></Link>

        <Outlet />
      </div> */}

    </div>
  )
}

export default App
