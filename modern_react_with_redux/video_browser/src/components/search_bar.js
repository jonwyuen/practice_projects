import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }

  render() {
    return (
      <div className="search-bar">
        <input
          onChange={e => this.onInputChange(e.target.value)}
          value={this.state.term}
          name="term"
          type="text"
        />
      </div>
    );
  }
}

export default SearchBar;
