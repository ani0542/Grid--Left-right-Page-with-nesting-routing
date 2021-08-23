import React from 'react'

function SearchBox({searchFun}) {

    const onSearch = (e) => {
        searchFun(e.target.value);
      };

    return (
        <>
                <input type='text' placeholder='Search District' className='rounded' autoComplete='off'   onChange={(e) => onSearch(e)}/>
        </>
    )
}

export default SearchBox
