import { useEffect, useState } from 'react';
import { getCities } from '../servicios/getCities';
import { getCountries } from '../servicios/getCountries';
import { getWeather } from '../servicios/getWeather';
import { Weather } from './Weather.jsx';
import "../hojas-de-estilo/FormDatos.css"

export default function FormDatos() {


  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [weather, setWeather] = useState(null);


  useEffect(() => {
    (async () => {
      setCountries(await getCountries());
    })();
  }, []);

  const countryHandler = async e => {
    e.currentTarget.value && setCities(await getCities(e.currentTarget.value));
    setWeather(null)
  };

  const cityHandler = async e => {
    e.currentTarget.value && setWeather(await getWeather(e.currentTarget.value))
  };


  return (
    <div className="container flex-column justify-content-center align-items-center">
      <div className="container">
        <h1 className="display-1 text-center fw-bold p-3 m-3">{`Clima`}</h1>
      </div>
      <div className="form-floating ">
        <select className="form-select" id="floatingSelect" aria-label="Floating label select 1" onChange={countryHandler}>
          <option >país</option>
          {countries.map(country => <option key={country.cca2} value={country.cca2}> {country.name.common} </option>)}
        </select>
        <label htmlFor="floatingSelect">Selecciona un Pais</label>
      </div>
      {cities.length > 0 &&
        (<div className="form-floating">
          <select className="form-select" id="floatingSelect" aria-label="Floating label select 2" onChange={cityHandler}>
            <option>Ciudad</option>
            {cities.map(city => <option key={city.id} >{city.name} </option>)}
          </select>
          <label htmlFor="floatingSelect">Selecciona una Ciudad</label>
        </div>)}
      {weather && <Weather weather={weather} />}

    </div>

  );
}
