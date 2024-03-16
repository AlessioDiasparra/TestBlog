import getAllPosts from "../lib/graphql/query/getAllPosts";
import Image from "next/image";
import Link from "next/link";

export async function getStaticProps() {
  const { posts } = await getAllPosts();
  return {
    revalidate: 60 * 60, //refresh della build dopo 1 ora
    props: {
      articles: posts
    }
  };
}


export default function AllArticles({ articles }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {articles.map(article => (
        <Link href={`/articles/${article.slug}`} passHref key={article.id}>
          <a className="shadow-md hover:shadow-xl transition ease-in rounded-md">
            <div className="relative w-full h-36 bg-slate-700">
              <Image src={article.coverImage?.url} layout="fill" objectFit="cover" />
            </div>
            <div className="px-2">
              <p className="text-md font-bold mb-1">{article.title}</p>
              <p className="text-xs text-gray-600 mb-1">{article.excerpt}</p>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
}
