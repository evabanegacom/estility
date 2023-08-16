import React, { useState } from 'react';
import './App.css';
import countryService, { getCountries } from './services/country-service';

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
  const handleCountry = (e:any) => {
   setCountryName(e.target.value)
  }

  const getCountry = async (e:any) => {
    e.preventDefault()
    const response = await countryService.getCountries(countryName)
    console.log(response)
    setCountry(response)
  }
  return (
    <div className="row">
      { country.map((country: any) => (
        <>
          <div className='country flag'>
        <img src={country?.flags?.png as any} alt='flag' />
        <div className='fw-bold'>{}</div>
        <div>{country?.altSpellings[1]}</div>
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
      <div className='d-flex flex-column col-md-5'>
        {/* <img src={ } alt='flag' /> */}
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
        </>
      ))
      
}
      <form onSubmit={getCountry}>
        <input type='text' onChange={handleCountry} placeholder='Search for a country' />
        <button>Get details</button>
      </form>
      </div>
  );
}

export default App;
