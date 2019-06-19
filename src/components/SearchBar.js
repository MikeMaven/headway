import React from 'react'
import Settings from '@material-ui/icons/Settings'

import SearchField from './SearchField'

const SearchBar = props => {
  return(
    <div id="search-bar">
      <SearchField />
      <div>
        <span id="days-left">10 days left</span><a href="/" id="upgrade-link">Upgrade</a><Settings/>
      </div>
    </div>
  )
}

export default SearchBar;
