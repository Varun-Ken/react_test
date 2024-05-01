import React from "react";
import Header from "./Components/Header";
import { DataProvider } from "./Context/DataContext";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import NewPost from "./Components/NewPost";
import NotFound from "./Components/NotFound";
import EditPost from "./Components/EditPost";
import Post from "./Components/Post";

const App = () => {
  return (
    <div className="App">
      <DataProvider>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/post/:editId" element={<EditPost />} />
         
          <Route path="/newpost" element={<NewPost />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </DataProvider>
    </div>
  );
};

export default App;
