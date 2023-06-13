import React from "react";
import "./sbscr.scss";

import { numberTr } from "../../Data/Subscr/Sbscr";
import { typeTr } from "../../Data/Subscr/Sbscr";
import { typeTr2 } from "../../Data/Subscr/Sbscr";
import { typeTr3 } from "../../Data/Subscr/Sbscr";

const Sbscr = () => {
  return (
    <div className="big-wrapper">
      <h2>Абонементы</h2>
      <div className="wrapper-data">
        <div className="data-numbers">
          {numberTr.map((res) => (
            <p key={res.id}>{res.title}</p>
          ))}
        </div>
        <div className="data-types">
          {typeTr.map((res) => (
            <p key={res.id}>{res.title}</p>
          ))}
        </div>
        <div className="data-types">
          {typeTr2.map((res) => (
            <p key={res.id}>{res.title}</p>
          ))}
        </div>
        <div className="data-types">
          {typeTr3.map((res) => (
            <p key={res.id}>{res.title}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sbscr;
