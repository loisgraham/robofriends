import React from 'react';

const SearchBox = ({searchChange}) => {
  return (
    <div>
      <input
        className='pa3 ba b--green bg-lighest-blue'
        type='search'
        placeholder='search robots'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;
