import React from "react";

export default function MyWatchedList({ watchedList, deleteAnime }) {
  const handleDelete = (id) => {
    const updatedWatchedList = watchedList.filter((anime) => anime.id !== id);

    if (deleteAnime) {
      deleteAnime(updatedWatchedList);
    }
  };

  return (
    <div className="watchedanime">
      <h1>Watched Anime List</h1>
      <ul>
        {watchedList.map((anime) => (
          <li key={anime.id}>
            <h1>{anime.Title}</h1>
            <h2>{anime.Genre}</h2>
            <h2>{anime.Year}</h2>
            <img src={anime.Poster} alt={anime.Title} />
            <button onClick={() => handleDelete(anime.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
