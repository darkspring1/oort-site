import React from 'react';
import { Row, Col, Button } from 'antd';
import { MediumOutlined, TwitterOutlined } from '@ant-design/icons';
import { DiscordIcon, TelegramIcon } from './component/Icons'

function Footer() {

  const year = new Date().getFullYear();
  return (
    <footer id="footer" className="dark">
      <Row className="bottom-bar">
        <Col lg={6} sm={24}>
          <div className="media-button">
            <a href="https://twitter.com/oortdigital" >
              <Button ghost size="small" icon={<TwitterOutlined />} />
            </a>
            
            <a href="https://t.me/oortdigital" >
              <Button ghost size="small" icon={<TelegramIcon />} />
            </a>
            <a href="https://medium.com/oort-digital" >
              <Button ghost size="small" icon={<MediumOutlined />} />
            </a>
            <a href="https://discord.gg/E6YEsb" >
              <Button ghost size="small" icon={<DiscordIcon />} />
            </a>

          </div>
        </Col>
        <Col lg={18} sm={24}>
          <span style={{ marginRight: 12 }}>Copyright © {year} OORT digital</span>
        </Col>
      </Row>
    </footer>
  );
}


export default Footer;
