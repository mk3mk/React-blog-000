import React from 'react';
import { useParams } from 'react-router-dom';

const articles = [
    { id: 1, title: 'Первая статья', content: 'Содержимое первой статьи' },
    { id: 2, title: 'Вторая статья', content: 'Содержимое второй статьи' },
    // Добавьте больше статей по мере необходимости
];

const Article = () => {
    const { id } = useParams();
    const article = articles.find(a => a.id === parseInt(id));

    
    return (
        <div>
            <h1>{article.title}</h1>
            <h4>{article.content}</h4>
        </div>
    );
};

export default Article;