import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
            Add a Post
          </Link>
        </div>
        List of blog posts
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

// function mapDispatchToProps(dispatch) {
//   // { fetchPosts: () => dispatch(fetchPosts()) }
//   return bindActionCreators({ fetchPosts }, dispatch);
// }

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
