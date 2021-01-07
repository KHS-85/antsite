import React from 'react';
import './App.css';

import AppHeader from './components/common/header'
import AppFooter from './components/common/footer'
import Home from './views/home'

import 'antd/dist/antd.css';

import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;

function App() {
  return (

    <Layout className="mainLayout">

      <Header>
        <AppHeader />
      </Header>

      <Content>
        <Home />
      </Content>

      <Footer>
        <AppFooter />
      </Footer>



    </Layout>

  );
}

export default App;
