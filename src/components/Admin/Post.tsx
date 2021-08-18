import React, { SyntheticEvent, useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "../Utils/Button";
import { Form } from "../Utils/Form";
import { Input } from "../Utils/Input";
import { ModalContainer } from "../Utils/ModalContainer";
import { TextInput } from "../Utils/TextInput";
interface PostProps {}

interface Comment {
  author_name: string;
  date: string;
  parent_post_id: string;
  text: string;
  _id: string;
}
export const Post: React.FC<PostProps> = () => {
  const [comments, setComments] = useState<[]>([]);

  const id = window.location.pathname.split("/").pop();

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const req = await fetch(
          `https://tynasello-blog-api.herokuapp.com/blog/posts/${id}`,
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
        res = res.post;

        setTitle(res.title);
        setText(res.text);
        setAuthor(res.author_name);
        setDate(res.titldatee);
      } catch (err) {
        console.log(err);
      }
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

  const handleDeleteComment = async (commentId: string) => {
    try {
      await fetch(
        `https://tynasello-blog-api.herokuapp.com/blog/posts/${id}/comments/${commentId}`,
        {
          method: "DELETE",
          headers: {
            "x-access-token": localStorage.getItem("token") || " ",
          },
        }
      );
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const handePostUpdate = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      await fetch(`https://tynasello-blog-api.herokuapp.com/blog/posts/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": localStorage.getItem("token") || " ",
        },
        body: JSON.stringify({ title: title, author_name: author, text: text }),
      });

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

      <ModalContainer buttonText="Edit Post">
        <Form onSubmit={handePostUpdate}>
          <p>Author Name:</p>
          <Input
            type="text"
            value={title}
            onChange={(e: any) => {
              setTitle(e.target.value);
            }}
          ></Input>
          <Input
            type="text"
            value={author}
            onChange={(e: any) => {
              setAuthor(e.target.value);
            }}
          ></Input>
          <TextInput
            type="text"
            value={text}
            onChange={(e: any) => {
              setText(e.target.value);
            }}
          ></TextInput>

          <Button value="Submit">Confirm Edit</Button>
        </Form>
      </ModalContainer>

      <CommentsContainer>
        <CommentsHeader>Comments</CommentsHeader>

        {comments &&
          comments.map((comment: Comment) => {
            const args = [];
            args.push(comment._id);
            return (
              <CommentDiv key={comment._id}>
                <CommentAuthor>{comment.author_name}</CommentAuthor>
                <CommentText>{comment.text}</CommentText>
                <Button onClick={handleDeleteComment} args={args}>
                  Delete Comment
                </Button>
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
