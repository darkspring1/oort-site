/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { Row, Col, Icon, Menu, Popover } from 'antd';
import { MediumOutlined, TwitterOutlined } from '@ant-design/icons';
import { enquireScreen } from 'enquire-js';
import Logo from './static/logo.png';

class Header extends React.Component {
  state = {
    menuVisible: false,
    menuMode: 'horizontal',
  };

  componentDidMount() {
    enquireScreen((b) => {
      this.setState({ menuMode: b ? 'inline' : 'horizontal' });
    });
  }

  render() {
    const { menuMode, menuVisible } = this.state;

    const menu = (
      <Menu mode={menuMode} id="nav" key="nav">
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
        {menuMode === 'inline' ? (
          <Popover
            overlayClassName="popover-menu"
            placement="bottomRight"
            content={menu}
            trigger="click"
            visible={menuVisible}
            arrowPointAtCenter
            onVisibleChange={this.onMenuVisibleChange}
          >
            <Icon
              className="nav-phone-icon"
              type="menu"
              onClick={this.handleShowMenu}
            />
          </Popover>
        ) : null}
        <Row>
          <Col xxl={4} xl={5} lg={8} md={8} sm={24} xs={24}>
            <div id="logo" to="/">
              <img src={Logo} alt="logo " />
              <span>OORT DIGITAL</span>
            </div>
          </Col>
          <Col xxl={20} xl={19} lg={16} md={16} sm={0} xs={0}>
            <div className="header-meta">
              {menuMode === 'horizontal' ? <div id="menu">{menu}</div> : null}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;
