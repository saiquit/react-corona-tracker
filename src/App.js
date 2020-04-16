import React, { useEffect, useState } from "react";
import Input from "./components/Input";
import "./App.css";
import HomePage from "./components/pages/HomePage";
import HeroCard from "./components/HeroCard";
import Sorted from "./components/pages/Sorted";

import { Route, Switch, Link } from "react-router-dom";

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
      });
    return () => {};
  }, [countries]);
  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
  };

  return (
    <div className="App">
      <div className="bg"></div>
      <Input
        placeholder="Search Country"
        value={query}
        handleChange={handleChange}
      />
      <HeroCard global={global} />

      <Switch>
        <Route
          exact
          path="/"
          render={() => <HomePage countries={countries} query={query} />}
        />
        <Route
          path="/sorted"
          render={() => <Sorted countries={countries} query={query} />}
        />
      </Switch>
    </div>
  );
}

export default App;
