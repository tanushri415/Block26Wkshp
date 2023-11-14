/* eslint-disable react/prop-types */
const ContactRow = ({ setSelectedContactId, contact }) => {
  const { name, email, phone } = contact;
  return (
    <tr onClick={() => setSelectedContactId(contact.id)}>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
    </tr>
  );
};

export default ContactRow;
