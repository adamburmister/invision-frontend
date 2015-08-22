import React from 'react';
import Post from 'js/components/Post';
import posts from 'js/data/posts.json';

let grid;

export default class PostsList extends React.Component {

  componentDidMount() {
    if(!grid) {
      grid = new Masonry(document.querySelector('.posts-list--grid-view'), {
        itemSelector: '.post',
        percentPosition: true,
      });
    } else {
      grid.layout();
    }

    // Images are loading still, so layout once loaded
    for(let img of document.querySelectorAll('.post img:not([height])')) {
      img.onload = () => {
        grid.layout();
      }
    }
  }

  render() {
    let classes = ['posts-list'];
    if(this.props.view === 'grid') {
      classes.push('posts-list--grid-view');
    }
    if(this.props.view === 'list') {
      grid && grid.destroy();
      classes.push('posts-list--list-view');
    }

    return (
      <section className={classes.join(' ')}>
        {this.props.posts.map(function(post, i) {
          return (<Post data={post}
                        thumbnailUrl="/img/photos/beach-thumbnail.jpg"
                        key={i} />)
        })}
      </section>
    )
  }

}

PostsList.propTypes = { posts: React.PropTypes.array };
PostsList.defaultProps = { posts: posts };

export default PostsList;
