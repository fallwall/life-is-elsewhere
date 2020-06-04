import React from 'react';
import PostExcerpt from './PostExcerpt';
import { getPosts } from '../services/wordpress';

class Wordpress extends React.Component {
  constructor(props) {
    super(props);
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
    // console.log(this.state.posts);
  }

  render() {
    return (
      <div className="main-wordpress">
        {this.state.posts.map(p =>
          <>
            <PostExcerpt key={p.ID}>{p}</PostExcerpt>
            <button onClick={this.props.setPostID} name={p.ID}>ReadMore</button>
          </>)}
      </div>
    )
  }
}

export default Wordpress;
