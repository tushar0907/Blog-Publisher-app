import type { NextPage } from 'next'
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import { sanityClient, urlFor } from "../sanity";
import { Post } from "../typings";
import Link from "next/link";

interface Props {
  posts: [Post];
}

export default function Home({ posts }: Props) {
  console.log(posts);
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Armistic Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="flex justify-around items-center bg-blue-300 border-y border-black py-10 lg:py-0 lg:h-96 rounded-lg">
        <div className="px-10 space-y-5">
          <h1 className="text-6xl max-w-xl font-serif">A place to write, read, and interact is <span className="underline decoration-black decoration-4">Armistic</span>.</h1>
          <h2>It is simple and cost-free to share your opinions on any subject with millions of readers.</h2>
        </div>

        <img className="hidden md:inline-flex h-32 lg:h-full" src="https://www.pngitem.com/pimgs/m/100-1000583_chrome-copyrighted-cool-non-copyrighted-logos-png-transparent.png" alt="Logo" />

      </div>

      {/*Posts*/}

      <div className="grid gird-cols-1 sm:grid-cols-2 lg:gird-cols-3 gap-3 md:gap-6 p-2 md:p-6">
        {posts.map((post) => (
          <Link key={post._id} href={`/post/${post.slug.current}`}>
            <div className="border rounded-lg group cursor-pointer overflow-hidden">
              <img className="h-80 w-full object-contain group-hover:scale-105 transition-transform duration-200 ease-in-out" src={urlFor(post.mainImage).url()!} alt="" />
              <div className="flex justify-between p-5 bg-white">
                <div>
                  <p className="text-lg font-bold">{post.title}</p>
                  <p className="text-xs">{post.description} </p>
                  <p>{post.author.name}</p>
                </div>
                <img className="h-12 w-12 rounded-full" src={urlFor(post.author.image).url()!} alt="" />
              </div>
            </div>
          </Link>
        ))}
      </div>



    </div>
  );
}

export const getServerSideProps = async () => {
  const query = `*[_type=="post"]{
    _id,title,
    author ->{
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
