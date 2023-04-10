import { useSelector, useDispatch } from 'react-redux';
import { ImUserMinus } from 'react-icons/im';
import PropTypes from 'prop-types';
import { Button } from 'components';
import { getContacts, getFilter } from 'redux/selectors';
import { remove } from 'redux/contactsSlice';
import { List, Item } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <List>
      {getVisibleContacts().map(({ id, name, number }) => (
        <Item key={id}>
          {name}: {number}
          <Button
            icon={ImUserMinus}
            onClick={() => dispatch(remove(id))}
            aria-label="Delete contact"
          >
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
};
