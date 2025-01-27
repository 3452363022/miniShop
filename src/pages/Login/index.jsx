import './index.scss'
import { useState } from 'react';
import {
  ConfigProvider,
  Card,
  Button,
  Checkbox,
  Form,
  Input,
  Flex,
  Select,
  QRCode,
} from 'antd';
import {
  QqOutlined,
  WechatOutlined,
  CloseCircleFilled,
  ReloadOutlined,
  CheckCircleFilled,
} from '@ant-design/icons';

// 手机号国家选择器
const options = [
  {
    value: '1',
    label: '+86 中国大陆',
  },
  {
    value: '2',
    label: '+852 中国香港',
  },
  {
    value: '3',
    label: '+853 中国澳门',
  },
  {
    value: '4',
    label: '+856 中国台湾',
  },
  {
    value: '5',
    label: '+82 韩国',
  },
  {
    value: '6',
    label: '+81 日本',
  },
  {
    value: '7',
    label: '+1 美国',
  },
  {
    value: '8',
    label: '+61 加拿大',
  },
  {
    value: '8',
    label: '+61 加拿大',
  },
]

const Login = () => {
  const [activeTabKey1, setActiveTabKey1] = useState('password');
  const onTab1Change = (key) => {
    setActiveTabKey1(key);
  };

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };


  const tabList = [
    {
      key: 'password',
      tab: '密码登录',

    },
    {
      key: 'message',
      tab: '短信登录',
    },
  ];

  const contentList = {
    password: (
      <Form
        name="login"
        initialValues={{
          remember: true,
        }}
        style={{
          // maxWidth: 360,
          width: 300,
          marginTop: 15,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: '请输入账号!',
            },
          ]}
        >
          <ConfigProvider
            theme={{
              components: {
                Input: {
                  activeBorderColor: '#ff5000',
                  hoverBorderColor: '#ff5000',
                },
              },
            }}
          >
            <Input placeholder="用户名/邮箱/手机号"
              className='password-message'
              style={{
                border: 0,
                borderBottom: '1px solid #ddd',
                boxShadow: 'none',
              }}
            />
          </ConfigProvider>
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: '请输入密码!',
            },
          ]}
        >
          <Input
            type="password"
            placeholder="请输入密码"
            style={{
              height: 30,
              border: 'none',
              borderRadius: 0,
              borderBottom: '1px solid #ddd',
              padding: 0,
              boxShadow: 'none'
            }}
          />
        </Form.Item>

        <Form.Item>
          <Flex justify="space-between" align="center">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>记住我</Checkbox>
            </Form.Item>
            <a href="/">忘记密码</a>
          </Flex>
        </Form.Item>

        <Form.Item>
          <Button
            block
            type="primary"
            htmlType="submit"
            style={{
              background: 'linear-gradient(270deg,#ff4000,#ff702d 98%)',
              borderRadius: 30,
              height: 50,
              fontSize: 16,
            }}
          >
            登录
          </Button>
          <div className='free-register'>
            <div className='qq-wechat'>
              <a href="/">
                <QqOutlined />
                <span>QQ</span>
              </a>
              <a href="/">
                <WechatOutlined />
                <span>微信</span>
              </a>
            </div>
            <a href="/">免费注册</a>
          </div>

        </Form.Item>
      </Form>
    ),
    message: (
      <Form
        name="login"
        initialValues={{
          remember: true,
        }}
        style={{
          // maxWidth: 360,
          width: 300,
          marginTop: 15,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: '请输入手机号!',
            },
          ]}
        >
          <ConfigProvider
            theme={{
              components: {
                Input: {
                  activeBorderColor: '#ff5000',
                  hoverBorderColor: '#ff5000',
                },
              },
            }}
          >
            <div style={{ display: 'flex' }}>
              <Select
                showSearch
                defaultValue={options[0].label.split(' ')[0]}
                filterOption={(input, option) =>
                  (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                }
                options={options}
                style={{
                  width: 80,
                }}
                dropdownStyle={{
                  width: 200,
                }}
              />
              <Input placeholder="请输入手机号"
                className='password-message'
                style={{
                  border: 0,
                  borderBottom: '1px solid #ddd',
                  boxShadow: 'none',
                }}
              />
            </div>

          </ConfigProvider>
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: '请输入验证码!',
            },
          ]}

        >
          <div style={{
            display: 'flex'
          }}>
            <Input
              type="password"
              placeholder="请输入验证码"
              style={{
                height: 30,
                border: 'none',
                borderRadius: 0,
                borderBottom: '1px solid #ddd',
                padding: 0,
                boxShadow: 'none'
              }}
            />
            <Button style={{ border: 'none' }}>获取验证码</Button>
          </div>

        </Form.Item>

        <Form.Item>
          <Flex justify="space-between" align="center">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              {/* <Checkbox>记住我</Checkbox> */}
            </Form.Item>
            {/* <a href="">忘记密码</a> */}
          </Flex>
        </Form.Item>

        <Form.Item>
          <Button
            block
            type="primary"
            htmlType="submit"
            style={{
              background: 'linear-gradient(270deg,#ff4000,#ff702d 98%)',
              borderRadius: 30,
              height: 50,
              fontSize: 16,
            }}
          >
            登录
          </Button>
          <div className='free-register'>
            <div className='qq-wechat'>
              <a href="@">
                <QqOutlined />
                <span>QQ</span>
              </a>
              <a href="@">
                <WechatOutlined />
                <span>微信</span>
              </a>
            </div>
            <a href="@">免费注册</a>
          </div>

        </Form.Item>
      </Form>
    ),
  };


  // 二维码登录
  const customStatusRender = (info) => {
    switch (info.status) {
      case 'expired':
        return (
          <div>
            <CloseCircleFilled
              style={{
                color: 'red',
              }}
            />{'二维码已失效'}
            {/* {info.locale?.expired} */}
            <p>
              <Button
                type="link"
                onClick={info.onRefresh}
              >
                <ReloadOutlined />
                {'刷新'}
                {/* {info.locale?.refresh} */}
              </Button>
            </p>
          </div>
        );
      case 'scanned':
        return (
          <div>
            <CheckCircleFilled
              style={{
                color: 'green',
              }}
            />{'已经扫描'}
            {/* {info.locale?.scanned} */}
          </div>
        );
      default:
        return null;
    }
  };


  return (
    <div className="loginForm">
      {/* 顶部logo */}
      <div className="header">
        <a href="/">MiniShop</a>
        <a href="/">“登录页面”改进建议</a>
      </div>

      {/* 登录相关 */}
      <div className="container">
        <div className='content'>
          <div className="content-left">
            <Card
              style={{
                boxShadow: 'none',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                marginTop: 20,
                boxSizing: 'border-box',
                border: 0,
              }}
              bordered={false}
              tabList={tabList}
              activeTabKey={activeTabKey1}
              onTabChange={onTab1Change}
            >
              {contentList[activeTabKey1]}
            </Card>

          </div>

          <div className="content-right">
            <div className='tips'>手机扫码登录</div>
            <div className='QRCode'>
              {/* 未扫描 */}
              <QRCode value={'-'} size={200} />

              {/* 二维码过期 */}
              {/* <QRCode
                size={200}
                value={'123'}
                status="expired"
                onRefresh={() => console.log('refresh')}
                statusRender={customStatusRender}
              /> */}

              {/* 二维码扫描 */}
              {/* <QRCode
                size={200}
                value={'456'}
                status="scanned"
                statusRender={customStatusRender} /> */}
            </div>
            <div className='tips'>
              打开<span>Mini购App</span>扫码登录
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Login