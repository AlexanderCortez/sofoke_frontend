import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import { SideBar } from './SideBar';

const { Header, Content } = Layout;

export const MainWrapper = ({ children, ...rest }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SideBar {...rest} />
      <Layout>
        <Header
          style={{ background: '#fff', padding: 0 }}
        />
        <Content style={{ overflow: 'hidden', overflowX: 'auto', overflowY: 'auto', maxHeight: '85vh' }}>
          <div style={{ margin: '10px' }} >
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  )
};
