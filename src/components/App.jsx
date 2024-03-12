import { selectContacts, selectFilter } from 'store/selectors/selectors';
import ContactForm from './Contact_Form/Conatact_Form';
import ContactsList from './Contacts_List/Contacts_List';
import Filter from './Filter/Filter';
import { useSelector } from 'react-redux';
const App = () => {
  const { filter } = useSelector(selectFilter);
  const { contacts } = useSelector(selectContacts);
  const filterContacts = () => {
    const normalValue = filter.toLowerCase().trim();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalValue)
    );
  };
  return (
    <>
      <h2>Phonebook</h2>
      <ContactForm />
      <h3>Contacts</h3>
      <div>
        <p>Find contacts by name</p>
        <Filter />
      </div>
      {<ContactsList contacts={filterContacts()} />}
    </>
  );
};
export default App;
