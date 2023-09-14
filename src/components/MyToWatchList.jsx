import React, { useState } from "react";
import MyWatchedList from './MyWatchedList';

export default function MyToWatchList({ addAnime }) {
  const apiKey = "a6feff5944mshe6690bdceeb4925p143626jsne0fbdcbc354b";
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [toWatchList, setToWatchList] = useState([]);
  const [watchedList, setWatchedList] = useState([]);

  const markAsComplete = (anime) => {
    const animeId = anime.id;
    const updatedToWatchList = toWatchList.filter(
      (item) => item.id !== animeId
    );
    const completedAnime = searchResults.find((item) => item.id === animeId);

    if (completedAnime) {
      setToWatchList(updatedToWatchList);
      setWatchedList([...watchedList, completedAnime]);
    }
  };

  const handleSearch = async () => {
    if (searchTerm.trim() === "") {
      return;
    }

    try {
      const response = await fetch(
        `https://animes5.p.rapidapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );
      const data = await response.json();

      setSearchResults([...searchResults, data]);

      setSearchTerm("");
    } catch (e) {
      console.error(e);
    }
  };

  const addToMyWatchList = (anime) => {
    addAnime(anime);
  };

  return (
    <div className="addanime">
      <h1>Add Anime</h1>
      <div>
        <input
          type="text"
          placeholder="Search for Anime"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <ul>
        {searchResults.map((anime) => (
          <li key={anime.id}>
            <h1>{anime.Title}</h1>
            <h2>{anime.Genre}</h2>
            <h2>{anime.Year}</h2>
            <img src={anime.Poster} alt={anime.Title} />
            <button onClick={() => addToMyWatchList(anime)}>
              Add to Watch List
            </button>
            <button onClick={() => markAsComplete(anime)}>
              Anime Completed
            </button>
          </li>
        ))}
      </ul>
      <h2>Watched List</h2>
      <MyWatchedList watchedList={watchedList} />
    </div>
  );
}
