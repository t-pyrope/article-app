import { Article, Comment } from '../models/article';

export function getArticle(): Promise<Article> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(document.__article);
        }, 1000);
    });
}

export function getComments(isSecondTime?: boolean): Promise<Comment[]> {
    if (isSecondTime) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(document.__moreComments);
            }, 1000);
        });
    } else {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(document.__comments);
            }, 1000);
        });
    }
}
