import React from 'react';
import {Link} from 'react-router';

// Components
import PageNav from '../components/PageNav';
import PageFooter from '../components/PageFooter';

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <header className="page">
          <PageNav />
        </header>

        {this.props.children}

        <PageFooter />
      </div>
    );
  }
}

export default Layout;
