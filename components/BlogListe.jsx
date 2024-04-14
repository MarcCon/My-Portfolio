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
    <div className="flex justify-center gap-16 flex-wrap mb-72">
      {posts.map((post, index) => {
        // Überprüfe, ob es xs ist und ob es das letzte Element ist
        if (isXs) {
          // Bei xs, nur das letzte Element rendern
          if (index === posts.length - 1) {
            return (
              <BlogCard
                key={post.id}
                title={post.title}
                coverPhoto={post.coverPhoto}
                datePublished={post.datePublished}
                slug={post.slug}
              />
            );
          }
          return null;
        } else {
          // Bei Nicht-xs, alle Elemente rendern
          return (
            <BlogCard
              key={post.id}
              title={post.title}
              coverPhoto={post.coverPhoto}
              datePublished={post.datePublished}
              slug={post.slug}
            />
          );
        }
      })}
    </div>
  );
};

export default BlogListe;
