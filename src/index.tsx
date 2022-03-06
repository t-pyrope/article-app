import React from 'react';
import ReactDOM from 'react-dom';
import Application from './Application';
import { Article, Comment } from './models/article';

declare global {
    interface Document {
        __article: Article;
        __comments: Comment[];
        __moreComments: Comment[];
    }
}

ReactDOM.render(
    <React.StrictMode>
        <Application />
    </React.StrictMode>,
    document.getElementById('APP'),
);
