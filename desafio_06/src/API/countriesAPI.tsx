// src/API/countriesAPI.ts

import axios from 'axios';

const BASE_URL = 'https://restcountries.com/v3.1';

// Interface para a tipagem dos dados retornados pela API
export interface Country {
  name: {
    common: string;
  };
  capital: string;
  region: string;
  subregion: string;
  population: number;
  area: number;
}

export const searchCountryByName = async (name: string): Promise<Country[]> => {
  const url = `${BASE_URL}/name/${name}`;
  const response = await axios.get(url);
  return response.data;
};

export const getAllCountries = async (): Promise<Country[]> => {
  const response = await axios.get('https://restcountries.com/v3.1/all');
  return response.data;
};