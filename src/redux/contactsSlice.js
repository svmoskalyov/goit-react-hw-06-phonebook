import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    add(state, { payload }) {
      // state.contacts.push(payload);
      return {
        ...state,
        contacts: [payload, ...state.contacts],
      };
    },

    remove(state, { payload }) {
      // const index = state.contacts.findIndex(contact => contact.id === payload);
      // state.contacts.splice(index, 1);
      return {
        ...state,
        contacts: state.contacts.filter(el => el.id !== payload),
      };
    },

    filter(state, { payload }) {
      // state.filter = payload;
      return {
        ...state,
        filter: payload,
      };
    },
  },
});

export const { add, remove, filter } = contactsSlice.actions;
export default contactsSlice.reducer;
