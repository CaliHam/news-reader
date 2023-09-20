import { Link } from "react-router-dom"

type ArticleProps = {
  article: {
    source: {
      id: string | null,
      name: string | null
    },
    author: string | null,
    title: string | undefined,
    description: string | null,
    url: string | null,
    urlToImage: string | null,
    publishedAt: string,
    content: string | null
  },
}

const ArticleDetails: React.FC<ArticleProps> = ({article}) => {
  return (
    <div className="bg-blue-50 w-screen h-screen pt-20 pl-20">
      <Link to="/"><button className="bg-blue-900 rounded-full text-blue-50 px-3 self-center w-fit">Go Back</button></Link>
      <article className="flex flex-col text-blue-900 p-20">
        <h1 className="text-5xl">{article.title}</h1>
        <h2 className="text-2xl">By: {article.author}</h2>
        <p>{article.content}</p>
        <p>Source: {article.url}</p>
      </article>
    </div>
  )
}

export default ArticleDetails