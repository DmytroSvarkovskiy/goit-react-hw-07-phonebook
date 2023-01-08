import { ContactForm } from './ContactForm/ContactForm';
import { Contactlist } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useSelector, useDispatch } from 'react-redux';
import { GlobalStyle } from './GlobalStyle';
import { useEffect } from 'react';
import { fetchContacts } from 'Redux/operations';
import { Loader } from './Loader/Loader';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const contacts = useSelector(state => state.contacts.items);
  const loading = useSelector(state => state.contacts.isLoading);

  return (
    <div>
      <GlobalStyle />
      <h1>PhoneBook</h1>
      <ContactForm />
      <h2>Contacts : {loading && <Loader />} </h2>
      {contacts.length === 0 && !loading ? (
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
