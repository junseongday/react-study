import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import Post from '../components/Post';
import { reducerUtils } from '../lib/asyncUtils';
import { clearPost, getPost } from '../modules/posts';

function PostContainer({postId}) {
    const {data, error, loading} = useSelector(state => state.posts.post[postId]) || reducerUtils.initial();

    const dispatch = useDispatch();
    useEffect(()=>{
        if (data) return
        dispatch(getPost(postId))
    }, [data, postId, dispatch]);
    if (loading) return <div>loading...</div>
    if (error) return <div>error occur</div>
    if (!data) return null;    

  return (
    <Post post={data}/>
  );
}

export default PostContainer;