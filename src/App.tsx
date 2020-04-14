import React from "react";
import "./App.css";
import { StoryList } from "./components/storyList/storyList.component";
import { StoryComments } from "./components/storyComments/storyComments.component";
import { Switch, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <img src="../hacker-news.png" width="200" alt="logo" />
      </header>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={StoryList} exact />
          <Route path="/comments/:id" component={StoryComments} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
