import React from 'react';
import './PostExcerpt.css';




const PostExcerpt = (props) => {
  return (
    <div
      className="wordpress-excerpt-item"
      onClick={()=>props.setPostID(props.blog.ID)}
      id={props.blog.ID}
    >
      <div className="wordpress-excerpt-item-title"><h1>{props.blog.title}</h1></div>
      <div name={props.blog.ID} className="wordpress-excerpt-item-img"><img src={props.blog.featured_image} /></div>
      <div className={`wordpress-excerpt-item-excerpt excerpt-${props.blog.ID}`}
        dangerouslySetInnerHTML={{ __html: `${props.blog.excerpt}` }}
      ></div>
    </div>
  )
}

export default PostExcerpt;
