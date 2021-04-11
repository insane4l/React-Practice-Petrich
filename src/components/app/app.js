import React, {Component} from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {label: 'Post 1', important: false, id: 'shh'},
                {label: 'Post 2', important: false, id: 'shdfsh'},
                {label: 'Post 3', important: false, id: 'sh'}
            ]
        };
        this.deleteItem = this.deleteItem.bind(this);
    }

    deleteItem(id) {
        this.setState( ({data}) => {
            const index = data.findIndex( elem => elem.id === id);

            // const before = data.slice(0, index);
            // const after = data.slice(index + 1);
            // const newArr = [...before, ...after];
            const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
            return {
                data: newArr
            }
        });
    }

    render() {
        return (
            <div className="app">
                <AppHeader/>
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList posts={this.state.data} onDelete={this.deleteItem} />
                <PostAddForm/>
                
            </div>
        )
    }
    
}
