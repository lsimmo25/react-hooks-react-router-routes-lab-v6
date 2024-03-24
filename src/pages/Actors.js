import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import ActorCard from "../components/ActorCard";

function Actors() {

  const [actors, setActors] = useState([])

  useEffect(() => {
    fetch(`http://localhost:4000/actors`)
    .then(r => r.json())
    .then(data => setActors(data))
  }, [])

  return (
    <>
      <header>
        <NavBar />
        <h1>Actors Page</h1>
      </header>
      <main>
        {actors.map(actor => (
          <ActorCard key={actor.id} {...actor}/>
        ))}
      </main>
    </>
  );
};

export default Actors;
