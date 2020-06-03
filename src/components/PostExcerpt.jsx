import React from 'react';
import './PostExcerpt.css';

const PostExcerpt = ({ children }) => {
  return (
    <div className="wordpress-excerpt-item">
      <div className="wordpress-excerpt-item-title"><h1>{children.title}</h1></div>
      <div className="wordpress-excerpt-item-img"><img src={children.featured_image} /></div>
      <div className={`wordpress-excerpt-item-excerpt excerpt-${children.ID}`}
        dangerouslySetInnerHTML={{ __html: `${children.excerpt}` }}
      ></div>
    </div>
  )
}

export default PostExcerpt;
