import React, { useState, useEffect } from 'react';
import shortid from 'shortid';
import { ContactForm } from './Form/Form';
import { ContactList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { PhoneBook, InformationArea } from './App.styled';
export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  useEffect(() => {
    const contactsFromStorage = localStorage.getItem('contacts');
    const parceContacts = JSON.parse(contactsFromStorage);
    if (parceContacts) {
      setContacts(parceContacts);
    }
  }, []);
  useEffect(() => {
    if (contacts.length > 0) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  const filterContacts = () => {
    return contacts.filter(({ name }) =>
      name.toUpperCase().includes(filter.toUpperCase())
    );
  };
  const deleteContacts = item => {
    const newContacts = contacts.filter(contact => contact.id !== item.id);
    setContacts(newContacts);
  };
  const updateFilter = e => setFilter(e.currentTarget.value);
  const generId = () => shortid.generate();

  const updateContacts = (values, actions) => {
    actions.resetForm();
    if (contacts.find(({ name }) => name === values.name)) {
      return alert(`${values.name} is already in contacts`);
    }
    return setContacts([...contacts, { id: generId(), ...values }]);
  };

  const contactsLength = contacts.length;
  return (
    <PhoneBook>
      <ContactForm showName={updateContacts} />
      <InformationArea>
        <h2>CONTACTS</h2>
        <Filter updateFilter={updateFilter} />
        {contactsLength > 0 && (
          <ContactList data={filterContacts()} deleteContact={deleteContacts} />
        )}
      </InformationArea>
    </PhoneBook>
  );
};
