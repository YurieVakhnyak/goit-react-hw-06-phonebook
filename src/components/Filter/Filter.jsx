import { useSelector, useDispatch } from 'react-redux';
import { statusFilters } from 'redux/constants';
import { getStatusFilter } from 'redux/selectors';
import { setStatusFilter } from 'redux/actions';

import { ContactInput } from 'components/ContactForm/ContactForm.styled';
import { FilterLabel } from 'components/Filter/Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getStatusFilter);

  const handleInput = filter => {
    console.log(filter);

    dispatch(setStatusFilter(filter));
    // console.log(statusFilters);
  };

  return (
    <FilterLabel>
      Find contact by name:
      <ContactInput
        type="name"
        placeholder="Enter searching name..."
        name="filter"
        value={filter}
        onChange={handleInput}
      />
    </FilterLabel>
  );
};
