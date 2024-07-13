import RSSParser from "rss-parser";
import cors from "cors";
import express from "express";

let parser = new RSSParser();
const feedUrl = "https://netflixtechblog.com/feed";
let articles = [];

const parse = async (url) => {
  const feed = await parser.parseURL(url);
  feed.items.forEach((item) => {
    // console.log(`${item.title} \n ${item.link}\n\n`);
    articles.push({ item });
  });
};

parse(feedUrl);

let app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send(articles); 
});

const server = app.listen("4000", (req, res) => {
  console.log("App is Listening on at http://localhost:4000");
});

export default server;
