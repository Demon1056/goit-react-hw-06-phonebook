import { configureStore, createSlice } from '@reduxjs/toolkit';

const myContactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.id);
    },
  },
});

export const { addContact, deleteContact } = myContactsSlice.actions;

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const { changeFilter } = filterSlice.actions;

export const store = configureStore({
  reducer: {
    myContacts: myContactsSlice.reducer,
    filter: filterSlice.reducer,
  },
});
