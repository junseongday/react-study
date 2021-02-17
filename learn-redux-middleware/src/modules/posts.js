import { call, put, takeEvery } from 'redux-saga/effects';
import * as postsAPI from '../api/posts'
import { createPromiseSaga, createPromiseSagaById, handleAsyncActions, handleAsyncActionsById, reducerUtils } from '../lib/asyncUtils';

const GET_POSTS = 'GET_POSTS';
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
const GET_POSTS_ERROR = 'GET_POSTS_ERROR';

const GET_POST = 'GET_POST';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_ERROR = 'GET_POST_ERROR';

// 포스트 비우기
const CLEAR_POST = 'CLEAR_POST';

// thunk => action funct
// export const getPosts = createPromiseThunk(GET_POSTS, postsAPI.getPosts)
// export const getPost = createPromiseThunkById(GET_POST, postsAPI.getPostById)

export const getPosts = () => ({ type: GET_POSTS });
// payload는 파라미터 용도, meta는 리듀서에서 id를 알기위한 용도
export const getPost = id => ({ type: GET_POST, payload: id, meta: id });

const initialState = {
    posts: reducerUtils.initial(),
    post: {},
}

export default function posts(state=initialState, action) {
    switch (action.type) {
        case GET_POSTS:
        case GET_POSTS_SUCCESS:
        case GET_POSTS_ERROR:
            return handleAsyncActions(GET_POSTS, 'posts', true)(state, action);
        case GET_POST:
        case GET_POST_SUCCESS:
        case GET_POST_ERROR:
            return handleAsyncActionsById(GET_POST, 'post', true)(state, action);
        case CLEAR_POST:
            return ({
                ...state,
                post: reducerUtils.initial()
            });
        default:
            return state;
    }
}

export const goHome = () => (dispatch, getState, {history}) => {
    history.push('/')
}

// 액션이 지니고 있는 값을 조회하고 싶다면 action을 파라미터로 받아와서 사용 할 수 있습니다.
const getPostsSaga = createPromiseSaga(GET_POSTS, postsAPI.getPosts);
const getPostSaga = createPromiseSagaById(GET_POST, postsAPI.getPostById);

// 사가들을 합치기
export function* postsSaga() {
  yield takeEvery(GET_POSTS, getPostsSaga);
  yield takeEvery(GET_POST, getPostSaga);
}