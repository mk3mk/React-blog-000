import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ArticleList from './ArticleList';
import Article from './Article';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<ArticleList/>} />
                <Route path="/article/:id" element={<Article/>} />
            </Routes>
        </Router>
    );
};

export default App;