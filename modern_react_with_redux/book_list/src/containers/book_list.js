import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  // renderList() {
  //   return this.props.books.map(book => (
  //     <li key={book.title} className="list-group-item">
  //       {book.title}
  //     </li>
  //   ));
  // }

  render() {
    const bookList = this.props.books.map(book => (
      <li
        onClick={() => this.props.selectBook(book)}
        key={book.title}
        className="list-group-item"
      >
        {book.title}
      </li>
    ));

    return <ul className="list-group col-sm-4">{bookList}</ul>;
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  };
}

function mapDispatchToProps(dispatch) {
  // whenever selectBook is called, the result should be passed to all reducers
  return bindActionCreators({ selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
