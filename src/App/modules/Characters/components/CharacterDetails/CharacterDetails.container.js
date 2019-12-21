import { connect } from 'react-redux';
import CharacterDetails from './CharacterDetails';
import { fetchCharacterDetails } from './actions';

const mapStateToProps = (state) => ({
  character: state.characters.details.info,
  loading: state.characters.details.loading,
  error: state.characters.details.error,
});

export default connect(mapStateToProps, { onChangeId: fetchCharacterDetails })(CharacterDetails);