import React from 'react';

export default class PageFooter extends React.Component {

  render() {
    return (
      <footer class="page">
        <hr />
        <nav>
          <a href="#about-us">About Us</a>
          <a href="#support">Support</a>
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
          <span class="copyright">&copy; 2014 simplysocial</span>
        </nav>
      </footer>
    )
  }
  
}
