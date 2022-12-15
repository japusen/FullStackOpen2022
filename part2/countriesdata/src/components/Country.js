const Country = ({ country }) => {
    if (country.length !== 0) {
        console.log(country.capitalInfo.latlng[0], country.capitalInfo.latlng[1])
        return (
            <div>
                <h1>{country.name.common}</h1>
                <p>capital {country.capital}</p>
                <p>population {country.population}</p>
                <img src={country.flags.png} alt={country.name.common}></img>
            </div>
        )
    }
}

export default Country