import React, { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import countryService from './services/country-service';

interface capitalProps {
  name?: string
  people?: string;
  language?: string;
  currency?: string;
  capital?: string;
  coordinates?: string;
  day?: string;
  info?: string;
  continent?: string;
  link?: string;
  flags?:string
  png?: any;
}

const CountryDetails: React.FC = () => {

  const [countryName, setCountryName] = useState<string>("")
  const [country, setCountry] = useState<capitalProps[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<any>("")

  const handleCountry = (e: any) => {
    setCountryName(e.target.value);
  }
  
  const getCountry = async (e: any) => {
    setLoading(true);
    setError('')
    e.preventDefault();
  
    try {
      const response = await countryService.getCountries(countryName);
      console.log(response);
      if (response.length === 0) {
        alert('No country found.');
      } else {
        setCountry(response);
      }
    } catch (error: any) {
      console.error('An error occurred while fetching the country:', error?.message);
      setError(error?.message);
      // You can handle the error here, e.g. show an error message to the user.
    } finally {
      setLoading(false);
    }
  };
  

  const isValid = loading || countryName.length === 0;

  return (
    <div className="row">
      {error && <p className='error'>Country not found</p>}
      { country.map((country: any, index: number) => (
        <div key={index} className='country-container'>
          <div className='country-flag'>
        <img src={country?.flags?.png as any} alt='flag' />
        <div className='fw-bold'>{}</div>
        <div className='country-name'>{country?.name?.official}</div>
        <div>{country?.continents[0]}</div>
        <div className='d-flex'>
          <div>{Math.round(country?.population/1000000)} million people</div>
        </div>
        <div className='d-flex'>
          {/* <img src={ } alt='people' /> */}
          <div>
  {Object.values(country?.languages).map((language:any, index) => (
    <div key={index}>{language}</div>
  ))}
</div>        </div>
        <div className='d-flex'>
          {/* <img src={ } alt='people' /> */}
          <div>
  {Object.values(country?.currencies).map((currency:any, index) => (
    <div key={index}>
      {currency.name} {currency.symbol}
    </div>
  ))}
</div>        </div>
      </div>
      <div className='country-flag '>
        <div className='coat-of-arms'><img src={country?.coatOfArms?.svg } alt='flag' /></div>
        <div className='fw-bold'>{country?.capital[0]}</div>
        <div>{country?.capitalInfo?.latlng[0]} latitude {country?.capitalInfo?.latlng[1]} longitude </div>
        <div className='d-flex'>
          {/* <img src={ } alt='people' /> */}
          <div className='start-of-week'>{country?.startOfWeek}</div>
        </div>
        <div className='d-flex'>
          {/* <img src={ } alt='people' /> */}
          <div>No definitions Available</div>
        </div>
        <div className='d-flex'>
          {/* <img src={ } alt='people' /> */}
          <div>{country?.continents[0]}</div>
        </div>
        <div className='d-flex'>
          {/* <img src={ } alt='people' /> */}
          <Link to={country?.maps?.googleMaps} target="_blank" rel="noopener noreferrer">Map link</Link>
        </div>
      </div>
        </div>
      ))
      
}
      <form onSubmit={getCountry}>
        <input type='text' onChange={handleCountry} placeholder='Search for a country' />
        <button type='submit' disabled={isValid}>{loading? 'Sending...' : 'Get details'}</button>
      </form>
      </div>
  );
}

export default CountryDetails;
