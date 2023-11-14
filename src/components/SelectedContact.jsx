/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

const SelectedContact = ({ selectedContactId, setSelectedContactId }) => {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchSingleContact(userId) {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${userId}`
        );
        const result = await response.json();
        // console.info(result);
        setContact(result);
      } catch (err) {
        console.log(err);
      }
    }
    fetchSingleContact(selectedContactId);
  }, []);
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>phone</th>
          </tr>
          <tr>
            <td>{contact?.name}</td>
            <td>{contact?.email}</td>
            <td>{contact?.phone}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={() => setSelectedContactId(null)}>Close</button>
    </div>
  );
};

export default SelectedContact;
