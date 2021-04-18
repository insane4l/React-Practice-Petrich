import React from 'react';
import './post-list-item.css';


export default function PostListItem({label, onDelete, important, like, onToggleImportant, onToggleLike}) {

    let classes = 'app-list-item d-flex justify-content-between list-group-item';

    if (important) {
        classes += ' important';
    }

    if (like) {
        classes += ' like';
    }

    return (
        <li className={classes}>
            <span 
            className="app-list-item-label"
            onClick={onToggleLike}>
                {label}
            </span>
            <div className="d-flex justify-content-center align-items-center">
                <button 
                    type="button"
                    className="btn-star btn-sm"
                    onClick={onToggleImportant}>
                        <i className="fa fa-star"></i>
                </button>
                <button 
                    type="button"
                    className="btn-trash btn-sm"
                    onClick={onDelete}>
                        <i className="fa fa-trash-o"></i>
                </button>
                <i className="fa fa-heart"></i>
            </div>
        </li>
    )
    
}

    

    