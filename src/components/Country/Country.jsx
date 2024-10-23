/* eslint-disable react/prop-types */
import { useState } from 'react';
import './Country.css'
const Country = ({country}) => {
    console.log(country)
    const {name, flags,population,area,cca3} = country
    const[visited,setVisited]=useState(false)
    const handleVisited=()=>{
        // setVisited(true)
        setVisited(!visited)
    }
    return (
        <div className="country">
            <img src={flags.png} alt="" />
            <h3>Name: {name ?.common}</h3>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={handleVisited}>{visited ?'Visited':'Going'}</button>
            {visited ? 'I have visited this country' : 'I want to visit'}
        </div>
    );
};

export default Country;