import React from 'react';
import PropTypes from 'prop-types';

Search.propTypes = {
    
};

function Search(props) {
  
    return (
        <form class="search-container">
        <input id="search-box" type="text" class="search-box" name="q" />
        <label for="search-box"><span class="glyphicon glyphicon-search search-icon"> <i class="fa fa-search" aria-hidden="true"></i> </span></label>
        <input type="submit" id="search-submit" />
      </form>
    );
}

export default Search;