import { Button, Skeleton } from '@mui/material';
import React from 'react';
import { Comment } from '../models/article';
import { getComments } from '../resources/article';
import CommentComponent from './Comment';

const CommentContainer: React.FC<{
    comments: Comment[];
    setComments: React.Dispatch<Comment[]>;
}> = ({ comments, setComments }) => {
    const loadMore = () => {
        getComments(true)
            .then((res) => {
                setComments([...comments, ...res]);
            })
            .catch((err) => console.error(err));
    };
    return (
        <>
            {comments.map((comment) => (
                <CommentComponent
                    key={comment.id}
                    id={comment.id}
                    author={comment.author}
                    text={comment.text}
                    date={comment.date}
                    avatar={comment.avatar}
                />
            ))}
            {comments.length === 2 && (
                <div>
                    <Button
                        variant='contained'
                        onClick={loadMore}
                        color='secondary'
                    >
                        Load more comments
                    </Button>
                </div>
            )}
        </>
    );
};

export default CommentContainer;
