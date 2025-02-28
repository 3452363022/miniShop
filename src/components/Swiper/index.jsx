import { Carousel } from 'antd';


const Swiper = () => {
  // 轮播图切换回调
  const onChange = (currentSlide) => {
    // console.log(currentSlide);
  };

  // 轮播图照片
  const swiperData = [
    {
      id: 'q1',
      src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1ac77590368ff636d0b4f6a988133f55.png?w=632&h=340',
      alt: '天哪'
    },
    {
      id: 'q2',
      src: 'https://img2.baidu.com/it/u=1127674105,2348652848&fm=253&fmt=auto&app=120&f=PNG?w=912&h=452',
      alt: '这是什么'
    },
    {
      id: 'q3',
      src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6b04dfc206dec442fe161b33082681ec.png?w=632&h=340',
      alt: '出错啦'
    },
    {
      id: 'q4',
      src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8625f4361c029ce65d2da0dd58acec9e.png?w=632&h=340',
      alt: '占位符'
    },
  ]

  return (
    <div className='swiper-list'>

      <Carousel
        arrows
        autoplay
        draggable
        arrowOffset={50}
        afterChange={onChange}>


        {swiperData.map(item => (
          <div className='swiper-item' key={item.id}>
            <a href="/" className='swiper-item-a'>
              <img
                className='swiper-item-img' src={item.src}
                alt={item.alt}
                style={{
                  height: '360px',
                  width: '100%'
                }} />
            </a>
          </div>
        ))}


      </Carousel>
    </div >

  );
};
export default Swiper;