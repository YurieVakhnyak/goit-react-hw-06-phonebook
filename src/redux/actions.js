import { nanoid } from 'nanoid';

export const addContacts = (name, number) => {
  return {
    type: 'contacts/addContact',
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
};

export const deleteContact = contactId => {
  console.log(contactId);

  return {
    type: 'contacts/deleteContact',
    payload: contactId,
  };
};

export const setFilterValue = value => {
  return {
    type: 'filterValue/setFilterValue',
    payload: value,
  };
};
