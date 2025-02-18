import './index.scss';
import CommunityCard from '@/components/CommunityCard';
import Masonry from 'react-masonry-component';
import { useState } from 'react';
import classNames from 'classnames';

import {
  HomeOutlined,
  PlusSquareOutlined,
  BellOutlined,
  SyncOutlined
} from '@ant-design/icons';
import {
  ConfigProvider,
  Flex,
  Layout,
  Button,
  Input,
  Dropdown,
  Tabs,
  FloatButton
} from 'antd';
const { Header, Sider, Content } = Layout;
const { Search } = Input;



const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 60,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: 'white',
};



const layoutStyle = {
  overflow: 'hidden',
  width: 'calc(100%)',
  height: 'calc(100vh - 30px)',
};



const Community = () => {


  // 点击搜索的回调
  const onSearch = (value, _e, info) => console.log(info?.source, value);

  // （创作中心）下拉菜单
  const items = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="/">
          创作服务
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="/">
          直播管理
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="/">
          电脑直播助手
        </a>
      ),
    },
  ];

  // 侧边导航栏菜单数据
  const siderData = [
    {
      id: 'find',
      icon: <HomeOutlined />,
      name: '发现',

    },
    {
      id: 'publish',
      icon: <PlusSquareOutlined />,
      name: '发布'
    },
    {
      id: 'notification',
      icon: <BellOutlined />,
      name: '通知'
    }
  ]
  const [active, setActive] = useState('find')
  const activeHandleClick = (id) => {
    setActive(id)
    // 点击标签进行路由跳转的逻辑
  }


  const onChange = (key) => {
    console.log(key);
  };

  // 社区标签页数据
  const communityTagList = [
    // 推荐
    {
      key: 'recommend',
      label: '推荐',
      data: [
        {
          key: '100',
          title: '重庆最值得爬的5座山第二弹',
          src: 'https://baidu.com',
          like: 536,
          isLike: 1,
          username: '重庆生活指北',
          userAvatar: 'https://img1.baidu.com/it/u=230463335,2027529799&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1440',
          coverImg: 'https://img0.baidu.com/it/u=3678093387,375999559&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1550',
          content: '重庆最值得爬的5座山第二弹，绝对的徒步好去处！',
          tag: ['爬山', '登山路线', '重庆游玩攻略'],
          time: '2024-11-13',
          area: '重庆',
        },
        {
          key: '101',
          title: 'vivo OriginOS 5蓝厂史上至强系统有点强！',
          src: 'https://baidu.com',
          like: 50,
          isLike: 0,
          username: '不凡数码',
          userAvatar: 'https://img0.baidu.com/it/u=1125692064,2861289595&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=889',
          coverImg: '	https://img2.baidu.com/it/u=1195063610,4233244160&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=666',
          content: `在当下的手机操作系统领域，蓝厂的“橘子”系统在手机圈内始终拥有着极高的口碑。而此次推出的 OriginOS 5，更是将手机的智能体验提升到了全新的高度，在我看来，此次大版本更新绝对名副其实。
          -
          你能相信吗？就连苹果都尚未做到的事情，OriginOS 5 却率先达成了。面对这样一个极具创新性和惊喜感的系统，你是否已经按捺不住想要尝试一番了呢？
          -
          OriginOS 5 公测适配计划将分7批推送，第1批有以下机型：
          🔜vivo：
          X Fold3、X Fold3 Pro、X100 Ultra、X100s Pro、X100 Pro、X100s、X100。
          🔜iQOO：
          iQOO 12、iQOO 12 Pro、iQOO Neo9S Pro +、iQOO Neo9 Pro、iQOO Neo9S Pro、iQOO Neo9
          -
          你的机型在第几批呢？有没有被抛弃？已升级的宝子使用感受如何欢迎反馈哦！`,
          tag: ['vivo', 'IQOO', 'OriginOS'],
          time: '2024-11-10',
          area: '北京',
        },
        {
          key: '102',
          title: 'vivo新系统控制中心对比🔥大家更喜欢哪种',
          src: 'https://baidu.com',
          like: 59,
          isLike: 1,
          username: '小喵的主题日记',
          userAvatar: 'https://img2.baidu.com/it/u=1213550554,2676992953&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=1111',
          coverImg: 'https://img2.baidu.com/it/u=1213550554,2676992953&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=1111',
          content: '',
          tag: [],
          time: '2024-11-13',
          area: '重庆',
        },
        {
          key: '103',
          title: '海底捞员工：你就吃吧！活爹们。。。',
          src: 'https://baidu.com',
          like: 14250,
          isLike: 0,
          username: '燃燃和面面',
          userAvatar: 'https://img0.baidu.com/it/u=3504764174,1724441420&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=889',
          coverImg: 'https://img0.baidu.com/it/u=3504764174,1724441420&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=889',
          content: '',
          tag: [],
          time: '2024-11-13',
          area: '广州',
        },
        {
          key: '104',
          title: '和crush打球选哪套呀？！',
          src: '',
          like: 1143,
          isLike: 0,
          username: '好想喝酸奶',
          userAvatar: 'https://img0.baidu.com/it/u=25039148,3536340858&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
          coverImg: 'https://img0.baidu.com/it/u=25039148,3536340858&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
          content: '',
          tag: [],
          time: '2024-12-8',
          area: '重庆',
        },
        {
          key: '105',
          title: '末世重庆',
          src: '',
          like: 315,
          isLike: 0,
          username: '一个比利',
          userAvatar: 'https://img1.baidu.com/it/u=3348944919,1015295117&fm=253&fmt=auto&app=120&f=JPEG?w=667&h=500',
          coverImg: 'https://img1.baidu.com/it/u=3348944919,1015295117&fm=253&fmt=auto&app=120&f=JPEG?w=667&h=500',
          content: '',
          tag: [],
          time: '2022-5-4',
          area: '浙江',
        },
        {
          key: '106',
          title: '终于有人把自学摄影的顺序说清楚啦！！！',
          src: '',
          like: 1774,
          isLike: 0,
          username: '伍伍每天教摄影',
          userAvatar: 'https://img1.baidu.com/it/u=1194936878,1277489158&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=667',
          coverImg: 'https://img1.baidu.com/it/u=1194936878,1277489158&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=667',
          content: '',
          tag: [],
          time: '2022-5-4',
          area: '浙江',
        },
        {
          key: '107',
          title: '每次交党费就老实了 ',
          src: '',
          like: 1772,
          isLike: 0,
          username: '林克',
          userAvatar: 'https://img2.baidu.com/it/u=2684565777,134428710&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=889',
          coverImg: 'https://img2.baidu.com/it/u=2684565777,134428710&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=889',
          content: '',
          tag: [],
          time: '2022-5-4',
          area: '浙江',
        },
        {
          key: '108',
          title: '有什么热度很高的很烂的专业',
          src: '',
          like: 1235,
          isLike: 0,
          username: '鹤之羽',
          userAvatar: 'https://img0.baidu.com/it/u=2365502257,2356686973&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=667',
          coverImg: 'https://img0.baidu.com/it/u=2365502257,2356686973&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=667',
          content: '',
          tag: [],
          time: '2023-5-19',
          area: '贵州',
        },
        {
          key: '109',
          title: '糟糕，被发现',
          src: '',
          like: 11562,
          isLike: 0,
          username: '观小观',
          userAvatar: 'https://img2.baidu.com/it/u=3348764609,3224820251&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=533',
          coverImg: 'https://img2.baidu.com/it/u=3348764609,3224820251&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=533',
          content: '',
          tag: [],
          time: '2023-12-09',
          area: '云南',
        },
        {
          key: '110',
          title: '04/大二 ',
          src: '',
          like: 11562,
          isLike: 0,
          username: '小跌',
          userAvatar: 'https://img1.baidu.com/it/u=2204998775,1046967288&fm=253&fmt=auto&app=138&f=JPEG?w=508&h=500',
          coverImg: 'https://img1.baidu.com/it/u=2204998775,1046967288&fm=253&fmt=auto&app=138&f=JPEG?w=508&h=500',
          content: '',
          tag: [],
          time: '2021-9-12',
          area: '云南',
        },
      ]
    },

    // 穿搭
    {
      key: 'match',
      label: '穿搭',
      data: [
        {
          key: '1000',
          title: '小时候我的审美',
          src: 'https://baidu.com',
          like: 1203,
          isLike: 0,
          username: '小花猫',
          userAvatar: 'https://img0.baidu.com/it/u=3765879492,4200605697&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889',
          coverImg: 'https://img1.baidu.com/it/u=230463335,2027529799&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1440',
          content: '有内容，不管是啥',
          tag: [],
          time: '2024-12-7',
          area: '四川',
        },
        {
          key: '1001',
          title: '你这样硬抗是没用的',
          src: 'https://baidu.com',
          like: 50,
          isLike: 0,
          username: '臭虫',
          userAvatar: 'https://img0.baidu.com/it/u=2459562339,3771716166&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1422',
          coverImg: 'https://img0.baidu.com/it/u=4156811004,3949185038&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=666',
          content: '',
          tag: [],
          time: '2023-05-20',
          area: '上海',
        }
      ]
    },

  ]
  // 社区标签页结构 
  const itemsTag = communityTagList.map(item => {
    return {
      key: item.key,
      label: item.label,
      children: (
        <Masonry>
          <CommunityCard data={item.data} />
        </Masonry>
      )
    }
  })

  return (
    <div className='community'>
      <Flex gap="middle" wrap>
        <Layout style={layoutStyle}>
          {/* 头部 */}
          <Header style={headerStyle}>
            <Flex
              style={{
                width: '100%',
                height: '100%',
              }}
              justify={'space-between'}
              align={'center'}
            >
              <a href="/" className='community-logo'>MiniShop</a>
              <Search
                placeholder="登录探索更多内容"
                onSearch={onSearch}
                style={{
                  width: 400,
                }}
                className='community-search-input'
              />

              <div>
                <Flex>
                  <ConfigProvider
                    theme={{
                      components: {
                        Button: {
                          contentFontSize: 16,
                          defaultHoverBg: '#ddd',
                        },
                      },
                    }}
                  >
                    <Dropdown
                      menu={{ items }}
                      placement="bottomLeft"
                    >
                      <Button
                        ghost
                        shape='round'
                        style={{
                          border: 'none',
                          color: 'black',
                        }}
                      >创作中心</Button>
                    </Dropdown>
                  </ConfigProvider>
                </Flex>
              </div>

            </Flex>
          </Header>

          <Layout>
            <Sider width="20%" style={{ background: 'white' }}>
              <Flex vertical={'vertical'} style={{
                height: '100%',
                padding: 20
              }}>
                <ConfigProvider
                  theme={{
                    components: {
                      Button: {
                        defaultColor: 'black',
                        defaultGhostColor: 'none',
                        defaultHoverColor: '#ff2e4d',
                        defaultActiveColor: '#ff2e4d',
                        defaultHoverBorderColor: '#ff2e4d',
                        defaultHoverBg: 'rgba(0, 0, 0, .03)'
                      }
                    }
                  }}
                >
                  {/* 侧边导航栏按钮 */}
                  {siderData.map(item => (
                    <Button
                      key={item.id}
                      className={
                        classNames('sider-nav-button', {
                          'active': item.id === active
                        })}
                      icon={item.icon}
                      onClick={() => activeHandleClick(item.id)}
                    >
                      {item.name}
                    </Button>
                  ))}


                  {/* 未登录显示登录 */}
                  <Button
                    ghost
                    className='sider-nav-button'
                    style={{
                      justifyContent: 'center',
                      background: '#ff2e4d',
                      color: 'white'
                    }}
                    href='/login'
                  >登录</Button>

                </ConfigProvider>
              </Flex>
            </Sider>

            {/* 内容区域 */}
            <Content
              style={{
                overflow: "auto",
                scrollBehavior: 'smooth',
                background: 'white'
              }}
            >
              <Tabs
                className='community-category-item'
                id='community-category-item-id'
                defaultActiveKey="1"
                items={itemsTag}
                onChange={onChange}
              />

              {/* 悬浮按钮 */}
              <FloatButton.Group
                shape="circle"
                style={{
                  insetInlineEnd: 24,
                }}
              >
                <FloatButton
                  icon={<SyncOutlined />}
                  tooltip={'刷新'}
                />
                <FloatButton.BackTop
                  visibilityHeight={0}
                  tooltip={'返回顶部'}
                  href='#community-category-item-id'
                />
              </FloatButton.Group>

            </Content>
          </Layout>
        </Layout>
      </Flex>
    </div >
  )
}

export default Community