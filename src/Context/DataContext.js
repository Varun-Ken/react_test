import axios from "axios";
import { format } from "date-fns";
import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const DataContext = createContext("Bunker");

export const DataProvider = ({ children }) => {
  const heading = "Bunker";
  const API_URL = "http://localhost:3333/posts";
  const values = [
    {
      id: 1,
      title: "1st Post",
      date: "23rd June, 2023",
      body: "Won 1st place in “Project Expo” conducted by Mount Zion College of Engineering.",
    },
    {
      id: 2,
      title: "2nd Post",
      date: "5th May, 2023",
      body: "Won 1st place in “Paper Presentation” conducted by Shri Bharathi Engineering College.",
    },
    {
      id: 3,
      title: "3rd Post",
      date: "3rd April, 2024",
      body: "Won 2nd place in “Web Designing” conducted by Mount Zion College of Engineering.",
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(API_URL);
        setPosts(response.data);
      } catch (error) {
        setFetchError(error.message);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
        //setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [body, setBody] = useState("");
  const [editBody, setEditBody] = useState("");
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const filterResults = posts.filter(
      (post) =>
        (post.body.toLowerCase()).includes(search.toLowerCase())
    );
    setSearchResults(filterResults.reverse());
  }, [search, posts]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let len = posts.length;
    const id = posts.length ? posts[len - 1].id + 1 : 1;
    const date = format(new Date(), "dd MMMM, yyyy");
    const newPost = { id, title, body, date };
    const response = axios.post(API_URL, newPost);
    const resultPost = [...posts, newPost];
    setPosts(resultPost);
    setTitle("");
    setBody("");
    navigate("/");
  };

  const handleEditSubmit = async (id) => {
    const date = format(new Date(), "dd MMMM, yyyy");
    const updatePost = { id, title:editTitle, date, body:editBody };
    try {
      const response = await axios.put(API_URL+`/${id}`, updatePost);
      setPosts(posts.map(post => post.id === id ? {...response.data} : post))
    } catch (error) {
      setFetchError(error.message);
    }
    navigate("/");
  };

  return (
    <DataContext.Provider
      value={{
        heading,
        posts,
        setPosts,
        title,
        setTitle,
        body,
        setBody,
        handleSubmit,
        handleEditSubmit,
        editTitle,
        setEditTitle,
        editBody,
        setEditBody,
        search,
        setSearch,
        fetchError,
        isLoading,
        searchResults,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
