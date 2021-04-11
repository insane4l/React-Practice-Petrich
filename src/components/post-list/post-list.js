import React from 'react';
import PostListItem from '../post-list-item';
import './post-list.css';

const PostList = ({posts}) => {

    const elements = posts.map((item) => {
        const {id, ...otherProps} = item;
        return (
            <PostListItem key={id} {...otherProps} //object spread operator ES8
            // label={item.label} 
            // important={item.important} 
            />
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList;