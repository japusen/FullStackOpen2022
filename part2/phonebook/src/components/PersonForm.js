const PersonForm = ({ submitHandler, name, nameChange, number, numberChange}) => {
    return (
        <form onSubmit={submitHandler}>
        <div>
            name: 
            <input 
              value={name}
              onChange={nameChange}
            />
        </div>
        <div>
            number: 
            <input 
              value={number}
              onChange={numberChange}
            />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default PersonForm