import React, { SyntheticEvent, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../Utils/Button";
import { Form } from "../Utils/Form";
import { Input } from "../Utils/Input";
import { TextInput } from "../Utils/TextInput";

interface PostProps {}

interface LocationState {
  title: string;
  text: string;
  author: string;
  date: string;
  id: string;
}
interface Comment {
  author_name: string;
  date: string;
  parent_post_id: string;
  text: string;
  _id: string;
}
export const Post: React.FC<PostProps> = () => {
  const [comments, setComments] = useState<[]>([]);
  const [newCommentAuthor, setNewCommentAuthor] = useState("");
  const [newCommentText, setNewCommentText] = useState("");

  const location = useLocation<LocationState>();
  const title = location.state.title;
  const text = location.state.text;
  const author = location.state.author;
  const date = location.state.date;
  const id = location.state.id;

  useEffect(() => {
    (async () => {
      try {
        const req = await fetch(
          `https://tynasello-blog-api.herokuapp.com/blog/posts/${id}/comments`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        let res = await req.json();
        if (req.status !== 200) {
          return;
        }
        const commentsArr: any = Object.values(res);
        setComments(commentsArr[0]);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [id]);

  const handleNewComment = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      await fetch(
        `https://tynasello-blog-api.herokuapp.com/blog/posts/${id}/comments`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            text: newCommentText,
            author_name: newCommentAuthor,
          }),
        }
      );
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <PostContainer>
      <Title>{title}</Title>
      <Author>{author}</Author>
      <Date>{date}</Date>
      <Text>{text}</Text>
      <CommentsContainer>
        <CommentsHeader>Comments</CommentsHeader>
        <NewCommentContainer>
          <Form onSubmit={handleNewComment}>
            <p>Author Name:</p>
            <Input
              type="text"
              value={newCommentAuthor}
              onChange={(e: any) => {
                setNewCommentAuthor(e.target.value);
              }}
            ></Input>
            <p>Text:</p>
            <TextInput
              type="text"
              value={newCommentText}
              onChange={(e: any) => {
                setNewCommentText(e.target.value);
              }}
            ></TextInput>
            <Button value="Submit">Post Comment</Button>
          </Form>
        </NewCommentContainer>
        {comments &&
          comments.map((comment: Comment) => {
            return (
              <CommentDiv key={comment._id}>
                <CommentAuthor>{comment.author_name}</CommentAuthor>
                <CommentText>{comment.text}</CommentText>
              </CommentDiv>
            );
          })}
      </CommentsContainer>
    </PostContainer>
  );
};
const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 4rem;
`;
const Title = styled.h3``;
const Author = styled.h6``;
const Date = styled.h6``;
const Text = styled.p``;
const CommentsHeader = styled.h5`
  margin-top: 2rem;
`;
const CommentsContainer = styled.div``;
const CommentDiv = styled.div`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 4px;
  padding: 1rem;
  margin: 1.5rem 0;
`;
const CommentAuthor = styled.h6``;
const CommentText = styled.p``;

const NewCommentContainer = styled.div``;
