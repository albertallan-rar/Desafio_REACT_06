// src/App.tsx

import { useState } from 'react';
import { Country, searchCountryByName, getAllCountries} from '../API/countriesAPI';

function CountrySearch(){
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Country[]>([]);
  const [allCountries, setAllCountries] = useState<Country[]>([]);

  const handleSearch = async () => {
    try {
      const response = await searchCountryByName(searchTerm);
      setSearchResults(response);
      setAllCountries([])
    } catch (error) {
      console.error('Failed to search for country:', error);
    }
  };

  const handleLoadAllCountries = async () => {
    try {
      const response = await getAllCountries();
      setAllCountries(response);
      setSearchResults([])
    } catch (error) {
      console.error('Failed to load all countries:', error);
    }
  };

  return (
    <div className='mx-auto p-4 bg-black min-h-screen'>
      <div className='bg-slate-400 rounded-2xl p-5 '>
        <h1 className='text-3xl font-bold mb-4 text-center text-amber-950'>Search Country</h1>
        <input
          type="text"
          className='border border-gray-700 rounded-md py-2 px-4 w-full mb-4'
          placeholder="Enter country name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="flex justify-center">
          <button
            className="bg-slate-600 border-2 border-gray-500 hover:bg-slate-500 text-white py-2 px-4 rounded-md mr-4"
            onClick={handleSearch}
          >
            Buscar
          </button>
          <button
            className="bg-slate-600 border-2 border-gray-500 hover:bg-slate-500 text-white py-2 px-4 rounded-md"
            onClick={handleLoadAllCountries}
          >
            Todos os Países
          </button>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 '>
          {searchResults.map(country => (
            <div key={country.name.common} className='border border-gray-300 bg-orange-400 rounded-md p-4'>
              <h2 className='text-xl font-bold mb-2 text-amber-900'>{country.name.common}</h2>
              <p className='text-black'>
                <span className='font-bold text-black'>Capital:</span> {country.capital}
              </p>
              <p>
                <span className='font-bold'>Region:</span> {country.region}
              </p>
              <p>
                <span className='font-bold'>Subregion:</span> {country.subregion}
              </p>
              <p>
                <span className='font-bold'>Population:</span> {country.population}
              </p>
              <p>
                <span className='font-bold'>Area: </span> {country.area} km²
              </p>
            </div> 
          ))}
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
          {allCountries.map(country => (
            <div key={country.name.common} className='border border-gray-300 rounded-md p-4'>
              <p>
                <span className='font-bold'>Capital:</span>{country.capital}
              </p>
              <p>
                <span className='font-bold'>Region:</span> {country.region}
              </p>
              <p>
                <span className='font-bold'>Subregion:</span> {country.subregion}
              </p>
              <p>
                <span className='font-bold'>Population:</span> {country.population}
              </p>
              <p>
                <span className='font-bold'>Area: </span>{country.area} km²
              </p>
            </div>
          ))}
        </div> 
      </div>
    </div>
  );
}

export default CountrySearch;
