import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";
import useSWR from "swr";
import { request } from "graphql-request";

export default function Works() {
  //const data = JSON.stringify(query);
  const url = "http://api.nataliekriwy.com/graphql";

  const fetcher = (query) => request(url, query);
  const { data, error } = useSWR(
    `{
      menus(where: {slug: "primary"}) {
        nodes {
          menuItems {
            nodes {
              label
            }
          }
        }
      }
    }`,
    fetcher
  );
  console.log(data);
  return (
    <>
      <Layout>
        <Head>
          <title>Works</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <h1>Movies</h1>
          {/* {data.Movie.releaseDate} */}
          {/* {data.length} */}

          {/* {error && <div>There was an error</div>} */}
        </section>
      </Layout>
    </>
  );
}

export async function getStaticProps() {}
