import React from 'react';
import ReactDOM from 'react-dom';
import Post from 'js/components/Post';
import PostsListViewSwitcher from 'js/components/PostsListViewSwitcher';

import Isotope from 'isotope-layout';
import FitColumns from 'isotope-fit-columns';

export default class PostsList extends React.Component {

  constructor(props) {
    super(props);
    this.state = { grid: null, view: 'list' };
  }

  componentDidMount() {
    // this.initGrid();
  }

  componentWillUnmount() {
    destroyGrid();
  }

  componentDidUpdate() {
    if(this.state.grid) {
      this.state.grid.reloadItems();
      this.state.grid.layout();
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
      percentPosition: true,
      transitionDuration: '0.2s',
      // layoutMode: 'fitColumns',
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
      console.log('PostsList::destroyGrid');
      this.state.grid.destroy();
      this.setState({ grid: null });
    }
  }

  onExpanded() {
    console.log('PostsList::onExpanded');
    if(this.state.grid) this.state.grid.layout();
    // this.grid.unstamp(this.expandedPostEl);
  }

  onViewTypeChange(newViewType) {
    if(this.state.view === newViewType) return;

    console.log('PostsList::onViewTypeChange - Switched grid view', this.state.view, 'to', newViewType);
    if(newViewType === 'grid') {
      this.initGrid();
    } else {
      this.destroyGrid();
    }
    this.setState({ view: newViewType });
  }

  onBeforeExpand(postDomEl) {
    console.log('PostsList::onBeforeExpand', postDomEl);
    this.expandedPostEl = postDomEl;
    // this.grid.stamp(this.expandedPostEl);
    if(this.grid) this.grid.layout();
  }

  render() {
    let classes = ['posts-list'];
    if(this.state.view === 'grid') {
      classes.push('posts-list--grid-view');
    }
    if(this.state.view === 'list') {
      classes.push('posts-list--list-view');
    }

    return (
      <div>
        <nav className="posts-hero-nav">
          <a href="#posts" className="selected">All Posts</a>
          <a href="#posts/photos">Photos</a>
          <a href="#posts/videos">Videos</a>
          <PostsListViewSwitcher onChange={this.onViewTypeChange.bind(this)} />
        </nav>
        <section ref="postList" className={classes.join(' ')}>
          {this.props.posts.map((post, i) => {
            return (<Post data={post}
                          onBeforeExpand={this.onBeforeExpand.bind(this)}
                          onExpanded={this.onExpanded.bind(this)}
                          key={i} />)
          })}
        </section>
      </div>
    )
  }

}

PostsList.propTypes = { posts: React.PropTypes.array };
PostsList.defaultProps = { posts: [] };

export default PostsList;
