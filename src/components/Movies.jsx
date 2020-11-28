import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService";
import Like from "./common/Like";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete(movie) {
    const deleted = deleteMovie(movie._id);
    this.setState(this.state.movies.filter((movieDb) => movieDb !== deleted));
  }

  handleLiked = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    console.log(movies[index]);
    movies[index].liked = !movies[index].liked;
    this.setState({movies})




  }


  render() {
    return (
      <main className="container">
        <h1>Movies</h1>
        <p>
          {this.state.movies.length === 0
            ? "There are no movies in the list"
            : `there are ${this.state.movies.length} movies in the list`}
        </p>
        <table className="table-light">
          <thead className="thead-light">
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like onMovieLike={() => {this.handleLiked(movie)}} like={movie.liked} />
                </td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <ul>{this.state.movies.map(movie => <li key={movie._id}>{movie.title}</li>)}</ul> */}
      </main>
    );
  }
}

export default Movies;
