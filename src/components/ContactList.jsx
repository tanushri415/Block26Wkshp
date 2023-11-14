import { useState } from 'react';
import ContactRow from './ContactRow';
import '../App.css';
import { dummyContacts } from './dummyContacts';

const ContactList = () => {
  const [contacts, setContacts] = useState(dummyContacts);
  console.log('contacts:', contacts);

  return (
    <table>
      <thead>
        <tr>
          <th colSpan='3'>ContactList</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        {contacts.map((contact) => {
          return <ContactRow key={contact.id} contact={contact} />;
        })}
      </tbody>
    </table>
  );
};

export default ContactList;
