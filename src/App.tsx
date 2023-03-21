import React from "react";
import logo from "./logo.svg";
import "./scss/styles.scss";

import Nav from "./components/Nav";
import Welcome from "./components/Welcome";
import Programs from "./components/Programs";

function App() {
  return (
    <main className="main_content">
      <Nav />
      <Welcome />
      <Programs />
    </main>
  );
}

export default App;
