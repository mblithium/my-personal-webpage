import './App.css';
import { useState } from 'react';
import Index from './pages/Index';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/404';
import ArticlesPage from './pages/ArticlesPage';
import Experiments from './pages/Experiments';
import PostsPage from './pages/Posts';
import NetworkPage from './pages/NetworkPage';

import {
    Route,
    Routes,
    BrowserRouter,
    useParams
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/about' element={<AboutPage />} />
                <Route 
                path='/about/:id' 
                element={<AboutPage />} />
                <Route 
                path='/articles' 
                element={<ArticlesPage />} />
                <Route 
                path='/articles/:id' 
                element={<ArticlesPage />} />
                <Route 
                path='/articles/posts/:id' 
                element={<PostsPage />} />
                <Route path='/experiments' 
                element={<Experiments />} />
                <Route path='/Network' 
                element={<NetworkPage />} />
            <Route path='/*' element={<NotFoundPage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App;
