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

export default function AllArticles(props) {
  // render <UI>
  return (
    <div className="grid grid-cols-3 gap-6">
      {props.articles.map(article => (
        <Link href={`/articles/${article.slug}`} passHref key={article.id}>
          <a className="shadow-md hover:shadow-xl transition ease-in rounded-md">
            <div className="relative w-full h-36 bg-slate-700">
              <Image src={article.coverImage?.url} layout="fill" objectFit="cover" />
            </div>

            <div className="p-3">
              <p className="text-md font-bold">{article.title}</p>
              <p className="text-xs">{article.excerpt}</p>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
}
