import React, {Component} from 'react';
import './Posts.scss';
import axios from "axios";


class Posts extends Component {

  constructor(props) {
    super(props);

    this.state = {
      posts: {}
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
          posts: res
        });
      });
  };

  renderPosts = () => {
    // let posts = null;
    // if (this.state.posts) {
    //   posts = <div>
    //     {this.state.users.map(post => (
    //       <div>test</div>
    //     ))}
    //   </div>
    // }
    // return posts;

    // console.log(this.state.posts.data[0].title);

    console.log('test');

    return <h1>test header</h1>
  };


  render() {
    return <div>
      <h1>posts works</h1>
      {/*{this.renderPosts()}*/}
    </div>
  }
}

export default Posts;
