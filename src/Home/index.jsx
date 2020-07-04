import React from 'react';
import DocumentTitle from 'react-document-title';
import { enquireScreen } from 'enquire-js';

import Header from './Header';
import Banner from './Banner';
import Page2 from './Page2';
import Page3 from './Page3';
import Footer from './Footer';
import './static/style';

let isMobile;

enquireScreen((b) => {
  isMobile = b;
});

class Home extends React.PureComponent {
  state = {
    isMobile,
  }
  componentDidMount() {
    enquireScreen((b) => {
      this.setState({
        isMobile: !!b,
      });
    });
  }
  render() {
    return (
      <DocumentTitle title="OORT DIGITAL">
        <div>
          <Header isMobile={this.state.isMobile} />
          <div className="home-wrapper">
            <Banner isMobile={this.state.isMobile} />
            <Page2 />
            <Page3 />
          </div>
          <Footer />
        </div>
      </DocumentTitle>
    );
  }
}

export default Home;
