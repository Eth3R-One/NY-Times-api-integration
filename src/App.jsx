import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div>
        Hello there
        <div>{import.meta.env.VITE_SECRET}</div>
      </div>
    </>
  );
}

export default App;
