import { useEffect, useState } from "react";
import "./App.css";
import MyToWatchList from "./components/MyToWatchList";
import Nav from "./components/Nav";
import { Routes, Route, Navigate } from "react-router-dom";
import MyWatchedList from "./components/MyWatchedList";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  // const apiKey = import.meta.env.REACT_APP_API_KEY;

  const [anime, setAnime] = useState(null);

  const getAnime = async (searchTerm) => {
    try {
      const response = await fetch(
        `https://api.myanimelist.net/v2?${searchTerm}`,
        {
          method: "GET",
          headers: {
            "X-MAL-CLIENT-ID":"9df87d3b47deb08c893d7aced13b3fdb",
          },
        }
      );

      //       Client ID	9df87d3b47deb08c893d7aced13b3fdb
      // Client Secret	7cd96821d1fa800cac39fef44ad3265a74ca4ed3b152abee33a997dc47733cd5
      // Client ID and Client Secret must not be disclosed.

      // if (response.status === 429) {
      //   console.error("API Rate Limit Exceeded Error:", response.statusText);
      //   return;
      // }
      const data = await response.json();

      setAnime(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getAnime("One Piece");
  }, []);

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Navigate to="/MyToWatchList" />} />
          <Route
            path="/MyToWatchList"
            element={<MyToWatchList anime={anime} />}
          />
          <Route
            path="/MyWatchedList"
            element={<MyWatchedList getAnime={getAnime} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
