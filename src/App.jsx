// import react from "react";
import Header from "./Components/Header";
import Project from "./Components/Project";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <div className="ParentComponent m-auto max-w-4xl">
      <Header />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
