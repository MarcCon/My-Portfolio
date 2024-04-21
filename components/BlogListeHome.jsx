import React, { useEffect, useState } from "react";
import { GraphQLClient, gql } from "graphql-request";
import BlogCard from "./BlogCard";
import { useMediaQuery } from "react-responsive";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

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

const BlogListeHome = () => {
  const [posts, setPosts] = useState([]);

  const isMd = useMediaQuery({ maxWidth: 768 });

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
    <div className="max-w-5xl mx-auto mb-44 px-4">
      <div
        className={`flex 
        justify-center gap-8`}
      >
        {posts.map((post, index) => {
          if (isMd) {
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

        <Link
          href="blog"
          className="w-80 border border-gray-600 rounded-xl hidden md:hidden lg:flex justify-center items-center p-4"
        >
          <p className="text-2xl text-white font-thin">Mehr lesen </p>
          <IoIosArrowForward className="text-white text-3xl" />
        </Link>
      </div>
    </div>
  );
};

export default BlogListeHome;
