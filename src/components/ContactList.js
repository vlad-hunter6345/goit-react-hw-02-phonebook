import React from "react";
const ContactList = ({ contacts }) => {
  console.log("Contacts", contacts);
  return (
    <>
      <ul
        style={{
          margin: "0% 45%",
        }}
      >
        <h2>Contact List</h2>
        <label htmlFor="search">Search by name</label>
        <input placeholder="Enter who you want to find" id="search" type="text" />
        {contacts.map((elem) => {
          console.log(elem);
          return (
            <li key={elem.id}>
              <h3>{elem.name}</h3>
              <p>{elem.number}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ContactList;
