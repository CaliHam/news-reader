import { useEffect, useState } from "react"
// import mockData from "./mockData/topHeadlinesMockData.json"
import next from './assets/next.png'
import loudSpeaker from './assets/loud-speaker.png'
import ArticleCards from "./ArticleCards"
import { Article } from './types';

type LandingProps = {
  setChosenStory: (article: Article | null) => void;
};

const Landing: React.FC<LandingProps> = ({setChosenStory}) => {
  // const [articles, setArticles] = useState(mockData.articles)
  const [articles, setArticles] = useState([])
  const [pageNum, setPageNum] = useState(1)

  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&page=${pageNum}&pageSize=6&apiKey=97d2401d99444987910e149d91f7ddab`)
    .then(res => res.json())
    .then(data => setArticles(data.articles))
  }, [pageNum])
  
  return (
    <div className="bg-blue-50 w-screen h-fit py-20 flex flex-col">
      <header className="w-fit flex items-center">
        <h1 className="text-blue-900 text-8xl px-5">News Reader </h1>
        <img src={loudSpeaker} alt="loud speaker"/>
      </header>
      <ArticleCards articles={articles} setChosenStory={setChosenStory}/>
      <p className="self-center text-blue-900 text-xl pb-10">Page {`${pageNum}`}</p>
      <button onClick={() => setPageNum(pageNum+1)} className="rounded-full w-fit self-center hover:translate-x-6 transition ease-in-out"><img src={next}/></button>
    </div>
  )
}

export default Landing