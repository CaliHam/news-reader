import reporting from './assets/reporting.png'
import { Link } from "react-router-dom"
import dayjs from "dayjs"
import { Article } from './types';

type ArticleProps = {
  articles: Article[];
  setChosenStory: (article: Article | null) => void;
};

const ArticleCards: React.FC<ArticleProps> = ({articles, setChosenStory}) => {
  const articleGrid = articles.map((article, i) => {
    if (article.content === '[Removed]') {
      return null
    }
    return (
      <div className="border-2 border-solid border-blue-500 flex flex-col" key={`article-${i}`}>
        <img src={article.urlToImage ? article.urlToImage : reporting} className="w-full h-54 object-cover object-center" alt={article.title}/>
        <h2 className="text-blue-900 text-2xl p-5 pb-0">{dayjs(article.publishedAt).format('MMMM DD, YYYY')}</h2>
        <h2 className="text-blue-700 text-3xl p-5">{article.title}</h2>
        <Link to={`/${article.source.name}`} className="self-center"><button onClick={() => setChosenStory(article)} className="bg-blue-900 rounded-full text-blue-50 px-3 w-fit">Read More</button></Link>
      </div>
    )
  })

  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-3 p-20">
      {articleGrid}
    </div>
  )
}

export default ArticleCards