import { Container, Skeleton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ArticleComponent from './components/Article';
import { Article, Comment } from './models/article';
import './Application.css';
import { getArticle } from './resources/article';
import CommentContainer from './components/CommentsContainer';

const Application: React.FC = () => {
    const [article, setArticle] = useState<Article>();

    useEffect(() => {
        getArticle()
            .then((res) => setArticle(res))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className='App'>
            <Container>
                {article ? (
                    <ArticleComponent
                        author={article.author}
                        date={article.date}
                        text={article.text}
                        avatar={article.avatar}
                    />
                ) : (
                    <>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <Skeleton
                                variant='circular'
                                width={56}
                                height={56}
                            />
                            <div>
                                <Skeleton height={30} width={500} />
                                <Skeleton height={24} width={200} />
                            </div>
                        </div>
                        <Skeleton
                            height={210}
                            style={{ transformOrigin: '0 20%' }}
                        />
                    </>
                )}
                <CommentContainer />
            </Container>
        </div>
    );
};

export default Application;
