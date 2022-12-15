import { useState } from 'react'
import Country from './Country'

const Countries = ({ countries }) => {
    const [shownCountry, setShownCountry] = useState([])
    const numCountries = countries.length
    
    if (numCountries > 10) {
        return ("Too many matches, specify another filter")
    } else if (numCountries <= 10 && numCountries > 1) {
        return (
            <div>
                {countries.map(country => 
                    <div key={country.name.common}>
                        {country.name.common}
                        <button onClick={() => {
                            setShownCountry(country)
                        }}>show</button>
                    </div>
                )}
                <Country country={shownCountry} /> 
            </div>
            
        )
    } else if (numCountries === 1) {
        const country = countries[0]
        return (
            <div>
                <Country country={country} />
            </div>
            
        )
    }
        
}

export default Countries