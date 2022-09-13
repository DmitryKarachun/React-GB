import React from 'react';
import PostItem from './PostItem';

const PostList = ({messageList}) => {
	return (
		<div>
			{messageList.map((item, index) => {
      return(
        <PostItem number={index+1} key={item.id} post={item}/>
      )
      })} 
		</div>
	);
};

export default PostList;