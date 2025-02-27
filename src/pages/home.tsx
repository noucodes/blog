import Article from "../components/Articles";
import articlesData from "../data/articles.json";
import { Article as ArticleType } from "../types/Article";
import Sidemenu from "../components/Sidemenu";

const articles: ArticleType[] = articlesData;

const Home = () => {
  return (
    <div className="wrapper h-svh w-full flex justify-center font-display text-sm text-neutral-800">
      <div className="pageLayout grid grid-cols-1 md:grid-cols-3 gap-20 px-8  md:px-2 lg:px-0 w-full md:w-[90%] lg:w-[60%] pt-20">
        <Sidemenu />
        <div className="articles col-span-2 pt-4">
          {articles.map((article, index) => (
            <Article key={index} {...article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
