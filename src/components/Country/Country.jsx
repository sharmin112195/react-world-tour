/* eslint-disable react/prop-types */
import { useState } from 'react';
import './Country.css'
import CountryDetail from '../CountryDetail/CountryDetail';
const Country = ({country,handleVisitedCountry,handleVisitedFlags}) => {
    // console.log(country)
    const {name, flags,population,area,cca3} = country
    const[visited,setVisited]=useState(false)
    const handleVisited=()=>{
        // setVisited(true)
        setVisited(!visited)
    }

    //  console.log(handleVisitedCountry)
    return (
        <div className={`country ${visited ? 'visited':'non-visited'}`}>
            <img src={flags.png} alt="" />
            <h3 style={{color: visited ? 'purple' : 'white'}}>Name: {name ?.common}</h3>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={handleVisited}>{visited ?'Visited':'Going'}</button>
            {visited ? 'I have visited this country' : 'I want to visit'}
            <br />
            <br />
            <button onClick={()=>handleVisitedCountry(country)}>Mark Visited</button>
            <br />
            <br />
            <button onClick={()=>handleVisitedFlags(country.flags.png)}>Add Flag</button>
            <hr />
            <CountryDetail country={country} handleVisitedCountry={handleVisitedCountry}
             handleVisitedFlags={handleVisitedFlags}></CountryDetail>
        </div>
    );
};

export default Country;