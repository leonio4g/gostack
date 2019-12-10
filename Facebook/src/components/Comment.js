import React from 'react';

function Comment({data}){
  return(
    <div className="post-commnets">
      <div className="divider">
        <div className="comment">
          <img src={data.author.avatar} alt="" className="avatar"/>
          <p><span>{data.author.name}:</span>{data.content}</p>
        </div>
      </div>
    </div>
  )
}

export default Comment;