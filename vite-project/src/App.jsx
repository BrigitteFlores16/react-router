import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PostsPage from "./pages/posts/PostsPage";
import ShowPost from "./pages/ShowPost";
import DefaultLayout from "./layouts/DefaultLayout";
import { PostsProvider } from "./pages/posts/PostsContext";

function App() {
  return (
    <PostsProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage} />
            <Route path="/about" Component={AboutPage} />
            <Route path="/post" Component={PostsPage} />
            <Route path="/post/:id" Component={ShowPost} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PostsProvider>
  );
}

export default App;
