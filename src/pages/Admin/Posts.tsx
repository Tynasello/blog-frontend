import React, { SyntheticEvent, useEffect, useState } from "react";
import styled from "styled-components";
import { PostPreview } from "../../components/Admin/PostPreview";
import { Button } from "../../components/Utils/Button";
import { Form } from "../../components/Utils/Form";
import { Input } from "../../components/Utils/Input";
import { ModalContainer } from "../../components/Utils/ModalContainer";
import { TextInput } from "../../components/Utils/TextInput";

interface PublicPostsProps {}
interface Post {
  title: string;
  date: string;
  published: boolean;
  author_name: string;
  _id: string;
  text: string;
}

export const AdminPosts: React.FC<PublicPostsProps> = () => {
  const [posts, setPosts] = useState<[]>([]);

  const [newTitle, setNewTitle] = useState("");
  const [newText, setNewText] = useState("");
  const [newAuthor, setNewAuthor] = useState("");

  // Run effect and clean up only once (on mount and unmount)
  useEffect(() => {
    (async () => {
      try {
        const req = await fetch(
          `https://tynasello-blog-api.herokuapp.com/blog/posts`,
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
        const postsArr: any = Object.values(res);
        setPosts(postsArr[0]);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const handlePostCreate = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      await fetch(`https://tynasello-blog-api.herokuapp.com/blog/posts/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": localStorage.getItem("token") || " ",
        },
        body: JSON.stringify({
          title: newTitle,
          author_name: newAuthor,
          text: newText,
        }),
      });

      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <PostsPageContainer>
      <ModalContainer buttonText="Create New Post">
        <Form onSubmit={handlePostCreate}>
          <p style={{ margin: 0 }}>Post Title:</p>
          <Input
            type="text"
            value={newTitle}
            onChange={(e: any) => {
              setNewTitle(e.target.value);
            }}
          ></Input>
          <p>Author:</p>
          <Input
            type="text"
            value={newAuthor}
            onChange={(e: any) => {
              setNewAuthor(e.target.value);
            }}
          ></Input>
          <p>Text</p>
          <TextInput
            type="text"
            value={newText}
            onChange={(e: any) => {
              setNewText(e.target.value);
            }}
          ></TextInput>

          <Button value="Submit">Confirm New Post</Button>
        </Form>
      </ModalContainer>

      <PostsContainer>
        {posts &&
          posts.map((post: Post) => {
            return (
              <PostPreview
                key={post._id}
                id={post._id}
                title={post.title}
                text={post.text}
                author={post.author_name}
                date={post.date}
              />
            );
          })}
      </PostsContainer>
    </PostsPageContainer>
  );
};
const PostsPageContainer = styled.div`
  padding: 3rem;
`;
const PostsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem;
  padding-top: 2rem;
`;
