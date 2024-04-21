import React, { useEffect, useState } from "react";
import { GraphQLClient, gql } from "graphql-request";
import BlogCard from "./BlogCard";
import { useMediaQuery } from "react-responsive";

const graphcms = new GraphQLClient(process.env.GRAPHQL_ENDPOINT);

const QUERY = gql`
  {
    posts {
      id
      title
      datePublished
      slug
      coverPhoto {
        url
      }
    }
  }
`;

const BlogListe = () => {
  const [posts, setPosts] = useState([]);

  const isXs = useMediaQuery({ maxWidth: 634 });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { posts } = await graphcms.request(QUERY);
        setPosts(posts);
      } catch (error) {
        console.error("Fehler beim Abrufen der Blog-Posts:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-5xl mx-auto">
      <div className=" flex justify-center gap-16 flex-wrap mb-44">
        {posts.map((post, index) => {
          return (
            <BlogCard
              key={post.id}
              title={post.title}
              coverPhoto={post.coverPhoto}
              datePublished={post.datePublished}
              slug={post.slug}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BlogListe;
