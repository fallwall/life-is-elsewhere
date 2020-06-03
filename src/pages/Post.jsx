import React, { Component } from 'react';
import { getOnePost } from '../services/wordpress';

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
  }

  render() {
    return (
      <div className="page-post">
        <div className="page-post-content"
        dangerouslySetInnerHTML={{ __html: `${this.state.currentPost.content}` }}
      ></div>
      </div>
    )
  }
}

export default Post;
