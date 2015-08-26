import * as types from '../constants/ActionTypes';

export function likePost(post) {
  return {
    type: types.LIKE_POST,
    post
  };
}
