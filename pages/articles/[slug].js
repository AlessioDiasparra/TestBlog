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
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 mx-auto">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-bold leading-6 text-gray-900">{post.title}</h1>
          <p className="mt-1 text-sm text-gray-500">
            da <b>{post.author?.name}</b>
          </p>
        </div>
      </div>
      <div className="mt-4 sm:mt-6 text-gray-600 text-sm" dangerouslySetInnerHTML={{ __html: post.content?.html }}></div>
    </div>
  );
}
