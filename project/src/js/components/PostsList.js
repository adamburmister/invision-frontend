import React from 'react';
import Post from 'js/components/Post';
import posts from 'js/data/posts.json';
import FitColumns from 'isotope-fit-columns';

export default class PostsList extends React.Component {

  initGrid() {
    console.log(FitColumns);
    this.grid = this.grid || new Isotope(document.querySelector('.posts-list--grid-view'), {
      itemSelector: '.post',
      // columnWidth: 200,
      percentPosition: true,
      layoutMode: 'fitColumns',
    });
  }

  destroyGrid() {
    this.grid && this.grid.destroy();
  }

  onExpanded() {
    this.grid.layout();
  }

  componentDidMount() {
    this.initGrid();
    this.grid.layout();

    // Images are loading still, so layout once loaded
    for(let img of document.querySelectorAll('.post img:not([height])')) {
      img.onload = () => {
        this.grid.layout();
      }
    }
  }

  render() {
    let classes = ['posts-list'];
    if(this.props.view === 'grid') {
      classes.push('posts-list--grid-view');
    }
    if(this.props.view === 'list') {
      classes.push('posts-list--list-view');
    }
    let onExpandedCallback = this.onExpanded.bind(this);

    return (
      <section className={classes.join(' ')}>
        {this.props.posts.map(function(post, i) {
          return (<Post data={post}
                        onExpanded={onExpandedCallback}
                        key={i} />)
        })}
      </section>
    )
  }

}

PostsList.propTypes = { posts: React.PropTypes.array };
PostsList.defaultProps = { posts: posts };

export default PostsList;
