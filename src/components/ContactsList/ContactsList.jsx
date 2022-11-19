import PropTypes from 'prop-types';
import { ListItem } from './ContactsListStyled';
export const ContactList = ({ data, deleteContact }) => {
  return (
    <ul>
      {data.map(item => (
        <ListItem key={item.id}>
          {`${item.name} : ${item.number}`}
          <button onClick={() => deleteContact(item)}>Delete</button>
        </ListItem>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  data: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
