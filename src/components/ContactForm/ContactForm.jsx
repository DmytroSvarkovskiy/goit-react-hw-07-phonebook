import { FormWr, Input, Label, Button } from './ContactForm.styled';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'Redux/operations';

export const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const currentContacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const submit = value => {
    const formatTel = () => {
      const number = value.phone;
      const phoneLength = number.length;
      if (phoneLength < 7) {
        return `(${number.slice(0, 3)}) ${number.slice(3)}`;
      }
      return `(${number.slice(0, 3)}) ${number.slice(3, 6)}-${number.slice(
        6,
        10
      )}`;
    };
    const newContact = { name: value.name, phone: formatTel() };
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
          {...register('phone', { required: true })}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </FormWr>
  );
};
