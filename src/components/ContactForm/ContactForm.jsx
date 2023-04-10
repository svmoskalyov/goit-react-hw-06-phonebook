import { useDispatch, useSelector } from 'react-redux';
import { ImUserPlus } from 'react-icons/im';
import { Formik, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { Button } from 'components';
import { add } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';
import { Forma, Label, Input } from './ContactForm.styled';

const nameRegex = RegExp(
  /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/
);
const numberRegex = RegExp(
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/
);

const SignupSchema = Yup.object().shape({
  name: Yup.string().matches(nameRegex, 'Invalid name').required(),
  number: Yup.string().matches(numberRegex, 'Invalid number').required(),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = (values, { resetForm }) => {
    const findContact = contacts.find(contact => contact.name === values.name);
    const findNumber = contacts.find(
      contact => contact.number === values.number
    );

    if (findContact) {
      alert(`${values.name} is already in contacts`);
      return;
    } else if (findNumber) {
      alert(`${values.number} is already in contacts`);
      return;
    } else {
      const contact = { id: nanoid(), ...values };
      dispatch(add(contact));
      resetForm();
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignupSchema}
      onSubmit={handleSubmit}
    >
      <Forma>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Your name"
          />
          <ErrorMessage name="name" />
        </Label>

        <Label>
          Number
          <Input
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="000-00-00"
          />
          <ErrorMessage name="number" />
        </Label>

        <Button type="submit" icon={ImUserPlus} aria-label="Add contact">
          Add contact
        </Button>
      </Forma>
    </Formik>
  );
};

ContactForm.propTypes = {
  values: PropTypes.object,
};
