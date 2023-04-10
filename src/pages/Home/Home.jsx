import { useSelector } from 'react-redux';
import { Box } from 'constants';
import { ContactForm, ContactList, Filter } from 'components';
import { getContacts } from 'redux/selectors';
import { Title } from './Home.styled';

export const Home = () => {
  const contacts = useSelector(getContacts);

  return (
    <Box as="main" display="grid" width="500px" mx="auto" p={4} gridGap="2em">
      <Box as="section">
        <Title>Phonebook</Title>
        <ContactForm />
      </Box>

      {contacts.length > 0 && (
        <Box as="section">
          <Title>Contacts</Title>
          <Filter />
          <ContactList />
        </Box>
      )}
    </Box>
  );
};
