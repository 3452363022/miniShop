import './index.scss'
import {
  Card,
  Typography,
  Avatar,
} from 'antd';
import {
  HeartOutlined,
  HeartFilled
} from '@ant-design/icons';





const CommunityCard = (props) => {
  const { data = [] } = props

  const handleClick = (src) => {
    console.log(src);
  }


  return (
    data.map(item => (
      <div key={item.key}>
        <Card
          hoverable
          style={{
            width: 220,
            maxHeight: 380,
            padding: 0,
            overflow: 'hidden',
          }}
          onClick={() => handleClick(item.src)}
          className='community-card'
          cover={<img width={220} style={{ objectFit: 'cover', maxHeight: 290 }} alt="example" src={item.coverImg} />}
        >
          <div className='card-bottom'>
            <div className='card-title'>
              <Typography.Paragraph
                ellipsis={{
                  rows: 2,
                  expandable: false,
                  suffix: ''
                }}
                style={{
                  marginBottom: 0
                }}
              >
                {item.title}
              </Typography.Paragraph>
            </div>
            <div className='user-like'>
              <a href="/">
                <Typography.Paragraph
                  ellipsis={{
                    rows: 1,
                    expandable: false,
                    suffix: ''
                  }}
                  style={{
                    fontSize: 12,
                    marginBottom: 0
                  }}
                >
                  <Avatar
                    size={20}
                    src={item.userAvatar}
                    style={{
                      marginRight: 5,
                      color: 'white',
                    }} />
                  {item.username}
                </Typography.Paragraph>

              </a>
              <span>
                {item.isLike === 1 ?
                  < HeartFilled style={{ marginRight: 3, color: 'red' }} />
                  :
                  <HeartOutlined style={{ marginRight: 3 }} />
                }

                {item.like}
              </span>
            </div>
          </div>

        </Card>
      </div >
    ))
  )
}

export default CommunityCard