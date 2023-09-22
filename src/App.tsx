import { Route, Routes } from "react-router-dom"
import Landing from "./Landing"
import Nav from "./Nav"
import ArticleDetails from "./ArticleDetails"
import { useState } from "react"
import { Article } from './types';
import Results from "./Results"

const App: React.FC = () => {
  const [chosenStory, setChosenStory] = useState<Article | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  return (
    <div className="relative">
      <Nav searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <Routes>
        <Route path="/" element={ <Landing setChosenStory={setChosenStory}/>} />
        <Route path="/:articleSouce" element={<ArticleDetails article={chosenStory}/>} />
        <Route path="/searchresults/:searchTerm" element={<Results setChosenStory={setChosenStory} searchTerm={searchTerm}/>} />
      </Routes>
    </div>
  )
}

export default App
