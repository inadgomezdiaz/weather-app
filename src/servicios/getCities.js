import { ajax } from "../herramientas/ajax.js";

export const getCities = async countryCode => {

  const optionRequest = {
    headers: {
      'X-RapidAPI-Key': '52d2accc25msh9c46641a50a5bb9p1c04b3jsnbd6876bb68a1',
      'X-RapidAPI-Host': 'spott.p.rapidapi.com'
    },
    method: 'GET',
    url: 'https://spott.p.rapidapi.com/places',
    params: { type: 'CITY', country: countryCode , limit: '100' }

  };
  return await ajax(optionRequest);
} 