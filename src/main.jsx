import { createRoot } from 'react-dom/client'
// 清除默认样式
import 'normalize.css'
import './main.scss'

// 引入路由
import { RouterProvider } from 'react-router'
import router from './router/index.jsx'
// 注入store
import { Provider } from 'react-redux'
import store from './store'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
    </Provider>

)
