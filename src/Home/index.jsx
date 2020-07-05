import React from 'react';
import DocumentTitle from 'react-document-title';

import Header from './Header';
import Banner from './Banner';
import Page2 from './Page2';
import Page3 from './Page3';
import Footer from './Footer';
import './static/style';

class Home extends React.PureComponent {

  render() {
    return (
      <DocumentTitle title="OORT DIGITAL">
        <div>
          <Header />
          <div className="home-wrapper">
            <Banner />
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
