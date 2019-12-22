import { connect } from 'react-redux';
import Characters from './Characters';
import { fetchCharacters, fetchSearchCharacters } from './actions';

const mapStateToProps = (state) => ({
  characters: state.characters.list,
  charactersFiltered: state.characters.list_filtered,
  error: state.characters.error,
  loading: state.characters.loading,
  count: state.characters.count,
});

export default connect(mapStateToProps, { fetchCharacters, fetchSearchCharacters })(Characters);