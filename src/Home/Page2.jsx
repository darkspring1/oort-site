/* eslint-disable max-len */
import React from 'react';
import { OverPack } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';

const style = {
  background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ZsWYzLOItgeaWDSsXdZd.svg) no-repeat bottom',
  'background-size': '100%',
  height: '470px',
};

function Page2() {
  return (
    <div id="about" className="home-page page2" style={style}>
      <div className="home-page-wrapper">
        <div className="title-line-wrapper page-line">
          <div className="title-line" />
        </div>
        <h2>Who <span>We</span> are</h2>
        <OverPack>
          <QueueAnim key="queue" type="bottom" leaveReverse className="page2-content">
            <p key="p" className="page-content">
              Oort Digital aims to build an NFT super account with seamless user experience.
            </p>
            <p key="p2" className="page-content">
              We believe that NFT has a better chance to introduce crypto to the mainstream than bitcoin.
              It is because NFT is able to represent things we can better understand, such as in-game items, tickets, houses, cars etc.
              Our vision is to accelerate the mass adoption of NFTs across the globe.
            </p>
          </QueueAnim>
        </OverPack>
      </div>
    </div>
  );
}

export default Page2;
