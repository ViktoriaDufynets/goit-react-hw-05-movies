import { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import movieCast from "API/movieCast";
import ActorsList from "components/ActorsList/ActorsList";

function Cast() {
  const { movieId } = useParams();
  const [actors, setActors] = useState(null);
//  const [error] = useState(null);

  useEffect(() => {
    movieCast(movieId).then(({ cast }) => {
      const actorsArray = cast.map(({ id, name, profile_path }) => ({
          id,
          name,
          photo: profile_path,
    }));
      setActors(actorsArray);
    }).catch(error => {(console.log('No cast'))});
  }, [movieId]);

  return actors && <ActorsList actors={actors} />;
}

export default Cast;