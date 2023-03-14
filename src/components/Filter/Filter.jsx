import { useSelector, useDispatch } from 'react-redux';
// import { statusFilters } from 'redux/constants';
import { getFilterValue } from 'redux/selectors';
import { setFilterValue } from 'redux/actions';

import { ContactInput } from 'components/ContactForm/ContactForm.styled';
import { FilterLabel } from 'components/Filter/Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilterValue);

  const handleInput = filter => {
    dispatch(setFilterValue(filter.target.value));
  };

  return (
    <FilterLabel>
      Find contact by name:
      <ContactInput
        type="name"
        placeholder="Enter searching name..."
        name="filter"
        value={filterValue}
        onChange={handleInput}
      />
    </FilterLabel>
  );
};
