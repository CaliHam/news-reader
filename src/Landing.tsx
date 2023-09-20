import { useEffect, useState } from "react"
import mockData from "./mockData/topHeadlinesMockData.json"
import next from './assets/next.png'
import ArticleCards from "./ArticleCards"
import { Article } from './types';

type LandingProps = {
  setChosenStory: (article: Article | null) => void;
};

const Landing: React.FC<LandingProps> = ({setChosenStory}) => {
  const [articles, setArticles] = useState(mockData.articles)
  // const [articles, setArticles] = useState([])
  const [pageNum, setPageNum] = useState(1)

  // useEffect(() => {
  //   fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=ab33066f4086468da77fc97eceef18d6&page=${pageNum}&pageSize=6`)
  //   .then(res => res.json())
  //   .then(data => setArticles(data.articles))
  // }, [pageNum])

  return (
    <div className="bg-blue-50 w-screen h-fit py-20 flex flex-col">
      <h1 className="text-blue-900 text-8xl">News Reader</h1>
      <ArticleCards articles={articles} setChosenStory={setChosenStory}/>
      <button onClick={() => setPageNum(pageNum+1)} className="rounded-full w-fit self-center hover:translate-x-6 transition ease-in-out"><img src={next}/></button>
    </div>
  )
}

export default Landing