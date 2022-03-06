import { Avatar, Card, Paper, Typography } from '@mui/material';
import { format } from 'date-fns';
import React from 'react';
import { Comment } from '../models/article';

const CommentComponent: React.FC<Comment> = ({
    author,
    text,
    date,
    avatar,
}) => {
    return (
        <Paper elevation={0}>
            <div className='comment'>
                <Avatar src={avatar} alt={author} />
                <div className='comment-body'>
                    <div className='comment-header'>
                        <Typography variant='h6'>{author}</Typography>
                        <Typography variant='caption' className='comment-date'>
                            {format(new Date(date), 'd.MM.yyyy, hh:mm')}
                        </Typography>
                    </div>
                    <Typography variant='body2'>{text}</Typography>
                </div>
            </div>
        </Paper>
    );
};

export default CommentComponent;
