/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { Button, Row, Col, Menu, Popover } from 'antd';
import { MediumOutlined, TwitterOutlined,  MenuUnfoldOutlined, MenuFoldOutlined, } from '@ant-design/icons';
import Logo from './static/logo.png';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      menuVisible: false
    };

    this.onMenuVisibleChange = this.onMenuVisibleChange.bind(this);
  }

  onMenuVisibleChange = () => {
    this.setState({
      menuVisible: !this.state.menuVisible,
    });
  };

  render() {
    const { menuVisible } = this.state;

    const menu = (mode) => (
      <Menu mode={mode} id="nav" key="nav" >
        <Menu.Item key="about">
          <a href="#about">About</a>
        </Menu.Item>
        <Menu.Item key="twitter" icon={<TwitterOutlined />}>
          <a href="https://mobile.twitter.com/oortdigital" />
        </Menu.Item>
        <Menu.Item key="medium" icon={<MediumOutlined />}>
          <a href="https://medium.com/oort-digital" />
        </Menu.Item>
        <Menu.Item key="docs">
          <a>Docs</a>
        </Menu.Item>
      </Menu>
    );

    return (
      <div id="header" className="header">
        <div id="collapsible-menu">
          <Popover
            overlayClassName="popover-menu"
            placement="bottomRight"
            content={menu('inline')}
            trigger="click"
            visible={menuVisible}
            arrowPointAtCenter
            onVisibleChange={this.onMenuVisibleChange}>
              <Button type="primary" onClick={this.toggleCollapsed} style={{ float: 'left', marginBottom: 16 }}>
                {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
              </Button>
          </Popover>
        </div>
        <Row>
          <Col xxl={4} xl={5} lg={8} md={8} sm={24} xs={24}>
            <div id="logo" to="/">
              <img src={Logo} alt="logo " />
              <span>OORT DIGITAL</span>
            </div>
          </Col>
          <Col xxl={20} xl={19} lg={16} md={16} sm={0} xs={0}>
            <div className="header-meta">
              <div id="menu">{menu('horizontal')}</div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;
