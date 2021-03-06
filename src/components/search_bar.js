import React, { Component } from 'react';


class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }

  render() {
    return (
      <div className="col-md-12 search-bar">
        <input
          className="form-control"
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }
}

export default SearchBar;
