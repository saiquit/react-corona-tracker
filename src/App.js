import React, { useEffect, useState } from "react";
import CountryList from "./components/CountryList";
import Input from "./components/Input";
import "./App.css";
import HeroCard from "./components/HeroCard";

function App() {
  const [global, setGlobal] = useState({});
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch(`https://api.covid19api.com/summary`)
      .then((res) => res.json())
      .then((data) => {
        setGlobal(data.Global);
        setCountries(data.Countries);
        console.log(data.Global);
      });
    return () => {};
  }, []);
  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
  };

  const filtered = countries.filter((countries) =>
    countries.Country.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="App">
      <div className="bg"></div>
      <Input
        placeholder="Search Country"
        value={query}
        handleChange={handleChange}
      />
      <HeroCard global={global} />
      {countries.length ? (
        filtered.map(({ Slug, ...otherProps }) => (
          <CountryList key={Slug} {...otherProps} />
        ))
      ) : (
        <div className="d-flex justify-content-center spinner ">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
