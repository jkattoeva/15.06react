import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ArticleList() {
  const [articles, setArticles] = useState(null);

  useEffect(function() {
    axios.get(
      'https://crud2-149a4-default-rtdb.firebaseio.com/articles.json').then(({ data }) => {
        const newArticles = Object.keys(data).map(id => {
          return { id: id, ...data[id] };
        })
        setArticles(newArticles);
        console.log(newArticles)
      })
  }, []);

  let output = "Loading...";
  if (articles !== null) {
    output = articles.map(
      article => (
        <li key={article.id}>
          <Link to={'/' + article.id}>{article.title}</Link>
        </li>
      )
    )
  }

  return (
    <div className="ArticleList">
      <Link to="/create"><button>Create new articles</button></Link>
      <ul>
      {output}
      </ul>
    </div>
  )
}

export default ArticleList;