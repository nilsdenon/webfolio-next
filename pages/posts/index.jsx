import Head from "next/head";
import Layout from "../../components/layout";
import Link from "next/link";
import { getSortedPostsData } from "../../lib/posts";
import utilStyles from "../../styles/utils.module.css";

export default function Blog({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>Blog</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
