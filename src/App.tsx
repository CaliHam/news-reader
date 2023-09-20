import { Route, Routes } from "react-router-dom"
import Landing from "./Landing"
import Nav from "./Nav"
import ArticleDetails from "./ArticleDetails"
import { useState } from "react"
import { Article } from './types';
import Results from "./Results"
import dayjs from "dayjs"

const App: React.FC = () => {
  const [chosenStory, setChosenStory] = useState<Article | null>(null);
  const [date, setDate] = useState<string | number | Date | dayjs.Dayjs | null | undefined>(null);

  return (
    <div className="relative">
      <Nav date={date} setDate={setDate}/>
      <Routes>
        <Route path="/" element={ <Landing setChosenStory={setChosenStory}/>} />
        <Route path="/:articleTitle" element={<ArticleDetails article={chosenStory}/>} />
        <Route path="/searchresults/:date" element={<Results setChosenStory={setChosenStory} date={date}/>} />
      </Routes>
    </div>
  )
}

export default App
