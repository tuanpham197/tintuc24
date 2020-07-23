import React from 'react';
import 'antd/dist/antd.less';
import Header from './components/header/Header';
import { Layout, Row } from 'antd';
import style from './style.scss';
import Main from './components/content/Main';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Layout >
      <Row className={style.wrapper}>
        <Header></Header>
        <Main></Main>
      </Row>
      <Footer style={{paddingTop:30}} />
    </Layout>
    
  );
}

export default App;
