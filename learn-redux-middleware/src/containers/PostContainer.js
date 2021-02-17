import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import Post from '../components/Post';
import { reducerUtils } from '../lib/asyncUtils';
import { getPost, goToHome } from '../modules/posts';

function PostContainer({postId}) {
    const {data, error, loading} = useSelector(state => state.posts.post[postId]) || reducerUtils.initial();

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getPost(postId))
    }, [postId, dispatch]);
    if (loading && !data) return <div>loading...</div>
    if (error) return <div>error occur</div>
    if (!data) return null;    

  return (
    <>
      <button onClick={() => dispatch(goToHome())}>홈으로 이동</button>
      <Post post={data}/>
    </>
  );
}

export default PostContainer;