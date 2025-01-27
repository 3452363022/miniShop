import './index.scss'
import { useNavigate } from 'react-router';
import PropTypes from 'prop-types';

const GoodsCard = ({ goodsList, categoryId }) => {
  const navigate = useNavigate()

  const sendKey = (category, id) => {
    navigate(`/goodsdetail?id=${id}&category=${category}`)
  }


  return (
    <>
      {goodsList.map(item => (
        <div
          className='goods-card'
          key={item.id}
          onClick={() => sendKey(categoryId, item.id)}
        >
          {/* 商品图片 */}
          <div className='img'>
            <img src={item.images[0]} alt="" />
          </div>
          <div className='good-detail'>
            {/* 商品名称 */}
            <div className='title'>{item.name}</div>
            {/* 商品标签 */}
            <div className='tag'>
              {item.tags?.map(tag => (<span key={tag}>{tag}</span>
              ))}
            </div>
            <div className="price"><span>￥</span>{item.pricing.basePrice} 起</div>
          </div>
        </div>
      ))}
    </>
  )
}


GoodsCard.propTypes = {
  goodsList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
    pricing: PropTypes.shape({
      basePrice: PropTypes.number.isRequired,
    }).isRequired,
  })).isRequired,
  categoryId: PropTypes.string.isRequired,
};


export default GoodsCard