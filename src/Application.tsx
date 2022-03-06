import { Container, Skeleton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ArticleComponent from './components/Article';
import { Article, Comment } from './models/article';
import './Application.css';
import { getArticle, getComments } from './resources/article';
import CommentContainer from './components/CommentsContainer';

const Application: React.FC = () => {
    const [article, setArticle] = useState<Article>();
    const [comments, setComments] = useState<Comment[]>([]);
    const [commentsLoaded, setCommentsLoaded] = useState(false);

    useEffect(() => {
        getArticle()
            .then((res) => setArticle(res))
            .catch((err) => console.error(err));

        getComments()
            .then((res) => {
                setCommentsLoaded(true);
                setComments(res);
            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className='App'>
            <Container className='container'>
                <div>
                    {article ? (
                        <ArticleComponent
                            author={article.author}
                            date={article.date}
                            text={article.text}
                            avatar={article.avatar}
                        />
                    ) : (
                        <Skeleton height={200} variant='rectangular' />
                    )}
                </div>
                <div className='comment-container'>
                    {commentsLoaded ? (
                        comments.length ? (
                            <CommentContainer
                                comments={comments}
                                setComments={setComments}
                            />
                        ) : (
                            ''
                        )
                    ) : (
                        <>
                            <Skeleton
                                height={60}
                                variant='rectangular'
                                style={{ transformOrigin: '0 -50%' }}
                            />
                            <Skeleton
                                height={60}
                                variant='rectangular'
                                style={{ transformOrigin: '0 -50%' }}
                            />
                        </>
                    )}
                </div>
            </Container>
        </div>
    );
};

export default Application;
