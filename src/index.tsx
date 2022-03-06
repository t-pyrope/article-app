import React from 'react';
import ReactDOM from 'react-dom';
import Application from './Application';
import { Article } from './models/article';

declare global {
    interface Document {
        __article: Article;
    }
}

ReactDOM.render(
    <React.StrictMode>
        <Application />
    </React.StrictMode>,
    document.getElementById('APP'),
);
