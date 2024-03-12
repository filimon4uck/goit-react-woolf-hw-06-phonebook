import ContactForm from './Contact_Form/Conatact_Form';
import ContactsList from './Contacts_List/Contacts_List';
import Filter from './Filter/Filter';
const App = () => {
  return (
    <>
      <h2>Phonebook</h2>
      <ContactForm />
      <h3>Contacts</h3>
      <div>
        <p>Find contacts by name</p>
        <Filter />
      </div>
      <ContactsList />
    </>
  );
};
export default App;
