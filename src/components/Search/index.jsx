import './index.scss'
import { Link } from "react-router"
import { Input, ConfigProvider } from 'antd';
import {
  CameraOutlined
} from '@ant-design/icons';


const Search = () => {

  // 点击搜索按钮的回调
  const onSearch = (value, _e, info) => console.log(info?.source, value);

  return (
    <div className="search">
      {/* logo */}
      <div className='logo'>
        <Link to='/'>MiniShop</Link>
      </div>

      {/* 搜索框 */}
      <div className="textInput">
        {/* <input type="text" /> */}

        <ConfigProvider
          theme={{
            components: {
              Input: {
                colorBorder: 'transparent',
                activeBorderColor: 'none',
                hoverBorderColor: 'none',
                activeShadow: 'none',
              },
            },
          }}
        >
          <Input.Search
            allowClear
            style={{
              border: '2px solid #ff4000',
              borderRadius: 30,
              overflow: 'hidden'
            }}
            placeholder="请输入关键字、图片、链接"
            enterButton={'搜索'}
            size="large"
            suffix={<CameraOutlined
              style={{
                fontSize: 20,
                color: '#999999',
              }}
            />}
            onSearch={onSearch}
          />
        </ConfigProvider>

      </div>

    </div >
  )
}

export default Search