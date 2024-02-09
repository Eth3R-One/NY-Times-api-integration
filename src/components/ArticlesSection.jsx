import { useEffect, useState } from "react";
import { getSectionDetails } from "../utils/getSectionDetails";
import Loading from "./Loading";

const API_URL = "https://api.nytimes.com/svc";
const POPULAR_ARTICLE_EMAIL = "mostpopular/v2/emailed";
const MOST_SHARED_ARTICLES = "mostpopular/v2/shared";

function ArticlesSection() {
  const [articleSection, setArticleSection] = useState(0);
  const { heading, details } = getSectionDetails(articleSection);
  const [isLoading, setIsloading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [popularArticles, setPopularArticles] = useState([]);
  const [sharedArticles, setSharedArticles] = useState([]);
  const [tempArticles, setTempArticles] = useState([]);

  useEffect(() => {
    let ignore = false;
    async function popular_articles() {
      setIsloading(true);

      try {
        const res = await fetch(
          `${API_URL}/${POPULAR_ARTICLE_EMAIL}/7.json?api-key=${import.meta.env.VITE_KEY}`
        );
        if (!res.ok)
          throw new Error(`This is an HTTP error: The status is ${res.status}`);
        const data = await res.json();
        setPopularArticles(data.results);
        setTempArticles(data.results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsloading(false);
      }
    }

    async function fetch_most_shared_article() {
      try {
        setIsloading(true);
        const res = await fetch(
          `${API_URL}/${MOST_SHARED_ARTICLES}/7.json?api-key=${import.meta.env.VITE_KEY}`
        );
        if (!res.ok) throw new Error(`This is an HTTP error: ${res.status}`);
        const data = await res.json();
        setSharedArticles(data.results);
        setTempArticles(data.json);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsloading(false);
      }
    }

    if (!ignore) {
      if (articleSection == 0) {
        popular_articles();
      } else {
        fetch_most_shared_article();
      }
    }

    return () => {
      ignore = true;
    };
  }, [articleSection]);

  useEffect(() => {
    let ignore = false;
    if (!ignore) {
      if (articleSection === 0) {
        setTempArticles(() => {
          return popularArticles?.filter((article) => {
            if (searchTerm?.length < 3) return article;
            if (article.title.toLowerCase().includes(searchTerm.toLowerCase()))
              return article;
          });
        });
      } else {
        setTempArticles(() => {
          return sharedArticles?.filter((article) => {
            if (searchTerm?.length < 3) return article;
            if (article.title.toLowerCase().includes(searchTerm.toLowerCase()))
              return article;
          });
        });
      }
    }

    return () => {
      ignore = false;
    };
  }, [searchTerm, popularArticles, sharedArticles]);

  function handleArticleSection(setionId) {
    setArticleSection(setionId);
  }

  return (
    <div className="pt-20 md:pt-10">
      <div className="pt-10 flex justify-center md:mt-[40px] gap-5">
        <form>
          <div className="flex">
            <div className="relative overflow-hidden rounded-lg text-gray-900 md:min-w-[380px] lg:min-w-[440px]">
              <input
                type="search"
                id="search-dropdown"
                className="z-20 block w-full bg-gray-300 px-4 py-2 pr-10 focus:outline-none"
                placeholder="Search Task"
                required
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                type="submit"
                onClick={(evt) => evt.preventDefault()}
                className="absolute right-2 top-0 h-full rounded-e-lg text-black md:right-4"
              >
                <svg
                  className="h-4 w-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </div>
          </div>
        </form>
        <button
          className={`${articleSection == 0 && "underline shadow-slate-500"}`}
          onClick={() => handleArticleSection(0)}
        >
          Popular articles
        </button>
        <button
          className={`${articleSection == 1 && "underline shadow-slate-500"}`}
          onClick={() => handleArticleSection(1)}
        >
          Shared articles
        </button>
      </div>
      <section className="pb-[80px] md:mt-[100px]">
        <div className="container lg:px-20">
          <div className="grid items-center gap-5 ">
            <div>
              <h1 className="mb-1.5 text-[56px] font-bold leading-none text-[#191D26] lg:text-[73px]">
                {heading}
              </h1>
              <p className="text-lg my-2 opacity-80">{details}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="px-10">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
          {isLoading ? (
            <Loading />
          ) : !searchTerm.length &&
            !tempArticles?.length &&
            (articleSection
              ? sharedArticles?.length == 0
              : popularArticles?.length == 0) ? (
            <div>
              <p className="flex justify-center text-xl text-red-700">
                Error fetching data
              </p>
            </div>
          ) : (
            <>
              {tempArticles?.length < 1 ? (
                <div className="text-center xl:w-full">
                  No search result for: {searchTerm}
                </div>
              ) : (
                tempArticles?.map((article) => {
                  return (
                    <div key={article.id} className="py-4 justify-center">
                      <a href={article.url} target="_blank" rel="noreferrer">
                        <div className="h-48 rounded-lg bg-gray-200">
                          <div className="flex gap-2 items-center">
                            <img
                              className="w-24 h-24 rounded snap-center sm:w-48 sm:h-48"
                              alt={article.title}
                              src={
                                article.media?.length > 0
                                  ? article?.media[0]["media-metadata"][0].url
                                  : ""
                              }
                            />
                            <div className="flex flex-col">
                              <strong className="text-[#321e63]">
                                {article.title}
                              </strong>
                              <span className="text-sm text-[#191D26]">
                                {article.abstract}
                              </span>
                              <span className="text-sm bold">
                                <strong>Published On : </strong>
                                {article.published_date}
                              </span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  );
                })
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ArticlesSection;
