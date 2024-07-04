import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const [details, setDetails] = useState(null);
  const [comments, setComments] = useState([]);

  const params = useParams();

  useEffect(() => {
    const fetchMovieDetails = () => {
      fetch("http://www.omdbapi.com/?apikey=142c9226&i=" + params.movieID)
        .then((resp) => {
          if (resp.ok) {
            return resp.json();
          } else {
            throw new Error("errore nel reperimento dei dati");
          }
        })
        .then((data) => {
          console.log(data);
          setDetails(data);
        })
        .catch((err) => console.log(err));
    };

    const fetchComments = () => {
      fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + params.movieID,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZmE2MTdjMjM5YzAwMTUyZjRiNDEiLCJpYXQiOjE3MjAwOTkxODAsImV4cCI6MTcyMTMwODc4MH0.7eQmaWwderxs9sj50vBwS9RgZQ1toBZyjQn6ef5HvYI",
          },
        }
      )
        .then((resp) => {
          if (resp.ok) {
            return resp.json();
          } else {
            throw new Error("errore nel reperimento dei dati");
          }
        })
        .then((data) => {
          console.log(data);
          setComments(data);
        })

        .catch((err) => console.log(err));
    };

    fetchMovieDetails();
    fetchComments();
  }, [params.movieID]);

  return (
    <div className="text-center text-white">
      {details && (
        <>
          <h2>{details.Title}</h2>
          <img src={details.Poster} alt="poster" />
          <p className="my-3">
            <b>Trama:</b> {details.Plot}
          </p>
          <ul style={{ listStyleType: "none" }}>
            <b>Commenti:</b>
            {comments.map((comment, index) => (
              <li className="my-3" key={index}>
                {comment.comment}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
