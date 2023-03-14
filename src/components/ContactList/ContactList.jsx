import { useSelector } from 'react-redux';
import { getContacts, getFilterValue } from '../../redux/selectors';

import { ContactItem } from 'components/ContactItem/ContactItem';
import { ContacListStyled } from './ContactList.styled';

const getVisibleContacts = (contacts, filterValue) => {
  if (filterValue !== '') {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  }
  return contacts;
};

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilterValue);
  const visibleContacts = getVisibleContacts(contacts, filterValue);

  return (
    <ContacListStyled>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </ContacListStyled>
  );
};
