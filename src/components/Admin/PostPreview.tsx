import React from "react";
import { useRouteMatch, Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../Utils/Button";

interface PostProps {
  title: string;
  text: string;
  author: string;
  date: string;
  id: string;
}

export const PostPreview: React.FC<PostProps> = ({
  title,
  text,
  author,
  date,
  id,
}) => {
  const match = useRouteMatch();

  const handleDeletePostComments = async () => {
    try {
      await fetch(
        `https://tynasello-blog-api.herokuapp.com/blog/posts/${id}/comments`,
        {
          method: "DELETE",
          headers: {
            "x-access-token": localStorage.getItem("token") || " ",
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeletePost = async () => {
    handleDeletePostComments();
    try {
      await fetch(`https://tynasello-blog-api.herokuapp.com/blog/posts/${id}`, {
        method: "DELETE",
        headers: {
          "x-access-token": localStorage.getItem("token") || " ",
        },
      });
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <PostContainer>
      <PostTitle>{title}</PostTitle>
      <PostAuthor>{author}</PostAuthor>
      <PostDate>{date}</PostDate>
      <Link
        style={{ color: "#0ca1a1" }}
        to={{
          pathname: `${match.url}/posts/${id}`,
        }}
      >
        See More
      </Link>
      <Button onClick={handleDeletePost}>Delete Post</Button>
    </PostContainer>
  );
};
const PostContainer = styled.div``;
const PostTitle = styled.h3``;
const PostAuthor = styled.h6``;
const PostDate = styled.h6``;
