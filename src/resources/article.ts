import { Article } from '../models/article';

export function getArticle(): Promise<Article> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(document.__article);
        }, 1000);
    });
}
