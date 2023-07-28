import { Container } from "../container";
import { useState, useEffect } from "react";
import { NoResults, PostsGrid } from "./styled";
import Post from "./post";

interface Props {
  filterString: string;
}

const Posts = ({ filterString }: Props) => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://cloud.codesupply.co/endpoint/react/data.json"
        );
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (filterString) {
    let filtered = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(filterString) ||
        post.text.toLowerCase().includes(filterString)
    );
    if (filtered.length == 0) {
      return (
        <Container>
          <NoResults>Sorry, no results found :(</NoResults>
        </Container>
      );
    } else
      return (
        <Container>
          <PostsGrid>
            {filtered.map((post: any, key) => (
              <Post
                key={key}
                src={post.img}
                tags={post.tags}
                title={post.title}
                autor={post.autor}
                date={post.date}
                views={post.views}
                text={post.text}
                img_2x={post.img_2x}
              ></Post>
            ))}
          </PostsGrid>
        </Container>
      );
  }

  return (
    <Container>
      <PostsGrid>
        {posts?.map((post: any, key) => (
          <Post
            key={key}
            src={post.img}
            img_2x={post.img_2x}
            tags={post.tags}
            title={post.title}
            autor={post.autor}
            date={post.date}
            views={post.views}
            text={post.text}
          ></Post>
        ))}
      </PostsGrid>
    </Container>
  );
};

export default Posts;
