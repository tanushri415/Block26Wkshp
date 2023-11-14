/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import ContactRow from './ContactRow';
import '../App.css';

const ContactList = ({ setSelectedContactId }) => {
  const [contacts, setContacts] = useState(null);

  useEffect(() => {
    async function fetchContacts() {
      try {
        const res = await fetch(
          'https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users'
        );
        const result = await res.json();
        console.info(result);
        setContacts(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContacts();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th colSpan='3'>ContactList</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
        {contacts?.map((contact) => {
          return (
            <ContactRow
              key={contact.id}
              setSelectedContactId={setSelectedContactId}
              contact={contact}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default ContactList;
