import React from 'react';
import { Link } from 'react-router-dom';

const articles = [
    { id: 1, title: 'Первая статья', content: 'Содержимое первой статьи' },
    { id: 2, title: 'Вторая статья', content: 'Содержимое второй статьи' },
    // Добавьте больше статей по мере необходимости
];

const ArticleList = () => {
    return (
        <div>
            <h1>Список статей</h1>
            <ul>
                {articles.map(article => (
                    <li key={article.id}>
                        <Link to={`/article/${article.id}`}>{article.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ArticleList;