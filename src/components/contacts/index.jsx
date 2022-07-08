import { useState, useEffect } from "react";
import List from "./List";
import Form from "./Form";

function Contacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div id="container">
      <h1>Contacts App </h1>
      <Form addContact={setContacts} contacts={contacts} />
      <List contacts={contacts} />
    </div>
  );
}

export default Contacts;
