import ContactItem from 'components/Contact_Item/Contact_Item';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'store/selectors/selectors';
const ContactsList = () => {
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);
  const filterContacts = () => {
    const normalValue = filter.toLowerCase().trim();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalValue)
    );
  };

  return (
    <>
      {
        <ul>
          {filterContacts().map(({ name, number, id }) => (
            <ContactItem key={id} name={name} number={number} id={id} />
          ))}
        </ul>
      }
    </>
  );
};
export default ContactsList;
