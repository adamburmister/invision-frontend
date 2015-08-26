import React from 'react';
import ReactDOM from 'react-dom';
import Post from 'js/components/Post';
import PostsListViewSwitcher from 'js/components/PostsListViewSwitcher';
import { Link } from 'react-router';

import Isotope from 'isotope-layout';
import FitColumns from 'isotope-fit-columns';

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

  componentDidUpdate() {
    if(this.state.grid) {
      let filter = '.post';
      if(this.props.filter) {
        filter = `.post--has-${this.props.filter}`;
      }
      this.state.grid.arrange({ filter: filter });
    }
  }

  initGrid() {
    //console.log('PostsList::initGrid');
    if(this.state.grid) {
      //console.log('PostsList::initGrid - reloading items');

      this.state.grid.reloadItems();
      return;
    }

    //console.log('PostsList::initGrid - creating grid');

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
        this.state.grid.layout();
      }
    }

    this.setState({ grid: grid });
  }

  destroyGrid() {
    if(this.state.grid) {
      //console.log('PostsList::destroyGrid');
      this.state.grid.destroy();
      this.setState({ grid: null });
    }
  }

  onBeforeExpand(postDomEl) {
    //console.log('PostsList::onBeforeExpand', postDomEl);

    let postHeight = postDomEl.offsetHeight;
    let collapsibleContentHeight = Array
      .from(postDomEl.querySelector('.post-collapsible').children)
      .reduce((total, el) => { return total += el.offsetHeight; }, 0);
    postDomEl.querySelector('.post-inner-wrapper').style.height = `${(postHeight + collapsibleContentHeight)}px`;
    this.state.grid && this.state.grid.layout();
  }

  onBeforeCollapse(postDomEl) {
    //console.log('onBeforeCollapse', postDomEl);
    let postHeight = postDomEl.querySelector('.post-padding').offsetHeight;
    postDomEl.querySelector('.post-inner-wrapper').style.height = `${postHeight}px`;
    // this.state.grid && this.state.grid.layout();
  }

  onAnimDone() {
    //console.log('PostsList::onAnimDone');
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
