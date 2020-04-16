import React from "react";
import CountryList from "../CountryList";

const Sorted = ({ countries, query }) => {
  const sortedCountries = countries.reverse().sort((a, b) => {
    return b.TotalDeaths - a.TotalDeaths;
  });

  const filtered = sortedCountries.filter((countries) =>
    countries.Country.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div>
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
};
export default Sorted;
