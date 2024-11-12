import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";

const News = () => {
  const [allNews, setAllNews] = useState([]);
  useEffect(() => {
    fetch("news.json")
      .then((res) => res.json())
      .then((data) => setAllNews(data));
  }, []);

  return (
    <div>
      <div>
        <h2 className="text-xl text-center font-bold ">Dragon News Home</h2>
      </div>
      <div className="">
        {allNews.map((news) => (
          <NewsCard key={news._id} news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default News;
