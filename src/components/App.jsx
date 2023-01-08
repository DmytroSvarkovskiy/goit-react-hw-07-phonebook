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
  const { isLoading, error, items } = useSelector(state => state.contacts);

  return (
    <div>
      <GlobalStyle />
      <h1>PhoneBook</h1>
      <ContactForm />
      {error ? (
        <h2>{error}</h2>
      ) : (
        <>
          {' '}
          <h2>Contacts : {isLoading && <Loader />} </h2>
          {items.length === 0 && !isLoading ? (
            <h2>You have no contacts saved</h2>
          ) : (
            <>
              <Filter />
              <Contactlist />
            </>
          )}
        </>
      )}
    </div>
  );
};
