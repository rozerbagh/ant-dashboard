import React, { useState, useEffect } from "react";
import 'antd/dist/antd.css';
import Router from 'react-router-dom/Router'
import { routes } from './routes'
import { Layout } from 'antd';
import Sidebar from './components/Sidebar/Sidebar'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Content from './containers/Layout'
const App = () => {

  const [collapsed, setCollapsed] = useState(false);
  const collapsingSidebar = () => {
    setCollapsed(!collapsed)
  }


  return (
    <Layout>
      <Sidebar routes={routes} collapsed={collapsed} />
      <Layout className="site-layout">
        <Navbar toggleSidebar={collapsingSidebar}
          collapsed={collapsed} />
        <Content routes={routes} />
        <Footer />
      </Layout>

    </Layout>

  );
}

export default App;
