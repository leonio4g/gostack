import React from 'react';
import Comment from './Comment';

function Post({data}){
  return(
    <div className="post">
      <div className="post-header">
        <img className="avatar" src={data.author.avatar} alt="avatar"/>
        <div className="details">
          <span>{data.author.name}</span>
          <span>{data.date}</span>
        </div>
      </div>
      <div className="post-content">
        {data.content}
      </div>
      
      {data.comments.map(comment => <Comment key={comment.id} data={comment}/>)}
    </div>
  )
}

export default Post;