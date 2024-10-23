import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const[countries,setCountries]=useState([]);
    const[visitedCountry,setVisitedCountry]=useState([])
    const[visitedFlags,setVisitedFlags]=useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

   const handleVisitedCountry = country =>{
    console.log('add this to your visited country')
    //  console.log(country)
    const newVisitedCountry = [...visitedCountry,country]
    setVisitedCountry(newVisitedCountry)
   }

    const handleVisitedFlags = flag => {
         console.log('flag adding')
        const newVisitedFlags = [...visitedFlags,flag]
        setVisitedFlags(newVisitedFlags)
    }
    return (
        <div>
           <h3>Countries:{countries.length}</h3> 
           {/* visited country */}
           <div>
            <h5>Visited countries: {visitedCountry.length}</h5>
            <ul>
              {
                visitedCountry.map(country => <li key={country.cca3}>{country.name.common}</li>)
              }
            </ul>
           </div>

             {/* visited flag */}
          <div className="flag-container">
            {
               visitedFlags.map((flag,idx) => <img key={idx} src={flag}></img>)
            }
          
          </div>
           {/* display countries */}
          <div className="country-container">
          { 
            countries.map(country => <Country key={country.cca3} country={country} handleVisitedCountry={handleVisitedCountry}
                handleVisitedFlags={handleVisitedFlags}></Country>)
           } 
          </div>

        
        </div>
    );
};

export default Countries;