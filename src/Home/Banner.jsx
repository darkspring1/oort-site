import React from 'react';
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { Button } from 'antd';
import BannerSVGAnim from './component/BannerSVGAnim';

function Banner(props) {
  return (
    <div className="banner-wrapper">
      {props.isMobile && (
        <TweenOne animation={{ opacity: 1 }} className="banner-image-wrapper">
          <div className="home-banner-image">
            <img
              alt="banner"
              src="https://gw.alipayobjects.com/zos/rmsportal/rqKQOpnMxeJKngVvulsF.svg"
              width="100%"
            />
          </div>
        </TweenOne>
      )}
      <QueueAnim className="banner-title-wrapper" type={props.isMobile ? 'bottom' : 'right'}>
        <div key="line" className="title-line-wrapper">
          <div
            className="title-line"
            style={{ transform: 'translateX(-64px)' }}
          />
        </div>
        <h1 key="h1">OORT DIGITAL</h1>
        <p key="content">
          The easiest way to play with your non-fungible tokens (NFTs) in one super account.
          Store and send; borrow, lease, trade and pay.
          Everything you’d expect from a bank without a bank.
        </p>
        <div key="button" className="button-wrapper">
          <a href="http://preview.pro.ant.design" target="_blank" rel="noopener noreferrer">
            <Button type="primary">
              Try NFT Leasing
            </Button>
          </a>
          <Button style={{ margin: '0 16px' }} type="primary" ghost>
            Get Oort Digital Updates + Early Access
          </Button>
          {/* <GitHubButton
            key="github-button"
            type="stargazers"
            namespace="ant-design"
            repo="ant-design-pro"
          /> */}
        </div>
      </QueueAnim>
      {!props.isMobile && (
        <TweenOne animation={{ opacity: 1 }} className="banner-image-wrapper">
          <BannerSVGAnim />
        </TweenOne>
      )}
    </div>
  );
}

Banner.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default Banner;
