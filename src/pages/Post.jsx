import React, { Component } from 'react';
import { getOnePost } from '../services/wordpress';
import './Post.css';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPost: []
    }
  }

  componentDidMount = async () => {
    const resp = await getOnePost(this.props.postID);
    const currentPost = resp["data"];
    this.setState({
      currentPost
    })
    console.log(this.state.currentPost);
  }

  render() {
    return (
      <div className="page-post">
        <div className="page-post-title"><h1>{this.state.currentPost.title}</h1></div>
        <div className="page-post-content"
          dangerouslySetInnerHTML={{ __html: `${this.state.currentPost.content}` }}
        ></div>
      </div>
    )
  }
}

export default Post;
