import React from 'react';
import { Input, InputAdornment } from '@material-ui/core';
import Search from '@material-ui/icons/Search'

class SearchField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
  }

  render(){
    return(
      <div id="search-bar-left">
        <img src="./birdseye-logo.png" height="40px" width="40px"/>
        <div id="search-field">
            <span className="prefix" id="search-prefix"><Search/></span><input type="text" id="search-input"/>
        </div>
      </div>
    )
  }
}

export default SearchField;
