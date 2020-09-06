import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AllPosts from './components/AllPosts/AllPosts';
import NoMatch from './components/NoMatch/NoMatch';
import PostDetail from './components/PostDetail/PostDetail';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/allPosts">
            <AllPosts></AllPosts>
          </Route>
          <Route path="/post/:postId">
            <PostDetail></PostDetail>
          </Route>
          <Route exact path = "/">
            <AllPosts></AllPosts>
          </Route>
          <Route path = "*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
