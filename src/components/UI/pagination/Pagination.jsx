import React from 'react';
import { getPagesArray } from '../../utils/pages';
import classes from './Pagination.module.css';

const Pagination = ({totalPages, page, changePage}) => {
    let pagesArray = getPagesArray(totalPages)
    
    return (
        <div className={classes.pagination}>
            {pagesArray.map(p => 
                <span 
                    onClick={() => changePage(p)}
                    key={p}
                    className={page === p ? [classes.pagination__button, classes.active].join(' ') : classes.pagination__button}
                >
                    {p}
                </span>
            )}
            </div>
    );
};

export default Pagination;