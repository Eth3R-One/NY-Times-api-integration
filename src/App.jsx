import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import ArticlesSection from "./components/ArticlesSection";
import BookSection from "./components/BookSection";

function App() {
  const [navSelectedSection, setNavSelectionSection] = useState(0);
  function handleClick(navSelectionId) {
    setNavSelectionSection(navSelectionId);
  }
  return (
    <>
      <NavBar>
        <button
          onClick={() => handleClick(0)}
          // bg-blue-400 text-white
          className={`p-2 rounded ${navSelectedSection == 0 ? "bg-blue-400 text-white" : "bg-white"}`}
        >
          Articles
        </button>
        <button
          onClick={() => handleClick(1)}
          className={`p-2 rounded ${navSelectedSection == 1 ? "bg-blue-400 text-white" : "bg-white"}`}
        >
          Books
        </button>
      </NavBar>

      <div className="grid">
        {navSelectedSection == 0 ? <ArticlesSection /> : <BookSection />}
      </div>
      <footer className="pb-20 md:pb-8 align-bottom text-[56px] font-bold leading-none text-[#191D26 ">
        <div className="container mx-auto">
          <p className="text-center text-xs text-[#6A6A6A] lg:text-sm">
            © |{" "}
            <a
              href="https://github.com/Eth3R-One"
              target="_blank"
              rel="noreferrer"
            >
              Refayth Hossain
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
