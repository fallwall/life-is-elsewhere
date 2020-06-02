import React from 'react';
import { getPosts } from '../services/wordpress';

class Wordpress extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  }

  componentDidMount = async () => {
    const resp = await getPosts();
    const posts = resp["data"].posts;
    // console.log(posts);
    // above: array of obj
    this.setState({
      posts
    })
    console.log(this.state.posts);
  }


  render() {
    return (
      <div>
        {this.state.posts.map(p => <div key={p.ID}>{p.title}</div>)}
      </div>
    )
  }
}

export default Wordpress;
