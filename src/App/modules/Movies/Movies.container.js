import { connect } from 'react-redux';
import Movies from './Movies';
import { fetchMovies } from './actions';

const mapStateToProps = (state) => ({
  movies: state.movies.list,
  loading: state.movies.loading,
  error: state.movies.error,
});

export default connect(mapStateToProps, { onMount: fetchMovies })(Movies);