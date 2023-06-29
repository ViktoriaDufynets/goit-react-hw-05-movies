import { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import movieCredits from "API/movieCredits";
import ActorsList from "components/ActorsList/ActorsList";

function Cast() {
  const { movieId } = useParams();
  const [actors, setActors] = useState(null);
//  const [error] = useState(null);

  useEffect(() => {
    movieCredits(movieId).then(({ cast }) => {
      const actorsArray = cast.map(({ id, name, profile_path }) => ({
          id,
          name,
          photo: profile_path,
    }));
      setActors(actorsArray);
    });
  }, [movieId]);

  return actors && <ActorsList actors={actors} />;
}

export default Cast;