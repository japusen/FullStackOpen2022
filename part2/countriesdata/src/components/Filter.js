const Filter = ({ filter, filterChange }) => {
    return (
        <div>
          filter countries 
          <input 
            value={filter}
            onChange={filterChange}
          />
      </div>
    )
}

export default Filter