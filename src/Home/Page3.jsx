/* eslint-disable max-len */
import React from 'react';
import { OverPack } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import { Row, Col } from 'antd';
import ipfsmainLog from './static/ipfsmain.png';
import polyientLabsLogo from './static/polyient_labs.png';

function Page3() {
  return (
    <div className="home-page page3">
      <div className="home-page-wrapper">
        <div className="title-line-wrapper page-line">
          <div className="title-line" />
        </div>
        <h2>Strategic Partners</h2>
        <OverPack>
          <QueueAnim key="queue" type="bottom" leaveReverse className="page3-content">
            <Row>
              <Col md={{ span: 6, offset: 6 }} xs={24} sm={24}>
                <img src={ipfsmainLog} alt="ipfsmainLogo" />
              </Col>
              <Col md={6} xs={24} sm={24}>
                <img src={polyientLabsLogo} alt="polyientLabsLogo " />
              </Col>
            </Row>
          </QueueAnim>
        </OverPack>
      </div>
    </div>
  );
}

export default Page3;
