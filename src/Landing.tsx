import { useState } from "react"
import mockData from "./mockData/topHeadlinesMockData.json"
import reporting from './assets/reporting.png'

const Landing = () => {
  const [articles, setArticles] = useState(mockData.articles)

  const articleCards = articles.map(article => {
    if (article.content === '[Removed]') {
      return
    }
    return (
      <div className="border-2 border-solid border-blue-500 flex flex-col">
        <img src={article.urlToImage ? article.urlToImage : reporting} className="w-full h-54 object-cover object-center" alt={article.title}/>
        <h2 className="text-blue-900 text-3xl p-5">{article.title}</h2>
        <button className="bg-blue-900 rounded-full text-blue-50 px-3 self-center w-fit">Read More</button>
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