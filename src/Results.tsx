import { useEffect, useState } from "react"
import { Article } from './types';
import ArticleCards from "./ArticleCards";
import dayjs from "dayjs";
import next from './assets/next.png'
import { Link } from "react-router-dom";

type ResultsProps = {
  setChosenStory: (article: Article | null) => void;
  date: string | number | Date | dayjs.Dayjs | null | undefined;
};

const Results: React.FC<ResultsProps> = ({setChosenStory, date}) => {
  const [articleResults, setArticleResults] = useState([])
  const [resPageNum, setResPageNum] = useState(1)

  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=Apple&from=${dayjs(date).format('YYYY-MM-DD')}&sortBy=popularity&apiKey=ab33066f4086468da77fc97eceef18d6&page=${resPageNum}&pageSize=6`)
    .then(res => res.json())
    .then(data => setArticleResults(data.articles))
  }, [date, resPageNum])

  return (
    <div className="bg-blue-50 w-screen h-fit p-20 flex flex-col">
      <Link to="/"><button className="bg-blue-900 rounded-full text-blue-50 px-3 self-center w-fit">Home</button></Link>
      <h1 className="text-blue-900 text-4xl mt-10">Trending Articles on {`${dayjs(date).format('MMMM DD, YYYY')}`}</h1>
      <ArticleCards articles={articleResults} setChosenStory={setChosenStory}/>
      <p className="self-center text-blue-900 text-xl pb-10">Page {`${resPageNum}`}</p>
      <button onClick={() => setResPageNum(resPageNum+1)} className="rounded-full w-fit self-center hover:translate-x-6 transition ease-in-out"><img src={next}/></button>
    </div>
  )
}

export default Results