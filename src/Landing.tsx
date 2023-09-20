import { useEffect, useState } from "react"
import mockData from "./mockData/topHeadlinesMockData.json"
import reporting from './assets/reporting.png'
// import ArticleDetails from "./ArticleDetails"
import { Link } from "react-router-dom"

type NewsData = {
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
}

const Landing = ({setChosenStory}) => {
  // const [articles, setArticles] = useState([])
  const [articles, setArticles] = useState(mockData.articles)

  // useEffect(() => {
  //   fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=ab33066f4086468da77fc97eceef18d6&pageSize=7')
  //   .then(res => res.json())
  //   .then(data => setArticles(data.articles))
  // }, [])

  const articleCards = articles.map((article: NewsData) => {
    if (article.content === '[Removed]') {
      return
    }
    return (
      <div className="border-2 border-solid border-blue-500 flex flex-col">
        <img src={article.urlToImage ? article.urlToImage : reporting} className="w-full h-54 object-cover object-center" alt={article.title}/>
        <h2 className="text-blue-900 text-3xl p-5">{article.title}</h2>
        <Link to={`/${article.title}`} className="self-center"><button onClick={() => setChosenStory(article)} className="bg-blue-900 rounded-full text-blue-50 px-3 w-fit">Read More</button></Link>
      </div>
    )
  })



  return (
    <div className="bg-blue-50 w-screen h-fit pt-20">
      <h1 className="text-blue-900 text-8xl">News Reader</h1>
      <div className="grid grid-cols-3 grid-rows-2 gap-3 p-20">
        {articleCards}
      </div>
    </div>
  )
}

export default Landing