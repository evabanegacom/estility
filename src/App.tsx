import React, { useState } from 'react';
import './App.css';
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

const App: React.FC<capitalProps> = ({ name, people, language, currency, flags, capital, coordinates, day, info, continent, link }) => {

  const [countryName, setCountryName] = useState<string>("")
  const [country, setCountry] = useState<capitalProps[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<any>("")

  const handleCountry = (e: any) => {
    setCountryName(e.target.value);
  }
  
  const getCountry = async (e: any) => {
    setLoading(true);
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
        <div>{country?.altSpellings[1]}</div>
        <div className='d-flex'>
          <div>20.1 million people</div>
        </div>
        <div className='d-flex'>
          {/* <img src={ } alt='people' /> */}
          <div>20.1 million people</div>
        </div>
        <div className='d-flex'>
          {/* <img src={ } alt='people' /> */}
          <div>20.1 million people</div>
        </div>
      </div>
      <div className='country-flag '>
        <div className='coat-of-arms'><img src={country?.coatOfArms?.svg } alt='flag' /></div>
        <div className='fw-bold'>Nigeria</div>
        <div>AFrica</div>
        <div className='d-flex'>
          {/* <img src={ } alt='people' /> */}
          <div>20.1 million people</div>
        </div>
        <div className='d-flex'>
          {/* <img src={ } alt='people' /> */}
          <div>20.1 million people</div>
        </div>
        <div className='d-flex'>
          {/* <img src={ } alt='people' /> */}
          <div>20.1 million people</div>
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

export default App;
