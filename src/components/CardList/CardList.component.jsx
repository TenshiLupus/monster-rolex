import { Component } from "react";

import Card from "../Card/Card.component";
import "./CardList.styles.css";


//Alledgedly React function parameters only get 2 arguments
//If we do not have naything else to return we can to an implicit return.

const CardList = ({monsters}) => (

    <div className="card-list">
      {monsters.map((monster) => {
        return <Card monster={monster} />;
      })}
    </div>
);

export default CardList;
