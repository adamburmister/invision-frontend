import * as types from '../constants/ActionTypes';
import omit from 'lodash/object/omit';
import assign from 'lodash/object/assign';
import mapValues from 'lodash/object/mapValues';

import postsMock from '../data/posts.json';

const initialState = {
  posts: postsMock,
};

export default function posts(state = initialState, action) {
  switch (action.type) {

    case types.LIKE_POST:
      // TODO: Like the post
      return {
        ...state,
        posts: state.posts
      }

    default:
      return state;
  }
}
