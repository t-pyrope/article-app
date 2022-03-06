import { Avatar, Typography } from '@mui/material';
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
        <div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <Avatar
                    sx={{ width: 56, height: 56 }}
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
                    <h3>{author}</h3>
                    <Typography variant='caption'>
                        {format(new Date(date), 'do MMMM yyyy, hh:mm')}
                    </Typography>
                </div>
            </div>
            <div style={{ marginTop: '10px' }}>{text}</div>
        </div>
    );
};

export default ArticleComponent;
