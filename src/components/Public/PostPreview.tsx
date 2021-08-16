import React from "react";
import { useRouteMatch, Link } from "react-router-dom";
import styled from "styled-components";

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
  return (
    <PostContainer>
      <PostTitle>{title}</PostTitle>
      <PostAuthor>{author}</PostAuthor>
      <PostDate>{date}</PostDate>
      <Link
        style={{ color: "#0ca1a1" }}
        to={{
          pathname: `${match.url}/${id}`,
          state: { title, text, author, date, id },
        }}
      >
        See More
      </Link>
    </PostContainer>
  );
};
const PostContainer = styled.div``;
const PostTitle = styled.h3``;
const PostAuthor = styled.h6``;
const PostDate = styled.h6``;
