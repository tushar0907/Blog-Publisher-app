import type { NextPage } from 'next'
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import { sanityClient, urlFor } from "../sanity";

interface props {
  posts: [Post];
}

const Home: NextPage = (props: Props) => {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Armistic Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="flex justify-between items-center bg-blue-300 border-y border-black py-10 lg:py-0">
        <div className="px-10 space-y-5">
          <h1 className="text-6xl max-w-xl font-serif">A place to write, read, and interact is <span className="underline decoration-black decoration-4">Armistic</span>.</h1>
          <h2>It is simple and cost-free to share your opinions on any subject with millions of readers.</h2>
        </div>

        <img className="hidden md:inline-flex h-32 lg:h-full" src="https://o.remove.bg/downloads/c4a722db-3db7-48ec-8562-65db23cfd5de/LOGO-removebg-preview.png" alt="Logo" />

      </div>

      {/*posts*/}
    </div>
  )
}

export default Home;

export const getServerSideProps = async () => {
  const query = `*[_type=="post"]{
    _id,title,
    author =>{
    name,
    image
  },
  description,
  mainImage,
  slug
  }`;

  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    },
  };
};
