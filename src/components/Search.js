import React from 'react';

export default function Search() {

    return (
        <div className='searchbar'>
            <label className="hidden" htmlFor='search'>Search All Recipes</label>
            <input  
                type="search" 
                name='search' 
                id='search' 
                placeholder='search all recipes' 
                className='searchbox' 
            />
        </div>
    )
}
