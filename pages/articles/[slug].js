import getAllPosts from "../../lib/graphql/query/getAllPosts";

export async function getStaticPaths() {
  const { posts } = await getAllPosts();
  return {
    fallback: false,
    paths: posts.map(post => ({
      params: {
        slug: post.slug
      }
    }))
  };
}

export async function getStaticProps({ params }) {
  const articleSlug = params.slug;
  const { posts } = await getAllPosts();
  const post = posts.find(p => p.slug === articleSlug);
  return {
    props: {
      post: post
    }
  };
}

export default function ArticlePage({ post }) {
  // render <UI>
  return (
    <div className="w-9/12 m-auto">
      <h1 className="text text-3xl font-bold">{post.title}</h1>
      <p className="italic text-xs">
        da <b>{post.author?.name}</b>
      </p>

      <p className="text-xs mt-8" dangerouslySetInnerHTML={{ __html: post.content?.html }}></p>
    </div>
  );
}
