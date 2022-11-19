import PropTypes from 'prop-types';
export const Filter = ({ updateFilter }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" name="filter" onChange={updateFilter} />{' '}
    </>
  );
};
Filter.propTypes = {
  updateFilter: PropTypes.func.isRequired,
};
