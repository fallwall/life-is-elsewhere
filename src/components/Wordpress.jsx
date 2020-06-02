import React from 'react';
import PostExcerpt from './PostExcerpt';
import { getPosts } from '../services/wordpress';

class Wordpress extends React.Component {
  constructor(props) {
    super();
    this.state = {
      posts: []
    }
  }

  componentDidMount = async () => {
    const resp = await getPosts();
    const posts = resp["data"].posts;
    this.setState({
      posts
    })
    console.log(this.state.posts);
  }


  render() {
    return (
      <div>
        {this.state.posts.map(p => <PostExcerpt onClick={this.props.setPostID} key={p.ID}>{p}</PostExcerpt>)}
      </div>
    )
  }
}

export default Wordpress;
