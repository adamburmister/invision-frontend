import React from 'react';

const VIEW_TYPES = Object.freeze({
  LIST: 'list',
  GRID: 'grid',
});

class PostsListViewSwitcher extends React.Component {

  constructor(props) {
    super();
    this.state = props;
  }

  handleClick(e, newView) {
    e.preventDefault();
    this.setState({ view: newView });
    this.props.onChange(newView);
  }

  render() {
    let cssClasses = {};
    for(let k in VIEW_TYPES) {
      let view = VIEW_TYPES[k];
      cssClasses[view] = `posts-list-view-switcher__${view}`;
      if(this.state.view === view) {
        cssClasses[view] += ' selected';
      }
    }

    return (
      <div className="posts-list-view-switcher">
        <a onClick={(e) => this.handleClick(e, VIEW_TYPES.LIST)} href="#view-list" className={cssClasses.list}>List</a>
        <a onClick={(e) => this.handleClick(e, VIEW_TYPES.GRID)} href="#view-grid" className={cssClasses.grid}>Grid</a>
      </div>
    )
  }

}

PostsListViewSwitcher.propTypes = { view: React.PropTypes.string, onChange: React.PropTypes.func };
PostsListViewSwitcher.defaultProps = { view: VIEW_TYPES.LIST, onChange: ()=>{} };

export default PostsListViewSwitcher;
