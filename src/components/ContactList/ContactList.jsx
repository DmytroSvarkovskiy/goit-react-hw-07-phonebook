import { Button, Item, List } from './ContactList.styled';
import { removeContact } from 'Redux/contactsSlise';
import { useDispatch, useSelector } from 'react-redux';

export const Contactlist = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filterData = useSelector(state => state.filter).toLowerCase();
  const visibleContacts = contacts.filter(abonent =>
    abonent.name.toLowerCase().includes(filterData)
  );

  return (
    <List>
      {visibleContacts.map(({ id, name, phone }) => (
        <Item key={id}>
          {name}: {phone}
          <Button type="button" onClick={() => dispatch(removeContact(id))}>
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};
