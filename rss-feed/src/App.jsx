import axios from "axios";
import { useState, useEffect } from "react";
import Feed from "./Feed.jsx";
import Header from "./Header.jsx";

const App = () => {
  // state to reflect articles from backend
  const [articles, setArticles] = useState([]);
  console.log(articles);

  const getArticles = async () => {
    try {
      const res = await axios.get("http://localhost:4000/");
      setArticles(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // call getArticles function in useEffect so it triggers on first laoding
  useEffect(() => {
    getArticles();
  }, []);

  return (
    <>
      <div>
        <div className="px-7 py-5 bg-[#71d3b2]">
          <h1 className="flex items-center justify-center ">RSS Feed</h1>
          <Header />
        </div>
        <div className="bg-cyan-100">
          <div className="text-3xl px-7 py-5 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
            {articles.map((item, i) => (
              <Feed
                key={i}
                title={item.item.title}
                link={item.item.link}
                date={item.item.pubDate}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
