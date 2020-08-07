import fetch from "node-fetch";

const URL = "https://damienpierre.com/wp-json/";

// export async function getSortedAPIPostsData() {
//   // Instead of the file system,
//   // fetch post data from an external API endpoint
//   const res = await fetch(URL);
//   return res.json();
// }

export async function getAllPostIds() {
  // Instead of the file system,
  // fetch post data from an external API endpoint
  const res = await fetch(URL);
  const posts = await res.json().stringify();
  return posts.map((post) => {
    return {
      params: {
        id: post.id,
      },
    };
  });
}
