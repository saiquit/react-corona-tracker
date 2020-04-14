import React, { useState } from "react";

const CountryList = ({
  Country,
  CountryCode,
  idx,
  TotalConfirmed,
  TotalDeaths,
  NewConfirmed,
  NewDeaths,
  NewRecovered,
  TotalRecovered,
}) => {
  const [toggle, setToggle] = useState(false);

  return (
    <ul className="list-group">
      <li
        className="list-group-item d-flex justify-content-between align-items-center"
        onClick={() => setToggle(!toggle)}
      >
        <span>
          <img
            className="mr-1"
            src={`https://www.countryflags.io/${CountryCode.toLowerCase()}/flat/24.png`}
            alt=""
          />
          {Country}
        </span>
        <span className="text-right ml-auto">Total Death: </span>
        <span className="badge badge-danger badge-pill m-2 p-2">
          {TotalDeaths}
        </span>
      </li>
      {toggle ? (
        <ul className="list-group">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <div className="col-sm-2">
              <span> NewConfirmed: {NewConfirmed}</span>
              <span> NewRecovered: {NewRecovered}</span>
            </div>
            <div className="col-sm-2">
              <span> TotalRecovered: {TotalRecovered}</span>
              <span> TotalConfirmed: {TotalConfirmed}</span>
            </div>
          </li>
        </ul>
      ) : null}
    </ul>
  );
};

export default CountryList;
