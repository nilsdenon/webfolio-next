import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";
import fetch from "node-fetch";

//import { getAllPostIds } from "../../lib/api";

const url = "https://damienpierre.com/wp-json/wp/v2/works";

export default function Works({ posts }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Works</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <h1>Works</h1>

          {posts && (
            <ul>
              {posts.map((post) => (
                <li key={post.id}>
                  <Link href={post.slug}>
                    <a>{post.title.rendered}</a>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  const res = await fetch(url);
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}
