/* eslint-disable max-len */
import React from 'react';
import { OverPack } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import { Row, Col } from 'antd';
import ipfsmainLog from './static/ipfsmain.png';
import polyientLabsLogo from './static/polyient_labs.png';

const logoStyle = { height: '200px' };

function Page3() {
  return (
    <div className="home-page page2">
      <div className="home-page-wrapper">
        <div className="title-line-wrapper page2-line">
          <div className="title-line" />
        </div>
        <h2>Strategic Partners</h2>
        <OverPack>
          <QueueAnim key="queue" type="bottom" leaveReverse className="page2-content">
            <Row>
              <Col span={5} offset={7}>
                <img src={ipfsmainLog} style={logoStyle} alt="ipfsmainLogo" />
              </Col>
              <Col span={5}>
                <img src={polyientLabsLogo} style={logoStyle} alt="polyientLabsLogo " />
              </Col>
            </Row>
          </QueueAnim>
        </OverPack>
      </div>
    </div>
  );
}

export default Page3;
