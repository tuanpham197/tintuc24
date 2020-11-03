import React from 'react'
import Main from './components/content/Main';
import PostDetail from './components/content/PostDetail/PostDetail';

const routes = [
    {
        path : "/",
        exact : true,
        main : ()=> <Main />
    },
    {
        path : "/post/:id",
        exact : false,
        main : ()=> <PostDetail />
    },
];
export default routes;