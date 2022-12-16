const Persons = ({ person, removeContact }) => {
    return (
        <div>
            <p>{person.name} {person.number}</p>
            <button onClick={removeContact}>delete</button>
        </div>
    )
}

export default Persons