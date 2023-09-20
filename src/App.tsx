import { Route, Routes } from "react-router-dom"
import Landing from "./Landing"
import Nav from "./Nav"
import ArticleDetails from "./ArticleDetails"
import { useState } from "react"

const App = () => {
  const [chosenStory, setChosenStory] = useState(null)

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
