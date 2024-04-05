import { GraphQLClient, gql } from "graphql-request";
import BlogCard from "@/components/BlogCard";
import Navbar from "@/components/Navbar";
import "../styles/globals.css";

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
      content {
        raw
      }

      coverPhoto {
        url
      }
    }
  }
`;

export async function getStaticProps() {
  const { posts } = await graphcms.request(QUERY);
  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}

export default function Blog({ posts }) {
  return (
    <>
      <Navbar />
      <div className="bg-darkblue h-screen">
        <h1 className="text-white text-4xl text-center pt-16 font-extrabold">
          Blog{" "}
        </h1>
        <h2 className="font-thin text-gray-300 text-2xl text-center pt-4">
          Hier teile ich meine Gedanken zu aktuellen Trends und Technologien{" "}
        </h2>

        <div className="flex justify-center pt-8">
          {posts.map((post) => (
            <BlogCard
              title={post.title}
              coverPhoto={post.coverPhoto}
              key={post.id}
              datePublished={post.datePublished}
              slug={post.slug}
            />
          ))}
        </div>
      </div>
    </>
  );
}
