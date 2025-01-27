import './index.scss'
import { useEffect, useState } from 'react';
import { Card } from 'antd';
import Swiper from '@/components/Swiper'
import GoodsCard from '@/components/GoodsCard';


// 图标
import {
  HeartOutlined,
  SkinOutlined,
  DesktopOutlined,
  HarmonyOSOutlined,
  TabletOutlined,
  BulbOutlined,
  ShoppingOutlined,
} from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGoodsList } from '@/store/modules/goodsStore';



const Goods = () => {
  const [activeTabKey, setActiveTabKey] = useState('guessYouLike');
  const onTabChange = (key) => {
    setActiveTabKey(key);
  };

  // 触发action执行
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchGoodsList(activeTabKey))
  }, [dispatch, activeTabKey])

  // 获取goodsList悬案数据列表
  const { goodsList } = useSelector(state => state.goods)


  // 底部分类导航标签数据（猜你喜欢等）
  const categoryListData = [
    {
      id: 'a1',
      icon: <DesktopOutlined />,
      tagList: [
        {
          key: 'b1',
          tag: '电脑',
          tagSrc: 'https://baidu.com',
        },
        {
          key: 'b2',
          tag: '配件',
          tagSrc: 'https://baidu.com'
        },
        {
          key: 'b3',
          tag: '办公',
          tagSrc: 'https://baidu.com'
        },
        {
          key: 'b4',
          tag: '文具',
          tagSrc: 'https://baidu.com'
        },
      ]
    },
    {
      id: 'a2',
      icon: <HarmonyOSOutlined />,
      tagList: [
        {
          key: 'c1',
          tag: '工业品',
          tagSrc: 'https://baidu.com'
        },
        {
          key: 'c2',
          tag: '商业',
          tagSrc: 'https://baidu.com'
        },
        {
          key: 'c3',
          tag: '农业',
          tagSrc: 'https://baidu.com'
        },
        {
          key: 'c4',
          tag: '定制',
          tagSrc: 'https://baidu.com'
        },
      ]
    },
    {
      id: 'a3',
      icon: <TabletOutlined />,
      tagList: [
        {
          key: 'd1',
          tag: '家电',
          tagSrc: 'https://baidu.com'
        },
        {
          key: 'd2',
          tag: '手机',
          tagSrc: 'https://baidu.com'
        },
        {
          key: 'd3',
          tag: '通信',
          tagSrc: 'https://baidu.com'
        },
        {
          key: 'd4',
          tag: '数码',
          tagSrc: 'https://baidu.com'
        },
      ]
    },
    {
      id: 'a4',
      icon: <BulbOutlined />,
      tagList: [
        {
          key: 'e1',
          tag: '女鞋',
          tagSrc: 'https://baidu.com'
        },
        {
          key: 'e2',
          tag: '男鞋',
          tagSrc: 'https://baidu.com'
        },
        {
          key: 'e3',
          tag: '运动',
          tagSrc: 'https://baidu.com'
        },
      ]
    },
    {
      id: 'a5',
      icon: <ShoppingOutlined />,
      tagList: [
        {
          key: 'f1',
          tag: '女装',
          tagSrc: 'https://baidu.com'
        },
        {
          key: 'f2',
          tag: '男装',
          tagSrc: 'https://baidu.com'
        },
        {
          key: 'f3',
          tag: '内衣',
          tagSrc: 'https://baidu.com'
        },
      ]

    },
    {
      id: 'a6',
      icon: <ShoppingOutlined />,
      tagList: [
        {
          key: 'g1',
          tag: '汽车',
          tagSrc: 'https://baidu.com'
        },
        {
          key: 'g2',
          tag: '珠宝',
          tagSrc: 'https://baidu.com'
        },
        {
          key: 'g3',
          tag: '文玩',
          tagSrc: 'https://baidu.com'
        },
      ]

    },
    {
      id: 'a7',
      icon: <ShoppingOutlined />,
      tagList: [
        {
          key: 'h1',
          tag: '食品',
          tagSrc: 'https://baidu.com'
        },
        {
          key: 'h2',
          tag: '生鲜',
          tagSrc: 'https://baidu.com'
        },
        {
          key: 'h3',
          tag: '酒类',
          tagSrc: 'https://baidu.com'
        },
        {
          key: 'h4',
          tag: '健康',
          tagSrc: 'https://baidu.com'
        },
      ]
    },
    {
      id: 'a8',
      icon: <ShoppingOutlined />,
      tagList: [
        {
          key: 'i1',
          tag: '母婴',
          tagSrc: 'https://baidu.com'
        },
        {
          key: 'i2',
          tag: '童装',
          tagSrc: 'https://baidu.com'
        },
        {
          key: 'i3',
          tag: '玩具',
          tagSrc: 'https://baidu.com'
        },
        {
          key: 'i4',
          tag: '宠物',
          tagSrc: 'https://baidu.com'
        },
      ]
    },
    {
      id: 'a9',
      icon: <ShoppingOutlined />,
      tagList: [
        {
          key: 'j1',
          tag: '美妆',
          tagSrc: 'https://baidu.com'
        },
        {
          key: 'j2',
          tag: '个护',
          tagSrc: 'https://baidu.com'
        },
        {
          key: 'j3',
          tag: '家清',
          tagSrc: 'https://baidu.com'
        },
        {
          key: 'j4',
          tag: '香氛',
          tagSrc: 'https://baidu.com'
        },
      ]
    },
    {
      id: 'a10',
      icon: <ShoppingOutlined />,
      tagList: [
        {
          key: 'k1',
          tag: '娱乐',
          tagSrc: 'https://baidu.com'
        },
        {
          key: 'k2',
          tag: '图书',
          tagSrc: 'https://baidu.com'
        },
        {
          key: 'k3',
          tag: '乐器',
          tagSrc: 'https://baidu.com'
        },
        {
          key: 'k4',
          tag: '鲜花',
          tagSrc: 'https://baidu.com'
        },
      ]
    },
  ]

  // （猜你喜欢）等商品标签的具体内容数据
  const tabListNoTitle = [
    {
      key: 'guessYouLike',
      label: '猜你喜欢',
      icon: <HeartOutlined />,
    },
    {
      key: 'sportsDress',
      label: '运动服装',
      icon: <SkinOutlined />,
    },
  ];


  let dataList = {}
  tabListNoTitle.forEach(item => {
    dataList[item.key] = <GoodsCard goodsList={goodsList} categoryId={item.key} />
  });



  return (
    <div className="goods">
      {/* 顶部商品分类区域 */}
      <div className='banner'>
        {/* 分类 */}
        <div className="tow-sides category">
          <ul>
            {categoryListData.map(item => (
              <li
                key={item.id}
                className='category-item'
              >
                <span>{item.icon}</span>
                {item.tagList.map(tag => <a key={tag.key} href={tag.tagSrc}>{tag.tag}</a>)}

              </li>
            ))}
          </ul>
        </div>

        {/* 轮播图 */}
        <div className="swiper">
          <Swiper />
        </div>


        {/* 动态 */}
        <div className="tow-sides dynamic">
          <div className='dynamic-top'>
            <a href="/">动态</a>
            <div className=''>
              <span>商品总数：</span>
              <span>123456789</span>
            </div>
          </div>

          <div className='dynamic-bottom'>
            <ul className='dynamic-list'>
              <li>
                <a href="/">奇峰雨伞:剑走偏峰 创意伞具</a>
              </li>
              <li>
                <a href="/">奇峰雨伞:剑走偏峰 创意伞具</a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* 商品 */}
      <div className='container'>
        {/* 分类标签栏 */}
        <div className='detail-tag-list'>
          <Card
            style={{
              width: '100%',
            }}
            tabList={tabListNoTitle}
            activeTabKey={activeTabKey}
            bordered={false}
            onTabChange={onTabChange}
            tabProps={{
              size: 'large',
            }}
          >
            {dataList[activeTabKey]}
          </Card>

        </div>
      </div>

    </div >
  )
}

export default Goods