import {Link} from 'react-router-dom';

function ActorCard({id, name, movies}) {
  
  return (
    <article>
        <h2>{name}</h2>
        <ul>
          {movies.map((movie, index) => (
            <li key={index}>{movie}</li>
          ))}
        </ul>
    </article>
  );
};

export default ActorCard;