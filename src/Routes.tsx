import React, { useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import { AdminPosts } from "./pages/Admin/Posts";
import { PublicPosts } from "./pages/Public/Posts";
import { Post as PublicPost } from "./components/Public/Post";
import { Post as AdminPost } from "./components/Admin/Post";

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = () => {
  const [auth, setAuth] = useState(false);

  // Run effect and clean up only once (on mount and unmount)
  useEffect(() => {
    const isAuth = localStorage.getItem("auth");
    if (isAuth) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, []);

  return (
    <>
      <Nav />
      <Switch>
        {/* Redirect */}

        <Route exact path="/">
          <Redirect to="/posts" />
        </Route>

        {/* Posts page for public veiwing */}

        <Route exact path="/posts">
          <PublicPosts></PublicPosts>
        </Route>

        {/* Posts page for admin editing */}

        <Route exact path="/admin">
          {auth ? <AdminPosts /> : <Login />}
        </Route>

        <Route exact path="/posts/:id">
          <PublicPost />
        </Route>

        <Route exact path="/admin/posts/:id">
          <AdminPost />
        </Route>

        {/* Logout */}
      </Switch>
    </>
  );
};
