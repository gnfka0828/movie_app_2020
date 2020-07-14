import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home"
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
    /*
      React Router Dom
      - https://justmakeyourself.tistory.com/entry/intro-react-router-v4

      BrowserRouter vs HashRouter
      - https://medium.com/@_diana_lee/react-react-router-%EC%A0%81%EC%9A%A9%ED%95%9C-react-%EC%95%B1%EC%9D%84-github-pages%EB%A1%9C-%EB%B0%B0%ED%8F%AC%ED%95%98%EB%8A%94-%EB%B2%95-5f6119c6a5d9
    */
  );
}

export default App;