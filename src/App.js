import ContactList from "./Components/ContactsList/ContactsList";
import ContactForm from "./Components/ContactForm/ContactForm";
import Filter from "./Components/Filter/Filter";

function App() {
  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <p className="App-find">Find contacts by name</p>
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;
