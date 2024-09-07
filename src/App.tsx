import { Layout, MenuTheme, theme } from 'antd';
import './App.css'
import LayoutFc from './components/Layout/Layout'
import{ useState } from 'react';
import { HeaderFC } from './components/Header/Header';
import BookCard from './components/Card/BookCard';

const {Content, Footer, Sider } = Layout;

function App() {

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [ sliderTheme] = useState<MenuTheme>('light')

  const a = Array(10).fill(5,0, 10)

  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken: unknown) => {
          console.log(broken);
        }}
        onCollapse={(collapsed: unknown, type: unknown) => {
          console.log(collapsed, type);
        }}
        theme={sliderTheme}
      >
        <LayoutFc/>
      </Sider>
    <Layout>
        <HeaderFC/>
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              display: 'flex',
              flexWrap: 'wrap',
              gap: 10,
              justifyContent: 'center'
            }}
          >
           {a.map((v, i) => (
            <BookCard key={i}/>
           ))}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App
