import {Link} from 'react-router-dom';

function DirectorCard({id, name, movies}) {
  
  return (
    <article>
        <h2>{name}</h2>
        {movies.map((movie, index) => (
            <li key={index}>{movie}</li>
          ))}
    </article>
  );
};

export default DirectorCard;