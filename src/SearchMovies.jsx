import React from 'react';

const SearchMovies = (props) => {
  return (
      <div>
          <form>
              <input
               type="search"
               className='search-bar'
               placeholder='Search any Movie'
               onChange={(event) => props.setSearchValue(event.target.value)}
               value={props.value}
               />
          </form>
      </div>
  )
};

export default SearchMovies;
