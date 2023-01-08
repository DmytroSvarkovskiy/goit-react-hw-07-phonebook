import { ContactForm } from './ContactForm/ContactForm';
import { Contactlist } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useSelector, useDispatch } from 'react-redux';
import { GlobalStyle } from './GlobalStyle';
import { useEffect } from 'react';
import { fetchContacts } from 'Redux/operations';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const contacts = useSelector(state => state.contacts.items);

  return (
    <div>
      <GlobalStyle />
      <h1>PhoneBook</h1>
      <ContactForm />
      <h2>Contacts :</h2>
      {contacts.length === 0 ? (
        <h2>You have no contacts saved</h2>
      ) : (
        <>
          <Filter />
          <Contactlist />
        </>
      )}
    </div>
  );
};
