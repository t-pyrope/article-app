import { Avatar, Paper, Typography } from '@mui/material';
import { format } from 'date-fns';
import React from 'react';
import { Article } from '../models/article';

const ArticleComponent: React.FC<Article> = ({
    author,
    date,
    text,
    avatar,
}) => {
    return (
        <Paper elevation={0} className='article-wrapper'>
            <div className='article-header'>
                <Avatar
                    sx={{ width: 70, height: 70 }}
                    src={avatar}
                    alt={author}
                />
                <div className='article-info'>
                    <Typography variant='h3'>{author}</Typography>
                    <Typography variant='caption'>
                        {format(new Date(date), 'do MMMM yyyy, hh:mm')}
                    </Typography>
                </div>
            </div>
            <Typography variant='body1'>{text}</Typography>
        </Paper>
    );
};

export default ArticleComponent;
