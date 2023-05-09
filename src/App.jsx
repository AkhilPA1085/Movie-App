import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import { fetchMovieApi } from "./utils/api";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getApiConfiguration, getGeners } from "./store/homeSlice";
import Details from "./pages/details/Details";
import SearchResults from "./pages/searchResults/SearchResults";
import Explore from "./pages/explore/Explore";
import PageNotFound from "./pages/404/PageNotFound";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import useFetch from "./hooks/useFetch";

function App() {
  const dispatch = useDispatch();

  // const {url} = useSelector((state)=>state.home)

  useEffect(() => {
    fetchApiConfig();
    getGenres();
  }, []);

  const fetchApiConfig = () => {
    fetchMovieApi("/configuration").then((res) => {
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      };

      dispatch(getApiConfiguration(url));
    });
  };

  const getGenres = async () => {
    let promises = [];
    let endpoints = ["movie", "tv"];
    let allGenres = {};

    endpoints.forEach((endpoint) => {
      promises.push(fetchMovieApi(`/genre/${endpoint}/list`));
    });

    const data = await Promise.all(promises);

    data?.map(({ genres})=>{
      return genres.map((item)=>(allGenres[item.id] = item));
    });
    dispatch(getGeners(allGenres))
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResults />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;
