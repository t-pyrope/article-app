import { Button, Skeleton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Comment } from '../models/article';
import { getComments } from '../resources/article';
import CommentComponent from './Comment';

const CommentContainer = () => {
    const [comments, setComments] = useState<Comment[]>([]);

    useEffect(() => {
        getComments()
            .then((res) => setComments(res))
            .catch((err) => console.error(err));
    }, []);

    const loadMore = () => {
        getComments(true)
            .then((res) => {
                setComments([...comments, ...res]);
            })
            .catch((err) => console.error(err));
    };
    return (
        <>
            {comments.length ? (
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
                        <Button variant='contained' onClick={loadMore}>
                            Load more comments
                        </Button>
                    )}
                </>
            ) : (
                <Skeleton />
            )}
        </>
    );
};

export default CommentContainer;
