import { connect } from 'react-redux';
import MovieDetails from './MovieDetails';
import { fetchMovieDetail } from './actions';

const mapStateToProps = (state) => ({
  movie: state.movies.details.info,
  loading: state.movies.details.loading,
  error: state.movies.details.error,
});

export default connect(mapStateToProps, { onMount: fetchMovieDetail })(MovieDetails);