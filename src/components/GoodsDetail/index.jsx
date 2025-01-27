import './index.scss'
import HeadNav from '../HeadNav';
import { useEffect, useRef, useState } from 'react';
import {
  ConfigProvider,
  Radio,
  Form,
  InputNumber,
  Button,
  Col,
  Row,
} from 'antd';
import { useSearchParams } from 'react-router';
import { fetchGoodDetail } from '@/store/modules/goodsStore';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';


const GoodsDetail = () => {
  // 输入框数量
  const [count, setCount] = useState(1)
  // 激活规格选项样式
  const [options, setOptions] = useState({});
  // 创建表单实例
  const [form] = Form.useForm();
  // 获取商品对象
  const { goodDetail } = useSelector(state => state.goods)

  // 鼠标移入控制切换商品展示图片
  const [url, setUrl] = useState('')

  // 从地址栏获取id
  let [params] = useSearchParams();
  let goodId = params.get('id')
  let category = params.get('category') || "guessYouLike"


  const dispatch = useDispatch()

  // 请求数据
  useEffect(() => {
    // 触发获取商品异步函数执行
    const fetchGoodDetailData = async () => {
      await dispatch(fetchGoodDetail(category, goodId))
    }
    fetchGoodDetailData()
  }, [category, goodId, dispatch])

  // 表单选择默认数据
  useEffect(() => {
    // 初始化默认规格
    const initialOptions = {}
    Object.entries(goodDetail?.specifications || {}).forEach(([category, categoryData]) => {
      initialOptions[category] = categoryData.options[0].value;
    })
    setOptions(initialOptions);
    form.setFieldsValue(initialOptions);

    // 设置默认展示的图片
    if (goodDetail?.images?.length > 0) {
      setUrl(goodDetail.images[0]);
    }
  }, [form, goodDetail])



  // 收集表单数据
  const onFinish = (formData) => {
    console.log(formData);
  }

  const sendProductImg = (url) => {
    setUrl(url)
  }

  // 鼠标移入商品展示图
  // 鼠标位置
  const [position, setPosition] = useState({ x: 0, y: 0 })
  // 是否悬停
  const [isHovering, setIsHovering] = useState(false);
  const imageRef = useRef(null)
  const magnifyingGlassRef = useRef(null);



  const handleMouseMove = (e) => {
    const { left, top, width, height } = imageRef.current.getBoundingClientRect()
    let x = e.clientX - left
    let y = e.clientY - top

    // 限制放大镜在图片范围内
    let clampedX = Math.max(0, Math.min(x, width));
    let clampedY = Math.max(0, Math.min(y, height));

    if (clampedX < 100) {
      clampedX = 100
    }
    if (clampedY < 100) {
      clampedY = 100
    }
    if (clampedX > 325) {
      clampedX = 325
    }
    if (clampedY > 325) {
      clampedY = 325
    }

    setPosition({ x: clampedX, y: clampedY })
  }

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);



  // 激活商品规格选项，切换样式
  const handleOptionChange = (category, value) => {
    setOptions(prevOptions => ({
      ...prevOptions,
      [category]: value
    }));
  };

  // *******************************

  // 监听count的变化
  useEffect(() => {
    // count变化时更新Form的字段
    form.setFieldsValue({ count });
  }, [count, form]);


  return (
    <div className="goods-detail">
      {/* 顶部导航栏 */}
      <HeadNav />

      <Row
        gutter={24}
        className='product_introduction'
      >
        {/* 1. 产品图展示 */}
        <Col span={12} align='center'>
          {/* 商品图片展示 */}
          <section    // 使用section消除非本机交互元素警告
            aria-label='商品图片展示区域'
            className='preview'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
          >
            <img
              className='product_img'
              src={url}
              alt=''
              ref={imageRef}
            />

            {/* 放大镜 */}
            {isHovering && (
              <div
                className='magnifying_glass'
                ref={magnifyingGlassRef}
                style={{
                  left: position.x - 100,
                  top: position.y - 100,
                }}
              ></div>
            )}

            {/* 大图 */}
            {isHovering && (
              <div className='bigImg'>
                <img
                  src={url}
                  alt=""
                  style={{
                    // transform: `translate(-${position.x * 2}px, -${position.y * 2}px)`,
                    // transformOrigin: `${position.x}px ${position.y}px`,
                    left: -(position.x - 100) * 2,
                    top: -(position.y - 100) * 2,
                  }}
                  onMouseEnter={handleMouseLeave}
                />
              </div>
            )}
          </section>
          <ul className='product_img_list'>
            {(goodDetail?.images || []).map(item => (
              <li
                key={item}
                className={classNames('product_img_item', { 'active': item === url })}
                onMouseEnter={() => sendProductImg(item)}
              >
                <img src={item} alt="" />
              </li>
            ))}
          </ul>
        </Col>

        {/* 2. 规格信息 */}
        <Col span={12}>
          {/* 商品基本信息 */}
          {/* 2.1 标题 */}
          <h1 className='title'>{(goodDetail?.name || '')}</h1>
          {/* 2.2 价格部分 */}
          <div className="price_plate">
            <span className='price_symbol'>￥</span>
            <span className='price'>{(goodDetail?.pricing?.basePrice * goodDetail?.pricing?.discount).toFixed(2)}</span>
            <span className='dis_sell discount_before'>优惠前￥{goodDetail?.pricing?.basePrice}</span>
            <span className='dis_sell sell_count'>已售{goodDetail?.reviews?.count || 0}</span>
          </div>

          <Form
            onFinish={onFinish}
            form={form}
          >
            {/* 选项 */}
            {/* 
              category：规格名称
              categoryData：每个规格对应的标签数据
            */}
            <ConfigProvider wave={{ disabled: true }}>
              {Object.entries(goodDetail?.specifications || {}).map(([category, categoryData]) => (
                <Form.Item
                  key={category}
                  label={categoryData.title}
                  name={category}
                >
                  <Radio.Group>
                    {categoryData.options.map(item => (
                      <Radio.Button
                        className={classNames('specification_options', { "activeOption": item.value === options[category] })}
                        size='large'
                        key={item.value}
                        value={item.value}
                        onClick={() => handleOptionChange(category, item.value)}
                      >
                        {item.value}
                      </Radio.Button>

                    ))}
                  </Radio.Group>
                </Form.Item>
              ))}
            </ConfigProvider>


            {/* 数量 */}
            <ConfigProvider
              theme={{
                components: {
                  InputNumber: {
                    activeBorderColor: '1px solid #ddd',
                    hoverBorderColor: '1px solid #ddd',
                    activeShadow: 'none',
                    paddingInline: 0,
                  }
                }
              }}
            >
              <Form.Item
                label="数量"
                name='count'
                rules={[
                  {
                    type: 'number',
                    min: 0,
                    max: 999999,
                  }
                ]}
                initialValue={1}
              >
                <InputNumber
                  keyboard={false}
                  onPressEnter={(e) => e.preventDefault()}
                  min={1}
                  max={999999}
                  value={count}
                  onChange={(value) => setCount(value)}
                  controls={false}
                  parser={(value) => value.replace(/[^\d]/g, '')}
                  formatter={(value) => value.replace(/[^\d]/g, '')}
                  addonBefore={
                    <button
                      disabled={count <= 1}
                      className='addonBefore_addonAfter'
                      onClick={(e) => {
                        e.preventDefault()
                        setCount(count - 1)
                      }}
                    >-</button>
                  }
                  addonAfter={
                    <button
                      disabled={count >= 999999}
                      className='addonBefore_addonAfter'
                      onClick={(e) => {
                        e.preventDefault()
                        setCount(count + 1)
                      }}
                    >+</button>
                  }
                />
              </Form.Item>
            </ConfigProvider>

            {/* 提交按钮 */}
            <ConfigProvider wave={{ disabled: true }}>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className='addShoppingCart'
                >
                  加入购物车
                </Button>
                <Button
                  type="primary"
                  htmlType="submit"
                  className='nowBuy'
                >
                  立即购买
                </Button>
              </Form.Item>
            </ConfigProvider>
          </Form>
        </Col>
      </Row>
    </div >
  );
};

export default GoodsDetail;