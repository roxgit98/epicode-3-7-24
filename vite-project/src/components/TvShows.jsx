import { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
class TvShows extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies1: [],
      movies2: [],
      movies3: [],
      isLoading: false,
    };
  }

  fetchMovies1 = () => {
    this.setState({ isLoading: true });
    fetch("http://www.omdbapi.com/?apikey=142c9226&s=breaking bad")
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("errore nel reperimento dei dati");
        }
      })
      .then((resp) => {
        if (resp.Search) {
          this.setState({ movies1: resp.Search, isLoading: false });
        }
      })

      .catch((err) => alert(err));
  };

  fetchMovies2 = () => {
    this.setState({ isLoading: true });
    fetch("http://www.omdbapi.com/?apikey=142c9226&s=mr.robot")
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("errore nel reperimento dei dati");
        }
      })
      .then((resp) => {
        if (resp.Search) {
          this.setState({ movies2: resp.Search, isLoading: false });
        }
      })

      .catch((err) => alert(err));
  };

  fetchMovies3 = () => {
    this.setState({ isLoading: true });
    fetch("http://www.omdbapi.com/?apikey=142c9226&s=the office")
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("errore nel reperimento dei dati");
        }
      })
      .then((resp) => {
        if (resp.Search) {
          this.setState({ movies3: resp.Search, isLoading: false });
        }
      })

      .catch((err) => alert(err));
  };

  componentDidMount() {
    this.fetchMovies1();
    this.fetchMovies2();
    this.fetchMovies3();
  }

  render() {
    return (
      <>
        <h4>Trending Now</h4>
        <Row
          xs={1}
          sm={2}
          lg={4}
          xl={6}
          className="mb-5 justify-content-evenly"
        >
          {this.state.movies1.slice(0, 6).map((movie) => (
            <Col key={movie.imdbID} className="mb-2 text-center px-1">
              <Link to={"/movie-details/" + movie.imdbID}>
                <img src={movie.Poster} alt="movie" className="img-fluid" />
              </Link>
            </Col>
          ))}
        </Row>

        <h4>Watch it again</h4>
        <Row
          xs={1}
          sm={2}
          lg={4}
          xl={6}
          className="mb-5 justify-content-evenly"
        >
          {this.state.movies2.slice(0, 6).map((movie) => (
            <Col key={movie.imdbID} className="mb-2 text-center px-1">
              <Link to={"/movie-details/" + movie.imdbID}>
                <img src={movie.Poster} alt="movie" className="img-fluid" />
              </Link>
            </Col>
          ))}
        </Row>

        <h4>New releases</h4>
        <Row
          xs={1}
          sm={2}
          lg={4}
          xl={6}
          className="mb-5 justify-content-evenly"
        >
          {this.state.movies3.slice(0, 6).map((movie) => (
            <Col key={movie.imdbID} className="mb-2 text-center px-1">
              <Link to={"/movie-details/" + movie.imdbID}>
                <img src={movie.Poster} alt="movie" className="img-fluid" />
              </Link>
            </Col>
          ))}
        </Row>
      </>
    );
  }
}

export default TvShows;
