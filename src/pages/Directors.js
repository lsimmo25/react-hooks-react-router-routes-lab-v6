import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import DirectorCard from "../components/DirectorCard"

function Directors() {

  const [directors, setDirectors] = useState([])

  useEffect(() => {
    fetch(`http://localhost:4000/directors`)
    .then(r => r.json())
    .then(data => setDirectors(data))
  })

  return (
    <>
      <header>
        <NavBar />
        <h1>Directors Page</h1>
      </header>
      <main>
        {directors.map(director => (<DirectorCard key={director.id} {...director}/>))}
      </main>
    </>
  );
};

export default Directors;
