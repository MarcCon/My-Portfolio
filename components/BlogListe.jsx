import React, { useEffect, useState } from "react";
import { GraphQLClient, gql } from "graphql-request";
import BlogCard from "./BlogCard"; // Stelle sicher, dass der Pfad korrekt ist

const graphcms = new GraphQLClient(
  "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clujty5g501da08wb7ugbcgwx/master"
);

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
      {posts.map((post) => (
        <BlogCard
          key={post.id}
          title={post.title}
          coverPhoto={post.coverPhoto}
          datePublished={post.datePublished}
          slug={post.slug}
        />
      ))}
    </div>
  );
};

export default BlogListe;
