import style from './Contact_Item.module.css';
const ContactItem = ({ name, number, onRemove }) => {
  return (
    <li className={style.contact_item}>
      {name} : {number}
      <button onClick={onRemove}>Remove</button>
      <div></div>
    </li>
  );
};
export default ContactItem;
