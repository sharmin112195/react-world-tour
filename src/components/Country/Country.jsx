/* eslint-disable react/prop-types */
import './Country.css'
const Country = ({country}) => {
    console.log(country)
    const {name, flags,population,area,cca3} = country
    return (
        <div className="country">
            <img src={flags.png} alt="" />
            <h3>Name: {name ?.common}</h3>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button>Visited</button>
        </div>
    );
};

export default Country;