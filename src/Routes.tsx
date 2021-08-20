/*--------------------------------------------------------------*/

import React, { useEffect, useState } from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";

import Nav from "./components/Nav";

import Login from "./pages/Login";
import { AdminPosts } from "./pages/Admin/Posts";
import { PublicPosts } from "./pages/Public/Posts";
import { Post as PublicPost } from "./components/Public/Post";
import { Post as AdminPost } from "./components/Admin/Post";

/*--------------------------------------------------------------*/

interface RoutesProps {}

const Routes: React.FC<RoutesProps> = () => {
  // Boolean variable for user authentication
  const [auth, setAuth] = useState(false);

  // Run effect and clean up only once (on mount and unmount)
  useEffect(() => {
    // Update auth with current value in localStorage
    const isAuth = localStorage.getItem("auth");
    if (isAuth) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, []);

  return (
    <>
      {/* Always display Nav component */}
      <Nav setAuth={setAuth} />

      <Switch>
        {/* 
          Redirect to /posts
        */}

        <Route exact path="/">
          <Redirect to="/posts" />
        </Route>

        <Route exact path=" " component={PublicPosts} />

        {/* 
          Posts page
          Public
        */}

        <Route exact path="/posts" component={PublicPosts} />

        {/*
          Posts page
          Admin  
          If user isn't authentiated display Login component
        */}

        <Route exact path="/admin">
          {auth ? <AdminPosts /> : <Login setAuth={setAuth} />}
        </Route>

        {/* 
          Route for single post 
          Public 
        */}

        <Route exact path="/posts/:id" component={PublicPost} />

        {/* 
          Route for single post 
          Admin 
        */}

        <Route exact path="/admin/posts/:id" component={AdminPost} />
      </Switch>
    </>
  );
};
export default withRouter(Routes);
