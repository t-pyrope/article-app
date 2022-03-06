import React from 'react';

interface ArticleProps {
    author: string;
    date: Date;
    text: string;
}

const Article: React.FC<ArticleProps> = ({ author, date, text }) => {
    return (
        <div>
            {author} {date} {text}
        </div>
    );
};
