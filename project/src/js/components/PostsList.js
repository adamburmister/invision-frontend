import React from 'react';
import Post from 'js/components/Post';

export default class PostsList extends React.Component {

  render() {
    let classes = ['posts-list'];
    if(this.props.view === 'grid') {
      classes.push('posts-list--grid-view');
    }
    if(this.props.view === 'list') {
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
PostsList.defaultProps = { posts: [{}, {}, {}, {}] };

export default PostsList;
