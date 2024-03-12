import { useDispatch } from 'react-redux';
import style from './Contact_Item.module.css';
import { removeContact } from 'store/contacts/contactsSlice';
const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <li className={style.contact_item}>
      {name} : {number}
      <button
        onClick={() => {
          dispatch(removeContact(id));
        }}
      >
        Remove
      </button>
      <div></div>
    </li>
  );
};
export default ContactItem;
