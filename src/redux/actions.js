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

// export const toggleCompleted = contactId => {
//   return {
//     type: 'contacts/toggleCompleted',
//     payload: contactId,
//   };
// };

export const setStatusFilter = value => {
  return {
    type: 'filters/setStatusFilter',
    payload: value,
  };
};
