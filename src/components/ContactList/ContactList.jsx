import { useSelector } from 'react-redux';
import { getContacts, getStatusFilter } from '../../redux/selectors';
import { statusFilters } from '../../redux/constants';

import { ContactItem } from 'components/ContactItem/ContactItem';
import { ContacListStyled } from './ContactList.styled';

const getVisibleContacts = (contacts, statusFilter) => {
  // console.log(statusFilter);

  switch (statusFilter) {
    case statusFilters.active:
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(statusFilter.value.toLowerCase())
      );
    default:
      return contacts;
  }
};

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const statusFilter = useSelector(getStatusFilter);
  const visibleContacts = getVisibleContacts(contacts, statusFilter);

  return (
    <ContacListStyled>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </ContacListStyled>
  );
};
