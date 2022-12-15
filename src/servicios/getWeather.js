import { ajax } from "../herramientas/ajax.js";

export const getWeather = async city => {

  const optionRequest = {
    method: 'GET',
    url: 'https://api.openweathermap.org/data/2.5/weather',
    params: { q: city, appid: "242583ce0ea6cd61026117e0ff604d83" , units:"metric" }

  };
  return await ajax(optionRequest);
}  