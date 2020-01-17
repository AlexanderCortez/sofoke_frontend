import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { goTo } from '../../../actions/AppActions';

const { Sider } = Layout;

export class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };

  forwardTo = (path) => {
    const { history } = this.props;
    goTo(history, path);
  }

  render() {
    const { collapsed } = this.state;
    return (
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={this.onCollapse}
      >
        <div className="logo" />
        <Menu
          theme="dark"
        >
          <Menu.Item
            key="2"
            onClick={() => this.forwardTo('/cookies')}
          >
            <Icon type="database" />
            <span>Cookies</span>
          </Menu.Item>
          <Menu.Item
            key="1"
            onClick={() => this.forwardTo('/sofoke')}
          >
            <Icon type="database" />
            <span>Sofoke</span>
          </Menu.Item>
          <Menu.Item
            key="3"
            onClick={() => this.forwardTo('/links')}
          >
            <Icon type="link" />
            <span>Links</span>
          </Menu.Item>
        </Menu>
      </Sider>
    )
  }
}