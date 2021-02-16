import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import Post from '../components/Post';
import { getPost } from '../modules/posts';

function PostContainer({postId}) {
    const {data, error, loading} = useSelector(state => state.posts.post);
    console.log(8, data)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getPost(postId))
    }, [postId, dispatch]);
    if (loading) return <div>loading...</div>
    if (error) return <div>error occur</div>
    if (!data) return null;    

  return (
    <Post post={data}/>
  );
}

export default PostContainer;