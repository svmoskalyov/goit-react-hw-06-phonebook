import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { filter } from 'redux/contactsSlice';
import { Label, Input } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(filter(e.target.value));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Label>
        Find contacts by name
        <Input
          type="text"
          name="filter"
          onChange={handleSubmit}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For
        example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
    </form>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
