import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { PostData, getPosts } from "../lib/posts";
import List from "../components/List";
import Footer from "../components/Footer";
import Layout from "../app/layout";

export const getStaticProps = () => {
  const allPosts = getPosts();
  return {
    props: {
      allPosts,
    },
  };
};

const Home: NextPage<{ allPosts: PostData[] }> = ({ allPosts }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <List posts={allPosts} />
      </main>
      <Footer
        aHref={"https://github.com/PollyGotACracker"}
        imgSrc={"/cracker.png"}
        imgAlt={"cracker"}
        text={"PollyGotACracker"}
      />
    </div>
  );
};

export default Home;
