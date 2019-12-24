import React, {Component} from 'react';
import './NotFound.scss';
import {Redirect} from 'react-router-dom';


class NotFound extends Component {

  constructor(props) {
    super(props);

    this.state = {
      redirect: false
    }
  }

  componentDidMount() {
    this.timeoutInterval = setTimeout(() => this.setState({redirect: true}), 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutInterval);
  }


  render() {
    if (this.state.redirect) {
      return <Redirect to=""/>;
    }

    return <div className="not-found">
      <h1>Oops! Page not found.</h1>
    </div>
  }
}

export default NotFound;
