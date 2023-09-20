import { Route, Routes } from "react-router-dom"
import Landing from "./Landing"
import Nav from "./Nav"
import ArticleDetails from "./ArticleDetails"
import { useState } from "react"
import { Article } from './types';

const App: React.FC = () => {
  const [chosenStory, setChosenStory] = useState<Article | null>(null);

  return (
    <div className="relative">
      <Nav />
      <Routes>
        <Route path="/" element={ <Landing setChosenStory={setChosenStory}/>} />
        <Route path="/:articleTitle" element={<ArticleDetails article={chosenStory}/>} />
      </Routes>
    </div>
  )
}

export default App
