import { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Persons'
import Notification from './components/Notification'
import phonebookService from './services/phonebook'

const App = () => {
  // state variables
  const [contacts, setContacts] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [notifMessage, setNotifMessage] = useState(null)


  // load data from server
  useEffect(() => {
    phonebookService
      .getAll()
      .then(initialPhonebook => {
        setContacts(initialPhonebook)
      })
  }, [])

  // add a new number when the form is submitted (only if it does not already exist)
  const addNumber = (event) => {
    event.preventDefault()
    const numberObject = {
      name: newName,
      number: newNumber,
    }

    let hasName = false
    contacts.forEach(person => {
      if (person.name === newName)
      hasName = true
    })
  
    if (hasName) {
      const contact = contacts.find(n => n.name === newName)
      if (window.confirm(`${contact.name} is already added to phonebook, replace the old number with a new one?`)) {
        const updatedContact = { ... contact, number: newNumber }
        phonebookService
        .update(updatedContact.id, updatedContact)
        .then( returnedContact => {
          setContacts(contacts.map(n => n.id !== updatedContact.id ? n : returnedContact))
          setNewName('')
          setNewNumber('')
        })
        .catch(error => {
          setNotifMessage(`Information of ${updatedContact.name} has already been removed from server`)
          setTimeout( () => {
            setNotifMessage(null)
          }, 5000)
        })
      }
    } else {
      phonebookService
      .create(numberObject)
      .then(returnedNumber => {
        setContacts(contacts.concat(returnedNumber))
        setNewName('')
        setNewNumber('')
        setNotifMessage(`Added ${returnedNumber.name}`)
        setTimeout( () => {
          setNotifMessage(null)
        }, 5000)
      })
    }
  }

  // remove a contact from server
  const removeContact = (id) => {
    const contact = contacts.find(n => n.id === id)
    
    if (window.confirm(`Delete ${contact.name}?`)) {
      phonebookService
      .remove(id)
      .then(setContacts(contacts.filter(n => n.id !== id)))
    }
  }

  // maintain the next name to state
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  // maintain the next number to state
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  // update the state of the filter
  const handleFilterChange = (event) => {
    setFilter(event.target.value.toLowerCase())
  }

  // filter contacts by what's typed in the filter input
  const contactsToShow = contacts.filter(person => person.name.toLowerCase().includes(filter))

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notifMessage} />
      <Filter
        filter={filter}
        filterChange={handleFilterChange}
      />

      <h2>add a new number</h2>
      <PersonForm 
        submitHandler={addNumber} 
        name={newName}
        nameChange={handleNameChange}
        number={newNumber}
        numberChange={handleNumberChange}
      />

      <h2>Numbers</h2>
      {contactsToShow.map(person => 
        <Persons
          key={person.id} 
          person={person}
          removeContact={() => removeContact(person.id)}/>
      )}
    </div>
  )
}

export default App