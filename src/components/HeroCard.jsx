import React from "react";
import WorldAnimation from "./WorldAnimation";

const HeroCard = ({
  global: {
    NewConfirmed,
    TotalConfirmed,
    NewDeaths,
    TotalDeaths,
    NewRecovered,
    TotalRecovered,
  },
}) => {
  return (
    <div className="">
      <div className="card mx-auto card-container" style={{ width: "18rem" }}>
        <div className="card-body d-flex ">
          <div className="col-2">
            <WorldAnimation />
          </div>
          <div className="col-10">
            <ul className="list-group list-group-flush">
              <li className="list-group-item font-weight-bold">
                Total Deaths:{" "}
                <span className="text-danger"> {TotalDeaths}</span>
              </li>
              <li className="list-group-item font-weight-bold">
                New Deaths: <span className="text-danger"> {NewDeaths}</span>
              </li>
              <li className="list-group-item font-weight-bold ">
                Confirmed:{" "}
                <span className="text-danger text-right">
                  {" "}
                  {TotalConfirmed}
                </span>
              </li>
              <li className="list-group-item font-weight-bold">
                Recovered:{" "}
                <span className="text-success text-right">
                  {TotalRecovered}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
