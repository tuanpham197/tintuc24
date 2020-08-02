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
        path : "/post",
        exact : false,
        main : ()=> <PostDetail></PostDetail>
    },
];
export default routes;