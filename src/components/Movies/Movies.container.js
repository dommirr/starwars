import { connect } from 'react-redux';
import Movies from './Movies';
import { fetchMovies } from './actions';

const mapStateToProps = (state) => ({
  movies: state.movies.list,
  status: state.movies.status,
  loading: state.movies.loading,
});

export default connect(mapStateToProps, { fetchMovies })(Movies);