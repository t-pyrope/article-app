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
        <Paper
            elevation={0}
            style={{ marginBottom: '1rem', padding: '0.8rem 0.5rem' }}
        >
            <div
                style={{
                    display: 'flex',
                    gap: '1rem',
                    alignItems: 'center',
                }}
            >
                <Avatar src={avatar} alt={author} />
                <div
                    style={{
                        display: 'flex',

                        flexDirection: 'column',
                        height: '100%',
                        justifyContent: 'center',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            width: '100%',
                            gap: '0.5rem',
                            alignItems: 'center',
                        }}
                    >
                        <Typography variant='h6'>{author}</Typography>
                        <Typography variant='caption'>
                            {format(new Date(date), 'd.MM.yyyy, hh:mm')}
                        </Typography>
                    </div>
                    <div style={{ marginTop: '0' }}>{text}</div>
                </div>
            </div>
        </Paper>
    );
};

export default CommentComponent;
