import React, { useState } from 'react';

export default function Search(recipes, setRecipes) {

    const [search, setSearch] = useState('')

    return (
        <div className='searchbar'>
            <label className="hidden" htmlFor='search'>Search All Recipes</label>
            <input  
                type="text" 
                onInput={(e) => setSearch(e.target.value)}
                name='search' 
                id='search' 
                placeholder='search all recipes' 
                className='searchbox' 
            />
        </div>
    )
}
