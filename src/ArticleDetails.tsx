import dayjs from "dayjs"
import { Link } from "react-router-dom"
import { Article } from "./types"
import reporting from './assets/reporting.png'

type ArticleProps = {
  article: Article | null,
}

const ArticleDetails: React.FC<ArticleProps> = ({article}) => {

  if (!article){
    return <p>No article found!</p>
  }

  return (
    <div className="bg-blue-50 w-screen h-auto pt-20 pl-20 flex flex-col items-center">
      <Link to="/" className="self-start"><button className="bg-blue-900 rounded-full text-blue-50 px-3 w-fit">Back</button></Link>
      <article className="flex flex-col text-black pt-10 p-20 max-w-7xl self-center">
        <h1 className="text-5xl my-5 text-blue-900">{article.title}</h1>
        <h2 className="text-2xl my-2"><b>By:</b> {article.author}</h2>
        <h3 className="mb-2"><b>Published:</b> {dayjs(article.publishedAt).format('MMMM DD, YYYY')}</h3>
        <img src={article.urlToImage ? article.urlToImage : reporting} className="w-full h-auto self-center" alt={article.title}/>
        <p className="leading-normal mt-10">{article.content}</p>
        <p className="mt-10">Source: <a href={article.url} className="text-blue-800 underline">{article.source.name}</a></p>
      </article>
    </div>
  )
}

export default ArticleDetails