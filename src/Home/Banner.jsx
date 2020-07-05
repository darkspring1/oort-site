import React from "react";
import QueueAnim from "rc-queue-anim";
import TweenOne from "rc-tween-one";
import { Button, Row, Col } from "antd";
import BannerSVGAnim from "./component/BannerSVGAnim";

function Banner(props) {
  return (
    <div className="banner-wrapper">
      <Row>
        <Col md={{ span: 10, offset: 2, order: 1 }} xs={{ span: 24, order: 2 }} sm={{ span: 24, order: 2 }}>
          <QueueAnim
            className="banner-title-wrapper"
          >
            <div key="line" className="title-line-wrapper">
              <div
                className="title-line"
                style={{ transform: "translateX(-64px)" }}
              />
            </div>
            <h1 key="h1">OORT DIGITAL</h1>
            <p key="content">
              The easiest way to play with your non-fungible tokens (NFTs) in
              one super account. Store and send; borrow, lease, trade and pay.
              Everything you’d expect from a bank without a bank.
            </p>
            <div key="button" className="button-wrapper">
              <a
                href="http://preview.pro.ant.design"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button type="primary">Try NFT Leasing</Button>
              </a>
              <Button style={{ margin: "10px 16px" }} type="primary" ghost>
                Get Oort Digital Updates + Early Access
              </Button>
            </div>
          </QueueAnim>
        </Col>
        <Col md={{ span: 10, order: 2 }} xs={{ span: 24, order: 1 }} sm={{ span: 24, order: 1 }}>
          <TweenOne animation={{ opacity: 1 }} className="banner-image-wrapper">
            <BannerSVGAnim />
          </TweenOne>
        </Col>
      </Row>
    </div>
  );
}

export default Banner;
