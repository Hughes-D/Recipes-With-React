import React from 'react';


export default function Search() {
    return <div className='searchbar'>
                <label className="hidden" htmlFor='search'>Search Recipes</label>
                <input type="text" name='search' id='search' placeholder='search all recipes' className='searchbox'></input>
                <button className='btn btn--primary'>Find it!</button>
            </div>
}
