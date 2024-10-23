import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const[countries,setCountries]=useState([]);
    const[visitedCountry,setVisitedCountry]=useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
   const handleVisitedCountry = country =>{
    console.log('add this to your visited country')
    // console.log(country)
    const newVisitedCountry = [...visitedCountry,country]
    setVisitedCountry(newVisitedCountry)
   }
    return (
        <div>
           <h3>Countries:{countries.length}</h3> 
           <div>
            <h5>Visited countries:</h5>
            <ul>
              {
                visitedCountry.map(country => <li key={country.cca3}>{country.name.common}</li>)
              }
            </ul>
           </div>
          <div className="country-container">
          { 
            countries.map(country => <Country key={country.cca3} country={country} handleVisitedCountry={handleVisitedCountry}></Country>)
           } 
          </div>
        </div>
    );
};

export default Countries;