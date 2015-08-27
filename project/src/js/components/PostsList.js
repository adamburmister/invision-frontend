import React from 'react';
import ReactDOM from 'react-dom';
import Post from 'js/components/Post';
import PostsListViewSwitcher from 'js/components/PostsListViewSwitcher';
import { Link } from 'react-router';

import Isotope from 'isotope-layout';
import FitColumns from 'isotope-fit-columns';

const POST_WRAPPER = '.post-inner-wrapper';
const isIE9 = document.getElementsByTagName('html')[0].className == 'ie9';

export default class PostsList extends React.Component {

  constructor(props) {
    super(props);
    this.state = { grid: null, view: 'list' };
  }

  componentDidMount() {
    this.initGrid();
  }

  componentWillUnmount() {
    this.destroyGrid();
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.grid) {
      this.state.grid.once('arrangeComplete', this.state.grid.layout);

      let filter = '.post';
      if(this.props.filter) {
        filter = `.post--has-${this.props.filter}`;
      }
      this.state.grid.arrange({ filter: filter });
    }
  }

  initGrid() {
    console.log('PostsList::initGrid');
    if(this.state.grid) {
      console.log('PostsList::initGrid - reloading items');
      this.state.grid.reloadItems();
      return;
    }

    console.log('PostsList::initGrid - creating grid');

    let el = ReactDOM.findDOMNode(this.refs.postList);
    let grid = new Isotope(el, {
      itemSelector: '.post',
      stamp: '.stamp',
      percentPosition: true,
      transitionDuration: '0.2s'
    });

    // Images are loading still, so layout once loaded
    for(let img of el.querySelectorAll('.post img:not([height])')) {
      img.onload = () => {
        console.log('image loaded, re-layout grid');
        this.state.grid.layout(); // in reality we would only want to do this once
      }
    }
    
    this.setState({ grid: grid });
  }

  destroyGrid() {
    if(this.state.grid) {
      this.state.grid.destroy();
      this.setState({ grid: null });
    }
  }

  onBeforeExpand(postDomEl) {
    let postHeight = postDomEl.offsetHeight;
    let collapsibleContentHeight = Array
      .from(postDomEl.querySelector('.post-collapsible').children)
      .reduce((total, el) => { return total += el.offsetHeight; }, 0);
    postDomEl.querySelector(POST_WRAPPER).style.height = `${(postHeight + collapsibleContentHeight)}px`;
    this.state.grid && this.state.grid.layout();
  }

  onBeforeCollapse(postDomEl) {
    let postHeight = postDomEl.querySelector('.post-padding').offsetHeight;
    postDomEl.querySelector(POST_WRAPPER).style.height = `${postHeight}px`;
  }

  // Called after a CSS animation is completed
  onAnimDone(isCollapsed, postDomEl) {
    if(!isCollapsed) {
      postDomEl.querySelector(POST_WRAPPER).style.height = 'auto';
    }
    this.state.grid && this.state.grid.layout();
  }

  render() {
    let classes = ['posts-list'];
    if(this.props.view === 'grid') {
      classes.push('posts-list--grid-view');
    }
    if(this.props.view === 'list') {
      classes.push('posts-list--list-view');
    }

    return (
      <section ref="postList" className={classes.join(' ')}>
        {this.props.posts.map(post => {
          return (<Post key={post.id}
                        data={post}
                        onBeforeExpand={this.onBeforeExpand.bind(this)}
                        onBeforeCollapse={this.onBeforeCollapse.bind(this)}
                        onAnimDone={this.onAnimDone.bind(this)} />)
        })}
      </section>
    )
  }

}

PostsList.propTypes = {
  posts: React.PropTypes.array,
  view: React.PropTypes.string,
  filter: React.PropTypes.string
};
PostsList.defaultProps = {
  posts: [],
  view: 'list',
  filter: null
};

export default PostsList;
