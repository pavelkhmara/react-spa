import React from 'react';
import Input from './UI/input/Input';
import Select from './UI/select/Select';
import '../styles/PostFilter.css';

const PostFilter = ({ filter, setFilter }) => {
    const options = [{value: 'title', name: 'by title'}, {value: 'body', name: 'by body'}]
    const limits = [{value: 5, name: '5'}, {value: 10, name: '10'}, {value: 25, name: '25'}, {value: -1, name: 'all'}]
    
  return (
    <div className='controls controls__row'>
        <div className='controls__search'>
            <Input 
                value={filter.query} 
                onChange={e => setFilter({...filter, query: e.target.value})} 
                placeholder="Search post"
            />
        </div>
        <div className='controls__sort'>
            <Select 
                value={filter.sort} 
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})} 
                defaultValue="Sort by" options={options}
            />
            <Select
                value={filter.limit}
                onChange={ limit => setFilter({...filter, limit: limit})}
                defaultValue='Posts on page'
                options={limits}
            />
        </div>
    </div>
  );
};

export default PostFilter;