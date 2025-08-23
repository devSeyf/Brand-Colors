import React from 'react';
import { GrSearch } from 'react-icons/gr';

const Search = () => {
    return (
        <div className='serach'>
            <div className="icon">
                <GrSearch />
            </div>
            <input type="text" placeholder='Serach Brands' />
        </div>
    );
}

export default Search;
