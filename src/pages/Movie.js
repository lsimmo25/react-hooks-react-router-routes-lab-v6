import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Movie() {

  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
      .then(r => r.json())
      .then(data => setMovieInfo(data))
      .catch(error => {
        console.error("Error fetching movie:", error)
        setMovieInfo([])
      })
  }, [id])

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        {movieInfo ? (
          <>
            <h1>{movieInfo.title}</h1>
            <p>{movieInfo.time}</p>
            {movieInfo.genres && movieInfo.genres.length > 0 ? (
              <div>
                <p>Genres:</p>
                <span>
                  {movieInfo.genres.map((genre, index) => (
                    <span key={index} className="genre">{genre}</span>
                  ))}
                </span>
              </div>
            ) : (
              <p>No genres available</p>
            )}
          </>
        ) : (
          <p>Loading...</p>
        )}
      </main>
    </>
  );
}

export default Movie;
