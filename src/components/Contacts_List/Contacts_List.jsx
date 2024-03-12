import ContactItem from 'components/Contact_Item/Contact_Item';
import { useDispatch } from 'react-redux';
import { removeContact } from 'store/contacts/contactsSlice';
const ContactsList = ({ contacts }) => {
  const dispatch = useDispatch();

  return (
    <>
      {contacts && (
        <ul>
          {contacts.map(({ name, number, id }) => (
            <ContactItem
              key={id}
              name={name}
              number={number}
              onRemove={() => dispatch(removeContact(id))}
            />
          ))}
        </ul>
      )}
    </>
  );
};
export default ContactsList;
