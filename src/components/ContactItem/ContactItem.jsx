import { useDispatch } from 'react-redux';
import { MdPhone } from 'react-icons/md';
import { DeleteButton } from 'components/ContactItem/ContactItem.styled';

import {
  ContactItemStyled,
  ContactName,
} from 'components/ContactItem/ContactItem.styled';
import { deleteContact } from 'redux/actions';

export const ContactItem = ({ id, number, name }) => {
  console.log(id, number, name);

  const dispatch = useDispatch();

  const onDeleteContact = evt => {
    dispatch(deleteContact(evt.target.name));
  };

  return (
    <ContactItemStyled key={id}>
      <MdPhone />
      <ContactName>
        {name} : {number}
      </ContactName>
      <DeleteButton type="button" name={id} onClick={onDeleteContact}>
        Delete
      </DeleteButton>
    </ContactItemStyled>
  );
};
