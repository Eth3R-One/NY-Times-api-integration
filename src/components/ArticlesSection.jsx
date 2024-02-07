import { useState } from "react";
import { getSectionDetails } from "../utils/getSectionDetails";

function ArticlesSection() {
  const [articleSection, setArticleSection] = useState(0);

  const { heading, details } = getSectionDetails(articleSection);

  function handleArticleSection(setionId) {
    setArticleSection(setionId);
  }
  return (
    <div className="pt-20">
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
              />
              <button
                type="submit"
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
    </div>
  );
}

export default ArticlesSection;
