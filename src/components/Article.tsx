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
        <Paper
            elevation={0}
            style={{ marginBottom: '1.4rem', padding: '1rem' }}
        >
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <Avatar
                    sx={{ width: 70, height: 70 }}
                    src={avatar}
                    alt={author}
                />
                <div
                    style={{
                        display: 'flex',

                        flexDirection: 'column',
                        height: '100%',
                        justifyContent: 'center',
                    }}
                >
                    <Typography variant='h3'>{author}</Typography>
                    <Typography variant='caption'>
                        {format(new Date(date), 'do MMMM yyyy, hh:mm')}
                    </Typography>
                </div>
            </div>
            <div style={{ marginTop: '10px', lineHeight: '1.4rem' }}>
                {text}
            </div>
        </Paper>
    );
};

export default ArticleComponent;
