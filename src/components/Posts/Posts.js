import React, {Component} from 'react';
import './Posts.scss';
import axios from "axios";
import {Link} from "react-router-dom";


class Posts extends Component {

  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    this.fetchUserPosts(this.props.match.params.userId);
  }


  fetchUserPosts = (userId) => {
    axios.get('https://jsonplaceholder.typicode.com/posts?userId=' + userId)
      .then((res) => {
        this.setState({
          ...this.state,
          posts: res.data
        });
      });
  };

  renderPosts = () => {
    let posts = [];
    if (this.state.posts.length > 0) {
      this.state.posts.forEach(post => {
        posts.push(
          <div key={post.id}>
            <h2>({post.id}) {post.title}</h2>
            <p>{post.body}</p>
          </div>
        )
      });
    }
    return posts;
  };


  render() {
    return <div>
      <nav>
        <Link to="/users">Users</Link>
      </nav>

      {this.renderPosts()}
    </div>
  }
}

export default Posts;
