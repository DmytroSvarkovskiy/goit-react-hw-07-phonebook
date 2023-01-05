import { FormWr, Input, Label, Button } from './ContactForm.styled';
import { useForm } from 'react-hook-form';
import { nanoid } from 'nanoid';
import { addContact } from 'Redux/contactskSlise';
import { useDispatch, useSelector } from 'react-redux';

export const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const currentContacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const submit = value => {
    const newContact = { id: nanoid(3), ...value };
    const newContactName = newContact.name.toLowerCase();
    if (
      currentContacts.find(
        contact => contact.name.toLowerCase() === newContactName
      )
    ) {
      alert(`${newContact.name} is already in contact`);
    } else {
      dispatch(addContact(newContact));
      reset();
    }
  };
  return (
    <FormWr onSubmit={handleSubmit(submit)}>
      <Label>
        Name
        <Input
          type="text"
          {...register('name', { required: true })}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Enter name"
        />
      </Label>
      <Label>
        Number
        <Input
          placeholder="Enter number"
          type="tel"
          {...register('number', { required: true })}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </FormWr>
  );
};
