import axios from 'axios';

const baseurl = 'https://restcountries.com/v3.1/'

export const getCountries = async (name: string) => {
    const { data } = await axios.get(`${baseurl}name/${name}`);
    return data;
}

const countryService = {
    getCountries
}

export default countryService;
