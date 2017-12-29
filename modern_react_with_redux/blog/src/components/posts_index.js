import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router-dom';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return Object.values(this.props.posts).map(post => (
      <li className="list-group-item" key={post.id}>
        {post.title}
      </li>
    ));
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul>{this.renderPosts()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

// function mapDispatchToProps(dispatch) {
//   // { fetchPosts: () => dispatch(fetchPosts()) }
//   return bindActionCreators({ fetchPosts }, dispatch);
// }

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
