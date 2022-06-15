import { Routes, Route } from "react-router-dom"
import ArticleCreate from "./components/ArticleCreate";
import ArticleFull from "./components/ArticleFull";
import ArticleList from "./components/ArticleList";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<ArticleList />}/>
      <Route path="/create" element={<ArticleCreate />}/>
      <Route path="/:id" element={<ArticleFull/>} />
      </Routes>
    </div>
  );
}

export default App;
