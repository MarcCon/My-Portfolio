import { GraphQLClient, gql } from "graphql-request";
import "../../styles/globals.css";
import Navbar from "@/components/Navbar";
import { RichText } from "@graphcms/rich-text-react-renderer";
import Footer from "@/components/Footer";

const graphcms = new GraphQLClient(
  "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clujty5g501da08wb7ugbcgwx/master"
);

const QUERY = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      slug
      datePublished
      content {
        raw
      }
      coverPhoto {
        id
        url
      }
    }
  }
`;

const SLUGLIST = gql`
  {
    posts {
      slug
    }
  }
`;

const sharedClasses = "";
const bodyClasses = "";

const renderers = {
  h1: ({ children }) => (
    <h1 className="lg:text-5xl text-3xl font-extrabold mb-4 text-white">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="lg:text-3xl text-xl mb-4 font-extrabold  text-white">
      {children}
    </h2>
  ),
  p: ({ children }) => (
    <p className="my-4 leading-8 text-base lg:text-xl font-thin text-gray-300">
      {children}
    </p>
  ),
};

export async function getStaticPaths() {
  const { posts } = await graphcms.request(SLUGLIST);
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const data = await graphcms.request(QUERY, { slug });
  const post = data.post;
  return {
    props: {
      post,
    },
    revalidate: 10,
  };
}

export default function BlogPost({ post }) {
  return (
    <>
      <Navbar />
      <div className="bg-darkblue h-full">
        <div className="lg:max-w-3xl md:max-w-xl max-w-md px-4 mx-auto">
          <main>
            <div className="pt-16">
              <div className="bg-purple-700 rounded-xl p-8">
                <div className="flex gap-2">
                  <span className="text-white lg:text-xl text-base font-thin">
                    {new Date(post.datePublished).toLocaleDateString("de-DE", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <h2 className="text-white lg:text-5xl text-3xl font-extrabold mb-2">
                  {post.title}
                </h2>
                <div className="text-white opacity-80"></div>
              </div>
            </div>

            <img
              src={post.coverPhoto.url}
              alt={post.title}
              className="w-full h-auto rounded-lg"
            />
          </main>

          <div>
            <div className="pb-16">
              <RichText content={post.content.raw} renderers={renderers} />
            </div>
          </div>
        </div>
        <div className="bg-zinc-900">
          <Footer />
        </div>
      </div>
    </>
  );
}
