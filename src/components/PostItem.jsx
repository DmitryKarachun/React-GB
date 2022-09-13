import React from 'react';

const PostItem = (props) => {
	return (
		<div className="post">
          <div className="post__content">
					
						{ props.post.autor && <strong> Автор: {props.post.autor}</strong>}
						<p style={{fontStyle:'italic'}}>{ props.post.autor && <span>  Сообщение: </span>}	{props.post.message} </p>
          </div>
          {/* <MyButton>Удалить пост</MyButton> */}
    </div>
		
	);
};

export default PostItem;