import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Project from "./Projects";

const Main = () => {
  return (
    <main className="m-auto max-w-4xl px-4">
      <Header />
      <Project />
      <Footer />
    </main>
  );
};

export default Main;
