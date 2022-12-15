import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import axios from 'axios'
import Countries from "./components/Countries"

const App = () => {
  // state variables
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  // load data from server
  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  // update the state of the filter
  const handleFilterChange = (event) => {
    setFilter(event.target.value.toLowerCase())
  }

  // filter countries by the filter input
  const countriesToShow = countries.filter(country => country.name.common.toLowerCase().includes(filter))

  return (
    <div>
      <Filter
        filter={filter}
        filterChange={handleFilterChange}
      />
      <Countries countries={countriesToShow} />
    </div>
  )
}

export default App