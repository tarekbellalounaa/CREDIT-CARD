import React from "react";
import card from "./card.png";
import chip from "./chip.JPG";
const Card = (props) => {
    return (
      <div className="card">
        <div className="name style ">
          <p>GoMyCode</p>
        </div>

        <div className="puce ">
          <img style={{ width: "55px" }} src={chip} />
        </div>

        <div className="cardnumber style">
          <p>{props.code.padEnd(16, "*")
        .replace(/(.{4})/g, "$1 ")
        .trim()}</p>
        </div>

        <div className="validthru style">
          <p>{props.date ? props.date.replace(/(\d{2})/, '$1 / ') : "MM / YY"}</p>
        </div>

        <div className="lastname style">
          <p>{props.name.toUpperCase()} </p>
        </div>

        <img className="mastercard" src={card} />
      </div>
    );
}

export default Card;
