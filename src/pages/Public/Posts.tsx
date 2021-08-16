import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { PostPreview } from "../../components/Public/PostPreview";

interface PublicPostsProps {}
interface Post {
  title: string;
  date: string;
  published: boolean;
  author_name: string;
  _id: string;
  text: string;
}

export const PublicPosts: React.FC<PublicPostsProps> = () => {
  const [posts, setPosts] = useState<[]>([]);

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

  return (
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
  );
};

const PostsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem;
  padding: 3rem;
`;
