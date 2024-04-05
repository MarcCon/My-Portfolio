import { GraphQLClient, gql } from "graphql-request";
import BlogCard from "@/components/BlogCard";
import Navbar from "@/components/Navbar";
import "../styles/globals.css";
import Footer from "@/components/Footer";

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
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow bg-darkblue">
          <h1 className="text-white lg:text-4xl text-3xl text-center pt-16 font-extrabold">
            Blog{" "}
          </h1>
          <h2 className="font-thin px-4 text-gray-300 text-lg lg:text-2xl text-center pt-4">
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
        <div className="bg-zinc-900">
          <Footer />
        </div>
      </div>
    </>
  );
}
