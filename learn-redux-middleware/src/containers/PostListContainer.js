import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostList from '../components/PostList';
import { getPosts } from '../modules/posts'

function PostListContainer() {
    const { data, error, loading } = useSelector(state => state.posts.posts)
    const dispatch = useDispatch();
    // 컴포넌트 마운트 후 포스트 목록 요청
    useEffect(() => {
        dispatch(getPosts());
    }, [ dispatch ]);

    if (loading && !data) return <div>로딩중...</div>;
    if (error) return <div>에러 발생!</div>;
    if (!data) return null;
    return <PostList posts={data} />;
}

export default PostListContainer;